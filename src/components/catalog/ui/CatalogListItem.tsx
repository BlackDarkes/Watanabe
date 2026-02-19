import { Product } from "@/generated/prisma/client";
import Image from "next/image";
import { CatalogListTag } from "./CatalogListTag";

interface ICatalogListItemProps {
  product: Product;
}

export const CatalogListItem = ({ product }: ICatalogListItemProps) => {
  return (
    <li className="flex flex-col shrink-0 gap-y-3.75 p-2.5 bg-(--card-bg) rounded-xl shadow-(--block-shadow) snap-center">
      <Image
        src={product.img}
        alt={product.name}
        width={260}
        height={260}
        className="ratio w-[clamp(220px,40vw,260px)]"
      />

      <div>
        <h3
          className="mb-1.25 text-[clamp(14px,4vw,24px)] font-semibold w-[clamp(220px,40vw,260px)] truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        <div className="flex gap-x-2.5 mb-5 overflow-auto scrollbar-hide">
          {product.tags.map((tag, index) => (
            <CatalogListTag key={index} tag={tag} />
          ))}
        </div>
        <p className="mb-6.25 text-(--third-color) font-bold text-[clamp(20px,4vw,26px)]">
          {product.price} ₽
        </p>

        <button
          type="button"
          className="w-full py-[clamp(6px,4vw,10px)] bg-(--accent-color) text-[--second-color] uppercase font-bold rounded-xl cursor-pointer transition duration-400 hover:bg-(--third-color)"
        >
          Купить
        </button>
      </div>
    </li>
  );
};
