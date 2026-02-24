"use client";

import { useModelFormStore } from "./model/model-form-store";
import { FieldCloceButton } from "./ui/FieldCloceButton";
import { Form } from "./ui/Form";

export const ModelForm = () => {
  const { isOpen, handleOpen } = useModelFormStore();

  return (
    <section
      onClick={handleOpen}
      className={`
        fixed top-0 left-0 inset-0 flex items-center justify-center z-600 bg-(--model-form-bg-opacity) opacity-0 select-none text-(--secondary-bg) transition duration-400 cursor-pointer
        ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-[clamp(24px,4vw,32px)_clamp(100px,40vw,160px)] w-[min(100%,920px)] bg-(--second-color) rounded-xl shadow-(--block-shadow) cursor-default"
      >
        <h2 className="text-center text-[clamp(24px,4vw,32px)] font-bold">
          Заказать
        </h2>

        <Form />

        <FieldCloceButton isOpen={isOpen} handleOpen={handleOpen} />
      </div>
    </section>
  );
};
