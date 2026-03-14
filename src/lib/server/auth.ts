import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function getCurrentUser(token?: string) {
  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      fullName: true,
      email: true,
      createdAt: true,
    },
  });

  return user || null;
}