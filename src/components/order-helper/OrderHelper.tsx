import { Container } from "@/shared/ui";
import { OrderHelperList } from "./ui/OrderHelperList";
import { ORDER_HELPER_ITEMS } from "@/constants/order-helper-items";

export const OrderHelper = () => {
  return (
    <section id="order-helper" className="scroll-mt-[30vh]">
      <Container className="flex flex-col gap-y-6.25 mb-[clamp(70px,10vw,120px)]">
        <h2 className="text-center text-[clamp(24px,4vw,36px)] font-bold">Как оформить заказ?</h2>

        <OrderHelperList helpers={ORDER_HELPER_ITEMS} />
      </Container>
    </section>
  );
}