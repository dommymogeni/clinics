import * as z from "zod";

export const UserRegisterSchema = z.object({
  firstName: z.string().min(3, { message: "Must be 3 or more characters" }),
  lastName: z.string().min(3, { message: "Must be 3 or more characters" }),
  email: z.string().email("This is not a valid email."),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(3, {
      message: "Must be at least 10 chars",
    })
    .max(255, { message: "Must not be more than 20 chars long" }),

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
  role: z.enum(["USER", "DOCTOR", "ADMIN"]).default("USER"),
});
