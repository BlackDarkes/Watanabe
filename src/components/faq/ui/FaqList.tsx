import { IFaqItems } from "@/constants/faq-items";
import { FaqListItem } from "./FaqListItem";

interface IFaqListProps {
  faqs: IFaqItems[];
}
  
export const FaqList = ({ faqs }: IFaqListProps) => {
  return (
    <ul className="w-full">
      { faqs.map((faq) => (
        <FaqListItem key={faq.id} faq={faq} />
      )) }
    </ul>
  );
}