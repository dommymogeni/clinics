import * as z from "zod";

export const NewPasswordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: "this is a required field" }),
    password: z
      .string()
      .min(8, { message: "Must be 8 or more characters" })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Must contain atleast 1 uppercase character",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Must contain atleast 1 lowercase character",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Must contain atleast 1 integer character",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "Must contain atleast 1 special character",
      }),

    confirmPassword: z
      .string()
      .min(1, { message: "Must contain atleast 1 character" }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] },
  );

//superRefine
