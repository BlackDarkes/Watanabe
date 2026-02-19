"use server"

import prisma from "@/shared/lib/prisma";
import { logger } from "@/utils/logger";

export const getProducts = async (limit?: number) => {
  try {
    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        include: {
          comments: true,
        },
        take: limit,
      }),
      prisma.product.count(),
    ])


    return {
      products,
      totalCount
    };
  } catch(error) {
    logger.error("getProducts", error);
    return {
      products: [],
      totalCount: 0,
    };
  }
}