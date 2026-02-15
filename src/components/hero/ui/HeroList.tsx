import { Product } from "@/generated/prisma/client";
import { HeroListItem } from "./HeroListItem";

interface IHeroListProps {
  products: Product[];
}
  
export const HeroList = ({ products }: IHeroListProps) => {
  return (
    <ul className="flex gap-x-6 py-4 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      { products.map((product) => (
        <HeroListItem key={product.id} product={product} />
      )) }
    </ul>
  );
}