"use client";

interface IBurgerButtonProps {
  handleOpen: () => void;
  isOpen: boolean;
}

export const BurgerButton = ({ handleOpen, isOpen }: IBurgerButtonProps) => {
  return (
    <button
      type="button"
      className={`
        relative 
        flex items-center justify-center w-7.5 h-6 
        before:content-[''] before:absolute before:top-0 before:w-full before:h-px before:bg-(--second-color) before:transition before:duration-400 
        after:content-[''] after:absolute after:bottom-0 after:w-full after:h-px after:bg-(--second-color) after:transition after:duration-400 
        cursor-pointer 
        ${isOpen ? "before:rotate-45 before:translate-y-2.5 after:-rotate-45 after:-translate-y-3" : ""} 
        lg:hidden 
        z-500
      `}
      onClick={handleOpen}
    >
      <span
        className={`
          w-full h-px 
          bg-(--second-color) 
          transition duration-400
          ${isOpen ? "scale-x-0" : "scale-x-100"}
        `}
      />
    </button>
  );
};
