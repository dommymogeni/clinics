"use server";
import { getPasswordResetTokenByToken } from "@/data/tokens";
import { getUserByEmail } from "@/data/users";
import prisma from "@/lib/db";
import { NewPasswordSchema } from "@/schemas/newPassword";
import bcrypt from "bcryptjs";
import type * as z from "zod";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) => {
  if (!token) return { error: "password reset token missing" };

  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) return { error: "invalid fields" };
  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) return { error: "invalid token submitted!" };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token submitted has expired." };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const existingUser: any = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "The email does not exist" };

  const hashedPassword = await bcrypt.hash(password, 10);

  // update the user password in the database
  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  // delete the created token for the password resetting phase
  await prisma.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Password reset successful" };
};
