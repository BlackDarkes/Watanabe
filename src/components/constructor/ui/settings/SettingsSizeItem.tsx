import { IClothesSizeItems } from "@/constants/constructor-items";

interface ISettingsSizeItemProps {
  itemSize: IClothesSizeItems;
}

export const SettingsSizeItem = ({ itemSize }: ISettingsSizeItemProps) => {
  return (
    <label className="cursor-pointer">
      <div className="p-[2px_24px] border border-[--navbar-color] text-[--navbar-color] text-[12px] font-medium">
        {itemSize.size}
      </div>
      <input
        type="radio"
        name="size"
        id={itemSize.id.toString()}
        className="hidden"
      />
    </label>
  );
};
