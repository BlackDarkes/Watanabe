"use client"

import { type INavItem } from "@/constants/index";
import { NavBarElement } from "./NavBarElement";

interface INavBarProps {
  elements: INavItem[];
  handleClose: () => void;
}
  
export const NavBar = ({ elements, handleClose }: INavBarProps) => {
  return (
    <ul className="flex gap-x-[clamp(25px,4vw,35px)] max-lg:hidden">
      { elements.map((elem) => (
        <NavBarElement key={elem.id} element={elem} handleClose={handleClose} />
      )) }
    </ul>
  );
}