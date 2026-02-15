import { Container } from "@/shared/ui";

export const WhyUs = () => {
  return (
    <section id="why-us">
      <Container className="flex justify-center items-center py-[clamp(70px,10vw,120px)]">
        <p className="w-[min(100%,1024px)] text-center text-[clamp(18px,4vw,32px)] text-(--navbar-color) leading-[clamp(24px,4vw,40px)]">Мы здесь, чтобы материализовать твои эмоции от тайтлов. Собираем только тот мерч, который купили бы сами: от редких комплиток до уютного шмота. Ничего лишнего — только то, что делает тебя счастливее.</p>
      </Container>
    </section>
  );
}