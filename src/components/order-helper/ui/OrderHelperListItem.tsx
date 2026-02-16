import { IOrderHelperItems } from "@/constants/order-helper-items";

interface IOrderHelperListItemProps {
  help: IOrderHelperItems;
}
  
export const OrderHelperListItem = ({ help }: IOrderHelperListItemProps) => {
  return (
    <li className="font-medium text-[clamp(16px,4vw,24px)] text-(--navbar-color) mx-5">
      <span>{help.id}. </span>{help.name}
    </li>
  );
}