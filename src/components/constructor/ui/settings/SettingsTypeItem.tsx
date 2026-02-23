import { IClothesTypeItems } from "@/constants/constructor-items";
import Image from "next/image";

interface ISettingsTypeItemProps {
  itemType: IClothesTypeItems;
  type: string | null;
  setType: (type: string) => void;
}

export const SettingsTypeItem = ({
  itemType,
  type,
  setType,
}: ISettingsTypeItemProps) => {
  const isActive = itemType.name === type;

  return (
    <label
      className={`p-1 border-2 rounded-lg transition duration-400 hover:opacity-70 cursor-pointer`}
      style={{ 
        backgroundColor: isActive ? "var(--accent-color)" : "var(--card-bg)",
        borderColor: isActive ? "var(--accent-color)" : "var(--border-constructor)"
      }}
      onClick={() => setType(itemType.name)}
    >
      {itemType.isLucide && itemType.icon ? (
        <itemType.icon size={40} />
      ) : (
        itemType.img && (
          <Image
            src={itemType.img}
            alt={itemType.name}
            width={40}
            height={40}
          />
        )
      )}
      <input
        type="radio"
        name="type"
        id={itemType.id.toString()}
        className="hidden"
      />
    </label>
  );
};
