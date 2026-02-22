import {
  IClothesColorItems,
  IClothesSizeItems,
  IClothesTypeItems,
} from "@/constants/constructor-items";
import { SettingsTypeItem } from "./SettingsTypeItem";
import { SettingsColorItem } from "./SettingsColorItem";
import { SettingsSizeItem } from "./SettingsSizeItem";
import { SettingFile } from "./SettingFile";
import { useState } from "react";

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
  settingItemSizes
}: ISettingsProps) => {
  const [type, setType] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const sizes = type === "Значки" || type === "Наклейки" ? settingItemSizes : settingSizes;

  const handleSelect = (type: string) => {
    setType(type);
  };

  const handleSelectColor = (color: string) => {
    setColor(color);
  };

  const handleSelectSize = (size: string) => {
    setSize(size);
  };

  const handleSelectFile = (file: File) => {
    setFile(file);
  };

  return (
    <div className="flex flex-col gap-y-[clamp(20px,4vw,30px)] p-5 w-[min(100%,480px)] bg-(--card-bg) rounded-xl shadow-(--block-shadow)">
      <h3 className="font-bold text-[clamp(28px,4vw,32px)]">Настройки</h3>

      <div>
        <h4 className="mb-3.75 text-[clamp(18px,4vw,24px)] font-medium">Тип</h4>

        <div className="flex gap-x-3">
          {settingTypes.map((itemType) => (
            <SettingsTypeItem
              key={itemType.id}
              itemType={itemType}
              type={type}
              setType={handleSelect}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3.75 text-[clamp(18px,4vw,24px)] font-medium">
          Цвет
        </h4>

        <div className="flex gap-x-2.5">
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
            <SettingsSizeItem key={itemSize.id} itemSize={itemSize} size={size} setSize={handleSelectSize} />
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
        className="w-full py-[clamp(6px,4vw,10px)] bg-(--accent-color) text-[--second-color] uppercase font-bold rounded-xl cursor-pointer transition duration-400 hover:bg-(--third-color)"
      >
        Купить
      </button>
    </div>
  );
};
