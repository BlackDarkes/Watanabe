import { Container } from "@/shared/ui";
import { FaqList } from "./ui/FaqList";
import { FAQ_ITEMS } from "@/constants/faq-items";

export const Faq = () => {
  return (
    <section id="faq" className="pb-[clamp(70px,10vw,120px)]">
      <Container>
        <FaqList faqs={FAQ_ITEMS} />
      </Container>
    </section>
  );
}