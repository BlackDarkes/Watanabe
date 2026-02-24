"use client"

import { Product } from "@/generated/prisma/client";
import { useModelFormStore } from "@/components/modal-form";
import { ProductItem } from "@/shared/ui";

interface ICatalogListProps {
  products: Product[];
}
  
export const CatalogList = ({ products }: ICatalogListProps) => {
  const { handleOpen } = useModelFormStore();

  return (
    <ul className="grid grid-cols-4 gap-10 w-full justify-items-center max-xl:grid-cols-3 max-lg:grid-cols-2 ">
      { products.map((product) => (
        <ProductItem key={product.id} product={product} handleOpenModel={() => handleOpen(product)} />
      )) }
    </ul>
  );
}