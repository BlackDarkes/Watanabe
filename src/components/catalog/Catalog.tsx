import { getProducts } from "@/server-actions/index";
import { Container } from "@/shared/ui";
import { CatalogListWrapper } from "./ui/CatalogListWrapper";

export const Catalog = async () => {
  const { products } = await getProducts(8);

  return (
    <section id="catalog" className="mb-">
      <Container className="flex flex-col items-center gap-y-6.25">
        <h2 className="text-center text-[clamp(24px,4vw,36px)] font-bold">Каталог товаров</h2>

        <CatalogListWrapper products={products} />
      </Container>
    </section>
  );
};
