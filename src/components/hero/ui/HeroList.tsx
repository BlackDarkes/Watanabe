"use client"

import { Product } from "@/generated/prisma/client";
import { HeroListItem } from "./HeroListItem";
import { useModelFormStore } from "@/components/modal-form";

interface IHeroListProps {
  products: Product[];
}
  
export const HeroList = ({ products }: IHeroListProps) => {
  const { handleOpen } = useModelFormStore();

  return (
    <ul className="flex gap-x-6 py-4 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      { products.map((product) => (
        <HeroListItem key={product.id} product={product} handleOpenModel={handleOpen} />
      )) }
    </ul>
  );
}