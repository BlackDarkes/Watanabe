"use client";

import { INavItem } from "@/constants/navigation-items";
import { NavBarElement } from "../nav-bar/NavBarElement";

interface IBurgerMenuProps {
  elements: INavItem[];
  isOpen: boolean;
  handleOpen: () => void;
}

export const BurgerMenu = ({
  elements,
  isOpen,
  handleOpen,
}: IBurgerMenuProps) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-full bg-(--secondary-bg-opacity) text-(--second-color) transition duration-600 opacity-0 \r\n
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full"}
      `}
      onClick={handleOpen}
    >
      <ul
        className={`
           flex flex-col gap-y-5 p-7.5 ml-auto bg-(--secondary-bg) w-[min(100%,400px)] h-full text-[clamp(18px,4vw,24px)] rounded-bl-3 \r\n
        `}
        onClick={(event) => event.stopPropagation()}
      >
        {elements.map((elem) => (
          <NavBarElement key={elem.id} element={elem} />
        ))}
      </ul>
    </div>
  );
};
