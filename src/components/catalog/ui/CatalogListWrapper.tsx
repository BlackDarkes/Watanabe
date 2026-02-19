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
  const [isDisabled, setIsDisabled] = useState(false);

  const handleShowMore = async () => {
    const newLimit = limit + 4;
    const { products: newProducts, totalCount } = await getProducts(newLimit);
    setUpdateProducts(newProducts);
    setLimit(newLimit);

    if (newLimit >= totalCount) {
      setIsDisabled(true);
    }
  };

  return (
    <>
      <CatalogList products={updateProducts} />
      <CatalogButtonShow addLimit={handleShowMore} isDisable={isDisabled} />
    </>
  );
};
