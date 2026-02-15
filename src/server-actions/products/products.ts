"use server"

import prisma from "@/shared/lib/prisma";
import { logger } from "@/utils/logger";

export const getProducts = async (limit?: number) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        comments: true,
      },
      take: limit
    })

    return products;
  } catch(error) {
    logger.error("getProducts", error);
    return [];
  }
}