export type ProductTags =
  | "Футболка"
  | "Худи"
  | "Значки"
  | "Наклейки"
  | "L"
  | "XL"
  | "XXL"
  | "Моя_Геройская_Академия"
  | "Фрирен"
  | "Сатору"
  | "Гето"
  | "Эдвард_Элрик"
  | "Итадори"
  | "Сукуна"
  | "Охотники_на_зло"
  | "Ghibli"
  | "Сатору_Котжо"
  | "Звёздное_дитя"
  | "Хината_Шоё"
  | "Стикерпак"
  | "Адский_Рай"
  | "Раб_спецотряда"
  | "Тоторо"
  | "Марин_Шизуку"
  | "JUTSU_IT"
  | "size_90x90"
  | "size_100x100";

export interface IProduct {
  name: string;
  id: string;
  tags: ProductTags[];
  price: number;
  img: string;
  star: number | null;
  createdAt: Date;
  updatedAt: Date;
}
