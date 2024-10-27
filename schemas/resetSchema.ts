import * as z from "zod";

export const ResetSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

/*

.refine(async (e) => {
     return await checkIfEmailIsValid(e);
}, "This email is not in our database")

*/


