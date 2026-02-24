import { Product } from "@/generated/prisma/client";
import Image from "next/image";
import { Star } from "lucide-react";
import { ProductItemTag } from "./ProductItemTag";

interface IProductItemProps {
  product: Product;
  handleOpenModel: () => void;
}
  
export const ProductItem = ({ handleOpenModel, product }: IProductItemProps) => {
  return (
    <li className="flex flex-col shrink-0 gap-y-3.75 p-2.5 bg-(--card-bg) w-[min(100%,280px)] rounded-xl shadow-(--block-shadow) snap-center">
      <Image
        src={product.img}
        alt={product.name}
        width={260}
        height={260}
        className="ratio w-[clamp(220px,40vw,260px)]"
      />

      <div>
        <h3
          className="mb-1.25 text-[clamp(14px,4vw,24px)] font-semibold w-[min(100%,280px)] truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        <div className="flex gap-x-2.5 mb-5 overflow-auto text-nowrap overscroll-x-contain scrollbar-hide">
          {product.tags.map((tag, index) => (
            <ProductItemTag key={index} tag={tag} />
          ))}
        </div>
        <div className="flex items-center justify-between mb-6.25">
          <p className="text-(--third-color) font-bold text-[clamp(20px,4vw,26px)]">
            {product.price} ₽
          </p>

          <p className="flex items-center gap-x-1.25">
            <Star
              className="text-(--star-color) fill-(--star-color)"
            />{" "}
            {product.star}
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenModel}
          className="w-full py-[clamp(6px,4vw,10px)] bg-(--accent-color) text-[--second-color] uppercase font-bold rounded-xl cursor-pointer transition duration-400 hover:bg-(--third-color)"
        >
          Купить
        </button>
      </div>
    </li>
  );
}