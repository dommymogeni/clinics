"use server";

import { LoginSchema } from "@/schemas/loginSchema";
import type * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalid fields" };
  }

  return { success: "verification email sent" };
};
