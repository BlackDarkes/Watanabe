import { Logo } from "@/shared/ui";
import { FooterBlockList } from "./FooterBlockList";
import { FOOTER_LEGAL_LINKS, FOOTER_LINKS, FOOTER_PAYMENT_METHODS } from "@/constants/footer-items";

export const FooterBlock = () => {
  return (
    <>
      <Logo />

      <div className="flex flex-wrap gap-x-[clamp(40px,10vw,80px)] gap-y-[clamp(20px,8vw,40px)] max-xl:justify-between max-xl:w-full">
        <FooterBlockList items={FOOTER_LINKS} />
        <FooterBlockList items={FOOTER_PAYMENT_METHODS} />
        <FooterBlockList items={FOOTER_LEGAL_LINKS} />
      </div>
    </>
  );
};
