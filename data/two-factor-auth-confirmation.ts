import prisma from "@/lib/db";

export const getTwoFactorAuthConfirmationBUserId = async (userId: string) => {
  try {
    const twoFactorAuthConfirmation = await prisma.twoFactorConfirmation.findUnique({
      where: {userId },
    });
    return twoFactorAuthConfirmation;
  } catch (error) {
    return null;
  }
};
