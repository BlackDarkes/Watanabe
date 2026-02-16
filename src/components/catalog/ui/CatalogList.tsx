
import { Product } from "@/generated/prisma/client";
import { CatalogListItem } from "./CatalogListItem";

interface ICatalogListProps {
  products: Product[];
}
  
export const CatalogList = ({ products }: ICatalogListProps) => {
  return (
    <ul>
      { products.map((product) => (
        <CatalogListItem key={product.id} product={product} />
      )) }
    </ul>
  );
}