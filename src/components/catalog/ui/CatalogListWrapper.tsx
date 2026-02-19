"use client";

import { IProduct } from "@/shared/types/product.interface";
import { CatalogList } from "./CatalogList";
import { CatalogButtonShow } from "./CatalogButtonShow";
import { useState } from "react";
import { getProducts } from "@/server-actions/products/products";

interface ICatalogListWrapperProps {
  products: IProduct[];
}

export const CatalogListWrapper = ({ products }: ICatalogListWrapperProps) => {
  const [updateProducts, setUpdateProducts] = useState(products);
  const [limit, setLimit] = useState(8);

  const handleShowMore = async () => {
    const newLimit = limit + 4;
    const newProducts = await getProducts(newLimit);
    setUpdateProducts(newProducts);
    setLimit(newLimit);
  };

  return (
    <>
      <CatalogList products={updateProducts} />
      <CatalogButtonShow addLimit={handleShowMore} />
    </>
  );
};
