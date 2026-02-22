import { IClothesColorItems } from "@/constants/constructor-items";

interface ISettingsColorItemProps {
  itemColor: IClothesColorItems;
}

export const SettingsColorItem = ({ itemColor }: ISettingsColorItemProps) => {
  return (
    <label>
      <div
        className={`w-10 h-10  rounded-[50%] border border-(--border-constructor) cursor-pointer`}
        style={{ backgroundColor: itemColor.color }}
      />
      <input
        type="radio"
        name="color"
        id={itemColor.id.toString()}
        className={`hidden`}
      />
    </label>
  );
};
