import { getProducts } from "@/server-actions/index";
import { Container } from "@/shared/ui";
import { HeroList } from "./ui/HeroList";
import { ButtonsNav } from "./ui/button-nav/ButtonsNav";

export const Hero = async () => {
  const { products } = await getProducts(15);

  return (
    <section className="mt-[clamp(35px,15vw,55px)]">
      <Container className="flex flex-col items-center gap-y-[clamp(40px,4vw,50px)]">
        <HeroList products={products} />

        <ButtonsNav />
      </Container>
    </section>
  );
}