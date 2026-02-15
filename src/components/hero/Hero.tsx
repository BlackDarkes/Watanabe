import { getProducts } from "@/server-actions/index";
import { Container } from "@/shared/ui";
import { HeroList } from "./ui/HeroList";

export const Hero = async () => {
  const products = await getProducts(15);

  return (
    <section className="mt-[clamp(35px,15vw,55px)]">
      <Container>
        <HeroList products={products} />
      </Container>
    </section>
  );
}