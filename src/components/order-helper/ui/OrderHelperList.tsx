import { IOrderHelperItems } from "@/constants/order-helper-items";
import { OrderHelperListItem } from "./OrderHelperListItem";
import { memo } from "react";

interface IOrderHelperListProps {
  helpers: IOrderHelperItems[];
}

export const OrderHelperList = memo(({ helpers }: IOrderHelperListProps) => {
  return (
    <ul className="flex flex-col gap-y-2.5 mx-auto w-[min(100%,1024px)]">
      {helpers.map((help) => (
        <OrderHelperListItem key={help.id} help={help} />
      ))}
    </ul>
  );
});

OrderHelperList.displayName = "OrderHelperList";
