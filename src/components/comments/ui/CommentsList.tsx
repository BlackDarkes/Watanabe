import { Prisma } from "@/generated/prisma/client";
import { CommentsListItem } from "./CommentsListItem";

type Comment = Prisma.CommentGetPayload<{ include: { product: { select: { img: true, name: true } } } }>

interface ICommentsListProps {
  comments: Comment[];
}
  
export const CommentsList = ({ comments }: ICommentsListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-x-[clamp(80px,10vw,240px)] justify-items-center max-lg:gap-8 max-sm:grid-cols-1">
      { comments.map((comment) => (
        <CommentsListItem key={comment.id} comment={comment} />
      )) }
    </ul>
  );
}