import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { getUserByEmail } from "./data/users";
import { LoginSchema } from "./schemas/loginSchema";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      async profile(profile) {
        return { ...profile };
      },
    }),

    credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user: any = await getUserByEmail(email);
          if (!user || (user && "password" in user === null)) return null;

          const passwordMatching = bcrypt.compare(password, user.password);
          if (await passwordMatching) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
