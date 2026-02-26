"use client";

import { type INavItem } from "@/constants/index";
import { NavBarElement } from "./NavBarElement";
import { memo } from "react";

interface INavBarProps {
  elements: INavItem[];
}

export const NavBar = memo(({ elements }: INavBarProps) => {
  return (
    <ul className="flex gap-x-[clamp(25px,4vw,35px)] max-lg:hidden">
      {elements.map((elem) => (
        <NavBarElement key={elem.id} element={elem} />
      ))}
    </ul>
  );
});

NavBar.displayName = "NavBar";