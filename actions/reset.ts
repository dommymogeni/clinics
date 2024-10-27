"use server";

import { PasswordResetEmail } from "@/components/emails/passwordResetEmail";
import { generatePasswordResetToken } from "@/data/tokens";
import { getUserByEmail } from "@/data/users";
import { SendMail } from "@/lib/mail";
import { ResetSchema } from "@/schemas/resetSchema";
import type * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalid user fields" };
  }

  const { email } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "invalid email address" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  const resetToken = `http://localhost:3000/new-password?token=${passwordResetToken.token}`;
  await SendMail(
    passwordResetToken.email,
    "Reset your password",
    PasswordResetEmail({ url: resetToken }),
  );

  return { success: "password reset email sent" };
};
