import { NAV_ITEMS } from "@/constants/navigation-items";
import { BurgerButton } from "./BurgerButton";
import { BurgerMenu } from "./BurgerMenu";
import { useWindowSize } from "@/hooks/useWindowSize";

interface IBurgerProps {
  handleOpen: () => void;
  isOpen: boolean;
}
  
export const Burger = ({ handleOpen, isOpen }: IBurgerProps) => {
  const { width } = useWindowSize();
   
  if (width >= 1024) return null;

  return (
    <>
      <BurgerButton handleOpen={handleOpen} isOpen={isOpen} />
      <BurgerMenu elements={NAV_ITEMS} isOpen={isOpen} handleOpen={handleOpen} />
    </>
  );
}