"use server";

import { getUserByEmail } from "@/data/users";
import db from "@/lib/db";
import { UserRegisterSchema } from "@/schemas/userRegister";
import bcrypt from "bcrypt";
import type * as z from "zod";

export const userRegistration = async (
  values: z.infer<typeof UserRegisterSchema>,
) => {
  const validatedFields = UserRegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "fill the form correctly to continue" };
  }

  const { firstName, lastName, email, phoneNumber, password } =
    validatedFields.data;

  //password hashing and salting
  const hashPassword = await bcrypt.hash(password, 10);

  //checking if the email submitted does exist in the database currently
  const isEmailAvailable = await getUserByEmail(email)
  if (isEmailAvailable) return { error: "Email already exists" };

  //create the user
  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashPassword,
    },
  });

  // sending verification email token to verify account

  return { success: "verification email sent" };
};
