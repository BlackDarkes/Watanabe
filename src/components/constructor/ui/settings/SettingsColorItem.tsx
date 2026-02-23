import { IClothesColorItems } from "@/constants/constructor-items";

interface ISettingsColorItemProps {
  itemColor: IClothesColorItems;
  color: string | null;
  setColor: (color: string) => void;
}

export const SettingsColorItem = ({
  itemColor,
  color,
  setColor,
}: ISettingsColorItemProps) => {
  const isActive = itemColor.color === color;

  return (
    <label onClick={() => setColor(itemColor.color)}>
      <div
        className={`w-10 h-10 border-3 cursor-pointer duration-400 hover:opacity-70`}
        style={{
          backgroundColor: itemColor.color,
          borderRadius: isActive ? "50%" : "40%",
          borderColor: isActive ? "var(--accent-color)" : "var(--border-constructor)",
          transitionProperty: "border-radius, border-color, opacity",
        }}
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
