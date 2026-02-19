import { IFaqItems } from "@/constants/faq-items";

interface IFaqListItemProps {
  faq: IFaqItems;
}

export const FaqListItem = ({ faq }: IFaqListItemProps) => {
  return (
    <li>
      <details>
        <summary
          className={`
            py-6.25 px-1.25 w-full border text-center font-semibold text-[clamp(16px,4vw,24px)] text-(--navbar-color) cursor-pointer 
            ${faq.id === 1 ? "rounded-tl-xl rounded-tr-xl" : ""}
            ${faq.id === 5 ? "rounded-bl-xl rounded-br-xl" : ""}
          `}
        >
          {faq.title}
        </summary>
        <p className="my-6.25 text-[clamp(14px,4vw,20px)] font-medium text-(--third-color)">{faq.message}</p>
      </details>
    </li>
  );
};
