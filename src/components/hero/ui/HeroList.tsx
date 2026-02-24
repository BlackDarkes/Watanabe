"use client"

import { Product } from "@/generated/prisma/client";
import { useModelFormStore } from "@/components/modal-form";
import { ProductItem } from "@/shared/ui";
import { useHeroStore } from "../model/hero-store";
import { useEffect, useRef } from "react";

interface IHeroListProps {
  products: Product[];
}
  
export const HeroList = ({ products }: IHeroListProps) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const { handleOpen } = useModelFormStore();
  const setScrollElement = useHeroStore((state) => state.setScrollElement);

  useEffect(() => {
    if (containerRef.current) {
      setScrollElement(containerRef.current);
    }

    return () => setScrollElement(null);
  }, [setScrollElement]);

  return (
    <ul ref={containerRef} className="flex gap-x-6 py-4 px-3 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      { products.map((product) => (
        <ProductItem key={product.id} product={product} handleOpenModel={() => handleOpen(product)} />
      )) }
    </ul>
  );
}