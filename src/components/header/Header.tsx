"use client";

import { Container, Logo } from "@/shared/ui";
import { NavBar } from "./ui/nav-bar/NavBar";
import { NAV_ITEMS } from "@/constants/navigation-items";
import { useBurgerStore } from "./model/burger-store";
import { Burger } from "./ui/burger/Burger";

export const Header = () => {
  const { handleOpen, isOpenBurger } = useBurgerStore();

  return (
    <header className="fixed top-0 left-0 w-full bg-(--secondary-bg) py-7.5">
      <Container className="flex justify-between items-center">
        <Logo />

        <NavBar elements={NAV_ITEMS} />

        <Burger handleOpen={handleOpen} isOpen={isOpenBurger} />
      </Container>
    </header>
  );
};
