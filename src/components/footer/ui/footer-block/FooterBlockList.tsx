import { IFooterItem } from "@/constants/footer-items";
import { FooterBlockListItem } from "./FooterBlockListItem";

interface IFooterBlockListProps {
  items: IFooterItem[];
}
  
export const FooterBlockList = ({ items }: IFooterBlockListProps) => {
  return (
    <ul className="flex flex-col mt-[clamp(10px,4vw,20px)] gap-y-2.5 ">
      { items.map((item) => (
        <FooterBlockListItem key={item.id} item={item} />
      )) }
    </ul>
  );
}