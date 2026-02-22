"use client";

import { Container } from "@/shared/ui";
import { Canvas } from "./ui/canvas/Canvas";
import { Settings } from "./ui/settings/Settings";
import {
  CLOTHES_COLOR_ITEMS,
  CLOTHES_ITEM_SIZE_ITEMS,
  CLOTHES_SIZE_ITEMS,
  CLOTHES_TYPE_ITEMS,
} from "@/constants/constructor-items";

export const Constructor = () => {
  return (
    <section className="py-[clamp(45px,10vw,75px)_clamp(90px,10vw,150px)]">
      <Container className="flex flex-col gap-y-[clamp(30px,4vw,55px)]">
        <h2 className="font-bold text-[clamp(28px,4vw,32px)]">
          Конструктор создания мерча
        </h2>

        <div className="flex gap-x-[clamp(40px,4vw,60px)] max-lg:flex-col-reverse max-lg:items-center">
          <Canvas handleSelect={() => {}} />
          <Settings
            settingTypes={CLOTHES_TYPE_ITEMS}
            settingColors={CLOTHES_COLOR_ITEMS}
            settingSizes={CLOTHES_SIZE_ITEMS}
            settingItemSizes={CLOTHES_ITEM_SIZE_ITEMS}
          />
        </div>
      </Container>
    </section>
  );
};
