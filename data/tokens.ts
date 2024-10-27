import prisma from "@/lib/db";
import { v4 } from "uuid";

// verification token selection either by id or email
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: {
        token: token,
      },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        email: email,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

// password tokens by email or token
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findFirst({
      where: {
        email: email,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: {
        token: token,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

// verification token generation
export const generateVerificationToken = async (email: string) => {
  const token = v4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

// password resetting token generation
export const generatePasswordResetToken = async (email: string) => {
  const token = v4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingPasswordResetToken = await getPasswordResetTokenByEmail(email);

  if (existingPasswordResetToken) {
    await prisma.passwordResetToken.delete({
      where: {
        id: existingPasswordResetToken.id,
      },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};
