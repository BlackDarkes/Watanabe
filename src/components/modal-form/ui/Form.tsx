"use client"

import { Field } from "./Field";

interface IFormProps {
  name: string | null;
  price: number | null;
}
  
export const Form = ({ name, price }: IFormProps) => {
  return (
    <div>
      <div>
        <Field
          handleValue={() => {}}
          id="email"
          label="Почта"
          name="email"
          type="email"
          value=""
        />
        <Field
          handleValue={() => {}}
          id="address"
          label="Адрес"
          name="address"
          type="text"
          value=""
        />
        <Field
          handleValue={() => {}}
          id="fio"
          label="ФИО"
          name="fio"
          type="text"
          value=""
        />
      </div>

      <div className="flex justify-between items-center gap-[clamp(15px,4vw,40px)] text-[clamp(16px,4vw,24px)] py-[10px_clamp(47px,10px,92px)] max-sm:flex-col">
        <p className="text-[clamp(16px,4vw,18px)]">Цена товара: <span className="font-bold">{price}₽</span></p>

        <p className="font-bold max-sm:text-[20px]">{name}</p>
      </div>

      <button type="button" className="py-2.5 w-full bg-(--accent-color) text-(--second-color) uppercase font-bold rounded-xl cursor-pointer transition duration-400 hover:bg-(--third-color)">Заказать</button>
    </div>
  );
};
