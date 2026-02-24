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
        fixed top-0 left-0 inset-0 flex items-center justify-center bg-(--model-form-bg-opacity) text-(--secondary-bg) transition-all duration-400 ease-in-out cursor-pointer z-600
        ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-[clamp(24px,4vw,32px)_clamp(20px,10vw,160px)] mx-3.75 w-[min(100%,920px)] bg-(--second-color) rounded-xl shadow-(--block-shadow) cursor-default"
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
