import { IClothesSizeItems } from "@/constants/constructor-items";

interface ISettingsSizeItemProps {
  itemSize: IClothesSizeItems;
  size: string | null;
  setSize: (size: string) => void;
}

export const SettingsSizeItem = ({
  itemSize,
  size,
  setSize,
}: ISettingsSizeItemProps) => {
  const isActive = itemSize.name === size;

  return (
    <label className="cursor-pointer" onClick={() => setSize(itemSize.name)}>
      <div
        className={`p-[2px_24px] border text-[--navbar-color] text-[12px] font-medium transition duration-400 hover:opacity-80`}
        style={{
          backgroundColor: isActive ? "var(--accent-color)" : "var(--card-bg)",
          borderColor: isActive ? "var(--accent-color)" : "var(--border-constructor)",
        }}
      >
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
