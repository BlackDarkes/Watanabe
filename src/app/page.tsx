import { Catalog } from "@/components/catalog/Catalog";
import { Comments } from "@/components/comments";
import { Faq } from "@/components/faq/Faq";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { OrderHelper } from "@/components/order-helper/OrderHelper";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Comments />
        <OrderHelper />
        <Catalog />
        <Faq />
      </main>
    </>
  );
}
