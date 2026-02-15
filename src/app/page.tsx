import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
      </main>
    </>
  );
}
