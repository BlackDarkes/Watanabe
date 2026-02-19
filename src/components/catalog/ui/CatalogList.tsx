
import { Product } from "@/generated/prisma/client";
import { CatalogListItem } from "./CatalogListItem";

interface ICatalogListProps {
  products: Product[];
}
  
export const CatalogList = ({ products }: ICatalogListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-6.25 w-full justify-items-center max-xl:grid-cols-3 max-lg:grid-cols-2 ">
      { products.map((product) => (
        <CatalogListItem key={product.id} product={product} />
      )) }
    </ul>
  );
}