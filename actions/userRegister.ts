"use server";

import { UserRegisterSchema } from "@/schemas/userRegister";
import type * as z from "zod";

export const userRegistration = async (values: z.infer<typeof UserRegisterSchema>) => {
  const validatedFields = UserRegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalid fields" };
  }

  return { success: "verification email sent" };
};
