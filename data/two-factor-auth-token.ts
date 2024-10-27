import prisma from "@/lib/db";
import crypto from "node:crypto";

export const getTwoFactorAuthTokenbyToken = async (token: string) => {
  try {
    const twoFactorAuthToken = await prisma.twoFactorToken.findUnique({
      where: { token },
    });
    return twoFactorAuthToken;
  } catch (error) {
    return null;
  }
};

export const getTwoFactorAuthTokenbyEmail = async (email: string) => {
  try {
    const twoFactorAuthToken = await prisma.twoFactorToken.findFirst({
      where: { email },
    });
    return twoFactorAuthToken;
  } catch (error) {
    return null;
  }
};

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 300 * 1000);// 15 minutes
  const existingToken = await getTwoFactorAuthTokenbyEmail(email);

  if (existingToken) {
    await prisma.twoFactorToken.delete({ where: { id: existingToken.id } });
  }

  const twoFactorToken = await prisma.twoFactorToken.create({
    data: { email, token, expires },
  });

  return twoFactorToken;
};
