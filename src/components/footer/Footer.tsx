import { Container } from "@/shared/ui";
import { FooterBlock } from "./ui/footer-block/FooterBlock";
import { FooterSecurity } from "./ui/footer-security/FooterSecurity";

export const Footer = () => {
  return (
    <footer className="border-t border-t-(--navbar-color) mt-[clamp(180px,10vw,260px)]">
      <Container className="flex justify-between items-start gap-x-[clamp(40px,10vw,80px)] gap-y-[clamp(20px,8vw,40px)] pt-[clamp(40px,8vw,100px)] pb-[clamp(120px,8vw,230px)] max-xl:flex-col">
        <FooterBlock />
      </Container>

      <FooterSecurity />
    </footer>
  );
}