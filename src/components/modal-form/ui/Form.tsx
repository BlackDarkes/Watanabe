"use client"

import { ChangeEvent, useState } from "react";
import { Field } from "./Field";

interface IFormProps {
  name: string | null;
  price: number | null;
}
  
export const Form = ({ name, price }: IFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [fio, setFio] = useState<string>("");
  const [error, setError] = useState<{ type: string, message: string }>({ type: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError({ type: "email", message: "Некорректный адрес электронной почты" })
      return;
    }

    if (!address.length) {
      setError({ type: "address", message: "Поле 'Адрес доставки' не должно быть пустым" });
      return;
    }

    if (!/^([А-ЯЁ][а-яё]+[\s]){2}[А-ЯЁ][а-яё]+$/.test(fio)) {
      setError({ type: "fio", message: "Поле 'ФИО (Иванов Иван Иванович)' должно содержать только кириллицу и пробелы" });
      return;
    }

    setError({ type: "", message: "" });
    setLoading(true);

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, address, fio, price, name }),
      })

      if (!response.ok) {
        alert("Ошибка при оформлении заказа.");
      }

      alert("Заказ успешно оформлен! Проверьте почту.");
      setEmail("");
      setAddress("");
      setFio("");
    } catch(error) {
      console.error(error);
      alert("Ошибка соединения с сервером.");
    } finally {
      setLoading(false);
    }

    console.log(email, address, fio);
  };

  return (
    <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => handleSubmit(e)}>
      <div>
        <Field
          handleValue={(e) => setEmail(e.target.value)}
          id="email"
          label="Почта"
          name="email"
          type="email"
          value={email}
          isFocus={error.type === "email"}
          style={ error.type === "email" ? "border-[red]" : "" }
        />

        {error.type === "email" && <p className="mt-2 text-[red]">{error.message}</p>}

        <Field
          handleValue={(e) => setAddress(e.target.value)}
          id="address"
          label="Адрес"
          name="address"
          type="text"
          value={address}
          isFocus={error.type === "address"}
          style={ error.type === "address" ? "border-[red]" : "" }
        />

        {error.type === "address" && <p className="mt-2 text-[red]">{error.message}</p>}

        <Field
          handleValue={(e) => setFio(e.target.value)}
          id="fio"
          label="ФИО"
          name="fio"
          type="text"
          value={fio}
          isFocus={error.type === "fio"}
          style={ error.type === "fio" ? "border-[red]" : "" }
        />

        {error.type === "fio" && <p className="mt-2 text-[red]">{error.message}</p>}
      </div>

      <div className="flex justify-between items-center gap-[clamp(15px,4vw,40px)] text-[clamp(16px,4vw,24px)] py-[10px_clamp(47px,10px,92px)] max-sm:flex-col">
        <p className="text-[clamp(16px,4vw,18px)]">Цена товара: <span className="font-bold">{price}₽</span></p>

        <p className="font-bold max-sm:text-[20px]">{name}</p>
      </div>

      <button type="submit" className="py-2.5 w-full bg-(--accent-color) text-(--second-color) uppercase font-bold rounded-xl cursor-pointer transition duration-400 hover:bg-(--third-color)">Заказать</button>
    </form>
  );
};
