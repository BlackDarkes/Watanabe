import { IFaqItems } from "@/constants/faq-items";
import { FaqListItem } from "./FaqListItem";
import { memo } from "react";

interface IFaqListProps {
  faqs: IFaqItems[];
}

export const FaqList = memo(({ faqs }: IFaqListProps) => {
  return (
    <ul className="w-full">
      {faqs.map((faq) => (
        <FaqListItem key={faq.id} faq={faq} />
      ))}
    </ul>
  );
});

FaqList.displayName = "FaqList";
