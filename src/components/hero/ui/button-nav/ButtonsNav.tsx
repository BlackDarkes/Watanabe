import { MoveLeft, MoveRight } from "lucide-react";
import { ButtonNav } from "./ButtonNav";

export const ButtonsNav = () => {
  return (
    <div className="flex gap-x-[clamp(40px,4vw,50px)] max-lg:hidden">
      <ButtonNav icon={MoveLeft} />
      <ButtonNav icon={MoveRight} />
    </div>
  );
}