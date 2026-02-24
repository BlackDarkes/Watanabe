"use client"

import { MoveLeft, MoveRight } from "lucide-react";
import { ButtonNav } from "./ButtonNav";
import { useHeroStore } from "../../model/hero-store";

export const ButtonsNav = () => {
  const { scrollPreview, scrollNext } = useHeroStore();

  return (
    <div className="flex gap-x-[clamp(40px,4vw,50px)] max-lg:hidden">
      <ButtonNav onClick={scrollPreview} icon={MoveLeft} />
      <ButtonNav onClick={scrollNext} icon={MoveRight} />
    </div>
  );
}