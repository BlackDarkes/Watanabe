"use client"

import { CloseButton } from "@/shared/ui";
import { useToastStore } from "./model/toast-store";
import { useEffect } from "react";

export const Toast = () => {
  const { isOpen, isError, message, onClose } = useToastStore();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 7000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!message) return null;

  return (
    <article
      className={`
        fixed bottom-10 right-10 w-[min(calc(100%-40px),360px)] py-4 px-6 
        bg-(--card-bg) rounded-xl shadow-(--block-shadow) 
        transition-all duration-400 ease-in-out z-500
        /* Если закрыто — выносим за экран вправо */
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-[110%] opacity-0"}
        ${isError ? "border-l-4 border-red-500" : ""}
      `}
    >
      <div className="relative">
        <p className="text-[clamp(16px,4vw,18px)] font-medium text-(--third-color) pr-6">
          {message}
        </p>
        <div className="absolute -top-1 -right-2">
          <CloseButton onClose={onClose} />
        </div>
      </div>
    </article>
  );
};
