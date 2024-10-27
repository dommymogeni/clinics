"use server";

import { signIn } from "@/auth";
import { TwoFactorAuthEmail } from "@/components/emails/twoFactorEmail";
import { Email } from "@/components/emails/verificationTokenEmail";
import { generateVerificationToken } from "@/data/tokens";
import { getTwoFactorAuthConfirmationBUserId } from "@/data/two-factor-auth-confirmation";
import {
  generateTwoFactorToken,
  getTwoFactorAuthTokenbyEmail,
} from "@/data/two-factor-auth-token";
import { getUserByEmail } from "@/data/users";
import prisma from "@/lib/db";
import { SendMail } from "@/lib/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { LoginSchema } from "@/schemas/loginSchema";
import { AuthError } from "next-auth";
import type * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalid fields" };
  }

  const { email, password, code } = validatedFields.data;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const existingUser: any = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "invalid login credentials" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);
    const verificationLink = `http://localhost:3000/verification?token=${verificationToken.token}`;

    await SendMail(
      verificationToken.email,
      "verification of account",
      Email({ url: verificationLink }),
    );

    return { success: "Confirmation email sent " };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorAuthTokenbyEmail(existingUser.email);
      if (!twoFactorToken) return { error: "invalid code entered!" };
      if (twoFactorToken.token !== code) return { error: "invalid code entered!" };

      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return { error: "code has expired" };
      }
      await prisma.twoFactorToken.delete({ where: { id: twoFactorToken.id } });
      const existingConfirmation = await getTwoFactorAuthConfirmationBUserId(
        existingUser.id,
      );

      if (existingConfirmation) {
        await prisma.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      await prisma.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id
        }
      })
    } else {
      const twoFactorAuthToken = await generateTwoFactorToken(existingUser.email);
      await SendMail(
        twoFactorAuthToken.email,
        "two factor authentication",
        TwoFactorAuthEmail({ token: twoFactorAuthToken.token }),
      );

      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
