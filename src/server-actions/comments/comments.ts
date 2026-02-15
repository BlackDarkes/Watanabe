import prisma from "@/shared/lib/prisma";
import { logger } from "@/utils/logger"

export const getComments = async () => {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        product: {
          select: {
            img: true,
            name: true,
          }
        }
      },
      orderBy: {
        stars: "desc",
      },
      take: 6,
    });

    return comments;
  } catch(error) {
    logger.error("getComments", error);
    return [];
  }
}