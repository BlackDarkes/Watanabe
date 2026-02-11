import { type INavItem } from "@/constants/index";
import Link from "next/link";

interface INavBarElementProps {
  element: INavItem;
}

export const NavBarElement = ({ element }: INavBarElementProps) => {
  return (
    <li className="
      relative 
      text-(--navbar-color) transition duration-400 
      hover:text-(--second-color) 
      before:content-[''] before:absolute before:w-full before:h-px before:-bottom-0.5 before:left-0 before:bg-(--second-color) before:scale-x-0 before:origin-left before:transition before:duration-400
      hover:before:origin-left hover:before:scale-x-100
      max-lg:hidden
    ">
      <Link href={`${element.link ? element.link : element.href}`}>
        {element.name}
      </Link>
    </li>
  );
};
