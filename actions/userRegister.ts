"use server";

import { Email } from "@/components/emails/verificationTokenEmail";
import { generateVerificationToken } from "@/data/tokens";
import { getUserByEmail } from "@/data/users";
import prisma from "@/lib/db";
import { SendMail } from "@/lib/mail";
import { UserRegisterSchema } from "@/schemas/userRegister";
import bcrypt from "bcryptjs";
import type * as z from "zod";

export const userRegistration = async (
  values: z.infer<typeof UserRegisterSchema>,
) => {
  const validatedFields = UserRegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "fill the form correctly to continue" };
  }

  const { firstName, lastName, email, phoneNumber, password, role } =
    validatedFields.data;

  //password hashing and salting
  const hashPassword = await bcrypt.hash(password, 10);

  const isEmailAvailable = await getUserByEmail(email);
  if (isEmailAvailable) return { error: "Email already exists" };

  //create the user
  await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    },
  });

  // generating the verification token of the user hat has not verified the account
  const verificationToken = await generateVerificationToken(email);
  const verificationLink = `http://localhost:3000/verification?token=${verificationToken.token}`;

  await SendMail(
    verificationToken.email,
    "verification of account",
    Email({ url: verificationLink }),
  );

  // send a verification email to the user
  return { success: "verification email sent" };
};
