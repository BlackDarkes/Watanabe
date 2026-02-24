import {
  IClothesColorItems,
  IClothesSizeItems,
  IClothesTypeItems,
} from "@/constants/constructor-items";
import { SettingsTypeItem } from "./SettingsTypeItem";
import { SettingsColorItem } from "./SettingsColorItem";
import { SettingsSizeItem } from "./SettingsSizeItem";
import { SettingFile } from "./SettingFile";
import { useConstructorStore } from "../../model/constructor-store";
import { useModelFormStore } from "@/components/modal-form";

interface ISettingsProps {
  settingTypes: IClothesTypeItems[];
  settingColors: IClothesColorItems[];
  settingSizes: IClothesSizeItems[];
  settingItemSizes: IClothesSizeItems[];
}

export const Settings = ({
  settingTypes,
  settingColors,
  settingSizes,
  settingItemSizes,
}: ISettingsProps) => {
  const {
    type,
    color,
    size,
    file,
    price,
    setType,
    setColor,
    setSize,
    setFile,
    setPrice,
    reset,
  } = useConstructorStore();
  const { handleOpen } = useModelFormStore();
  const isDisabled = !type || !color || !size;

  const sizes =
    type === "Значки" || type === "Наклейки" ? settingItemSizes : settingSizes;

  const handleSelect = (type: string) => {
    setType(type);
  };

  const handleSelectColor = (color: string) => {
    setColor(color);
  };

  const handleSelectSize = (size: string) => {
    setSize(size);
  };

  const handleSelectFile = (file: File | null) => {
    setFile(file);
  };

  return (
    <div className="flex flex-col gap-y-[clamp(40px,4vw,50px)] p-5 w-[min(100%,480px)] bg-(--card-bg) rounded-xl shadow-(--block-shadow)">
      <h3 className="font-bold text-[clamp(28px,4vw,32px)]">Настройки</h3>

      <div>
        <h4 className="mb-3.75 text-[clamp(18px,4vw,24px)] font-medium">Тип</h4>

        <div className="flex gap-x-3">
          {settingTypes.map((itemType) => (
            <SettingsTypeItem
              key={itemType.id}
              itemType={itemType}
              type={type}
              setPrice={setPrice}
              setType={handleSelect}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3.75 text-[clamp(18px,4vw,24px)] font-medium">
          Цвет
        </h4>

        <div className="flex flex-wrap gap-2.5">
          {settingColors.map((itemColor) => (
            <SettingsColorItem
              key={itemColor.id}
              itemColor={itemColor}
              color={color}
              setColor={handleSelectColor}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3.75 text-[clamp(18px,4vw,24px)] font-medium">
          Размер
        </h4>

        <div className="flex flex-wrap gap-2.5">
          {sizes.map((itemSize) => (
            <SettingsSizeItem
              key={itemSize.id}
              itemSize={itemSize}
              size={size}
              setSize={handleSelectSize}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="mb-3.75 text-[clamp(18px,4vw,24px)] font-medium">
          Выбрать файл
        </h4>

        <SettingFile file={file} setFile={handleSelectFile} />
      </div>

      <button
        type="button"
        onClick={reset}
        className={`
          w-fit py-[clamp(6px,4vw,10px)] text-[--second-color] uppercase font-bold cursor-pointer
          relative 
          transition duration-400 
          hover:text-(--second-color) 
          before:content-[''] before:absolute before:w-full before:h-px before:-bottom-0.5 before:left-0 before:bg-(--second-color) before:scale-x-0 before:origin-left before:transition before:duration-400 
          hover:before:origin-left hover:before:scale-x-100  
        `}
      >
        Сбросить настройки
      </button>

      <button
        type="button"
        onClick={() => handleOpen({ 
          name: type!,
          id: type === "Значки" || type === "Наклейки" ? color! : size!,
          tags: [],
          price: price!,
          img: file?.name || "",
          star: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        })}
        disabled={isDisabled}
        className={`
          w-full py-[clamp(6px,4vw,10px)] bg-(--accent-color) text-[--second-color] uppercase font-bold rounded-xl  transition duration-400 
          ${isDisabled ? "opacity-50 hover:bg-(--accent-color) cursor-not-allowed" : "hover:bg-(--third-color) cursor-pointer"}
        `}
      >
        Купить
      </button>
    </div>
  );
};
