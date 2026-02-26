import { Prisma } from "@/generated/prisma/client";
import { CommentsListItem } from "./CommentsListItem";
import { memo } from "react";

type Comment = Prisma.CommentGetPayload<{ include: { product: { select: { img: true, name: true } } } }>

interface ICommentsListProps {
  comments: Comment[];
}
  
export const CommentsList = memo(({ comments }: ICommentsListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-x-[clamp(80px,10vw,240px)] gap-y-[clamp(20px,10vw,40px)] justify-items-center max-lg:gap-8 max-sm:grid-cols-1">
      { comments.map((comment) => (
        <CommentsListItem key={comment.id} comment={comment} />
      )) }
    </ul>
  );
})

CommentsList.displayName = "CommentsList";