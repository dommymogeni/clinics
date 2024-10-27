"use server";

import { getUserById } from "@/data/users";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/db";
import type { NewPasswordSchema } from "@/schemas/newPassword";
import bcrypt from "bcryptjs";
import type * as z from "zod";

export const ActionChangePassword = async (
  values: z.infer<typeof NewPasswordSchema>,
) => {
  const user = await currentUser();
  const dbUser: any = await getUserById(user?.id!);

  if (!user) return { error: "unauthorized access" };
  if (!dbUser) return { error: "unauthorized access" };

  if (values.oldPassword && values.confirmPassword && values.password) {
    const oldPasswordMatch = bcrypt.compare(values.oldPassword, dbUser?.password);

    if (await oldPasswordMatch) {
      const hashPassword = await bcrypt.hash(values.password, 10);
      values.password = hashPassword;
      await prisma.user.update({
        where: { id: dbUser.id },
        data: { password: values.password },
      });
    } else {
      return {
        error:
          "your current password does not match. please use the password you logged in with as your current password",
      };
    }
  }

  return {
    success: "Password update was successful",
  };
};
