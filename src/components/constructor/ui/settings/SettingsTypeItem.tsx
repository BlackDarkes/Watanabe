import { IClothesTypeItems } from "@/constants/constructor-items";
import Image from "next/image";

interface ISettingsTypeItemProps {
  itemType: IClothesTypeItems;
}
  
export const SettingsTypeItem = ({ itemType }: ISettingsTypeItemProps) => {
  return (
    <label className={`w-10 h-10 cursor-pointer`}>
      { itemType.isLucide && itemType.icon ? <itemType.icon size={40} /> : itemType.img && <Image src={itemType.img} alt={itemType.name} width={40} height={40} /> }
      <input type="radio" name="type" id={itemType.id.toString()} className="hidden" />
    </label>
  );
}