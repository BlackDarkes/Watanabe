import { Container } from "@/shared/ui";
import { CommentsList } from "./ui/CommentsList";
import { getComments } from "@/server-actions/index";

export const Comments = async () => {
  const comments = await getComments();

  return (
    <section id="comments" className="pb-[clamp(70px,10vw,120px)]">
      <Container className="flex flex-col">
        <h2 className="mb-[clamp(40px,4vw,70px)] text-center text-[clamp(24px,4vw,36px)] font-bold">Отзывы на наши товары</h2>

        <CommentsList comments={comments} />
      </Container>
    </section>
  );
}