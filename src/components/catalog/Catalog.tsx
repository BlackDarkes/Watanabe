import { getProducts } from "@/server-actions/index";
import { Container } from "@/shared/ui";
import { CatalogListWrapper } from "./ui/CatalogListWrapper";

export const Catalog = async () => {
  const products = await getProducts(8);

  return (
    <section id="catalog">
      <Container>
        <h2>Каталог товаров</h2>

        <CatalogListWrapper products={products} />

        
      </Container>
    </section>
  );
};
