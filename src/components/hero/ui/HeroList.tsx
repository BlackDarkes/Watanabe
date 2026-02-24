"use client"

import { Product } from "@/generated/prisma/client";
import { useModelFormStore } from "@/components/modal-form";
import { ProductItem } from "@/shared/ui";

interface IHeroListProps {
  products: Product[];
}
  
export const HeroList = ({ products }: IHeroListProps) => {
  const { handleOpen } = useModelFormStore();

  return (
    <ul className="flex gap-x-6 py-4 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      { products.map((product) => (
        <ProductItem key={product.id} product={product} handleOpenModel={() => handleOpen(product)} />
      )) }
    </ul>
  );
}