import { LucideIcon, Shirt, Sticker } from "lucide-react";
import ImageHoody from "@/assets/icons/constructor/hoody.png";
import ImageSticker from "@/assets/icons/constructor/stickers.png";
import { StaticImageData } from "next/image";

interface IClothesTypeItems {
  id: number;
  name: string;
  img?: StaticImageData;
  icon?: LucideIcon
  isLucide: boolean;
}

interface IClothesColorItems {
  id: number;
  name: string;
  color: string;
}

interface IClothesSizeItems {
  id: number;
  name: string;
  size: string;
}

const CLOTHES_TYPE_ITEMS: IClothesTypeItems[] = [
  { id: 1, name: "Футболки", icon: Shirt, isLucide: true },
  { id: 2, name: "Худи", img: ImageHoody, isLucide: false },
  { id: 3, name: "Значки", img: ImageSticker, isLucide: false },
  { id: 4, name: "Наклейки", icon: Sticker, isLucide: true },
];

const CLOTHES_COLOR_ITEMS: IClothesColorItems[] = [
  { id: 1, name: "Белый", color: "#ffffff" },
  { id: 2, name: "Красный", color: "#A7234D" },
  { id: 3, name: "Черный", color: "#272729" },
  { id: 4, name: "Синий", color: "#00008B" },
  { id: 5, name: "Желтый", color: "#F0D500" },
  { id: 6, name: "Телесный", color: "#E5CCAF" },
  { id: 7, name: "Зеленый", color: "#8DC584" },
];

const CLOTHES_SIZE_ITEMS: IClothesSizeItems[] = [
  { id: 1, name: "XXS", size: "XXS" },
  { id: 2, name: "XS", size: "XS" },
  { id: 3, name: "S", size: "S" },
  { id: 4, name: "M", size: "M" },
  { id: 5, name: "L", size: "L" },
  { id: 6, name: "XL", size: "XL" },
  { id: 7, name: "XXL", size: "XXL" },
];

const CLOTHES_ITEM_SIZE_ITEMS: IClothesSizeItems[] = [
  { id: 1, name: "90x90", size: "90x90" },
  { id: 2, name: "100x100", size: "100x100" },
];

export {
  type IClothesTypeItems,
  type IClothesColorItems,
  type IClothesSizeItems,
  CLOTHES_TYPE_ITEMS,
  CLOTHES_COLOR_ITEMS,
  CLOTHES_SIZE_ITEMS,
  CLOTHES_ITEM_SIZE_ITEMS,
};