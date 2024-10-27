import authConfig from "@/auth.config";
import NextAuth, { type DefaultSession } from "next-auth";

import { getUserById } from "@/data/users";
import { default as db, default as prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import { getAccountByUserId } from "./data/accounts";
import { getTwoFactorAuthConfirmationBUserId } from "./data/two-factor-auth-confirmation";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOAuth: boolean;
    } & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },

  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser: any = await getUserById(user.id as string);
      if (existingUser && "emailVerified" in existingUser === null) return false;
      if (existingUser && "isTwoFactorEnabled" in existingUser === null) {
        const twoFactorAuthConfirmation = await getTwoFactorAuthConfirmationBUserId(
          existingUser?.id,
        );

        if (!twoFactorAuthConfirmation) return false;

        await prisma.twoFactorConfirmation.delete({
          where: { id: twoFactorAuthConfirmation.id },
        });
      }

      return true;
    },

    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser: any = await getUserById(token.sub as string);
      const existingAccount = await getAccountByUserId(existingUser?.id);

      if (!existingUser) return token;

      token.isOAuth = !!existingAccount;
      token.name = `${existingUser.firstName} ${existingUser.lastName}`;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },

    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub;

      if (token.role && session.user) session.user.role = token.role as UserRole;

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
