import { Prisma } from "@/generated/prisma/client";
import Image from "next/image";
import { Star } from "lucide-react";

type CommentWithProduct = Prisma.CommentGetPayload<{
  include: { product: { select: { img: true; name: true } } };
}>;

interface ICommentsListItemProps {
  comment: CommentWithProduct;
}

export const CommentsListItem = ({ comment }: ICommentsListItemProps) => {
  return (
    <li className="flex bg-(--card-bg) w-full rounded-xl shadow-(--block-shadow) max-lg:flex-col max-lg:w-[min(360px,260px)]">
      <Image
        src={comment.product.img}
        alt={comment.product.name}
        width={260}
        height={260}
        className="w-[clamp(220px,20vw,260px)] max-sm:w-[min(100%,260px)] max-lg:w-full"
      />

      <div className="flex flex-col justify-between p-[20px_25px]">
        <div>
          <h3 className="text-[clamp(20px,4vw,28px)] mb-3.75">{comment.name}</h3>
          <p>{comment.message}</p>
        </div>
        <div className="flex gap-x-1.25 max-sm:mt-5">
          {Array.from({ length: comment.stars }).map((_, index) => (
            <Star
              key={index}
              className="text-(--star-color) fill-(--star-color)"
            />
          ))}
        </div>
      </div>
    </li>
  );
};
