import * as z from "zod";

export const UserRegisterSchema = z.object({
  firstName: z.string().min(3, { message: "Must be 3 or more characters" }),
  lastName: z.string().min(3, { message: "Must be 3 or more characters" }),
  email: z.string().email("This is not a valid email."),
  phoneNumber: z.string().min(8, { message: "Must be 8 or more characters" }),
  password: z.string().min(8, { message: "Must be 8 or more characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Must be 8 or more characters" }),
});
