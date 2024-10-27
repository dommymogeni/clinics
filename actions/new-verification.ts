"use server";

import { getVerificationTokenByToken } from "@/data/tokens";
import { getUserByEmail } from "@/data/users";
import prisma from "@/lib/db";

export const newVerification = async (token: string) => {
  if (!token) {
    return { error: "Token does has not been submited!" };
  }

  const validToken = await getVerificationTokenByToken(token);
  if (!validToken) return { error: "Verification token does not exist" };

  const hasTokenExpired = new Date(validToken.expires) < new Date();
  if (hasTokenExpired) return { error: "The verification link has expired." };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const existingUser: any = await getUserByEmail(validToken.email);
  if (!existingUser) return { error: "Enter a valid email Address" };

  try {
    await prisma.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        emailVerified: new Date(),
        email: validToken.email,
      },
    });

    await prisma.verificationToken.delete({
      where: { id: validToken.id },
    });

    return { success: "Account verification successful" };
  } catch (error) {
    // Handle database update/delete errors
    // console.error("Database operation failed", error);
    return { error: "An error occurred during the verification process." };
  }
};
