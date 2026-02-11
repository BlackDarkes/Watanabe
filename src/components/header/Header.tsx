import { Container, Logo } from "@/shared/ui";
import { NavBar } from "./ui/NavBar";
import { NAV_ITEMS } from "@/constants/navigation-items";

export const Header = () => {
  return (
    <header className="bg-(--secondary-bg) py-7.5">
      <Container className="flex justify-between items-center">
        <Logo />

        <NavBar elements={NAV_ITEMS} />
      </Container>
    </header>
  );
}