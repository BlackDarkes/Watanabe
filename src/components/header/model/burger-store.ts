import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IBurgerStore {
  isOpenBurger: boolean;
  handleOpen: () => void;
}

export const useBurgerStore = create<IBurgerStore>()(
  devtools(
    (set) => ({
      isOpenBurger: false,

      handleOpen: () => set((state) => ({ isOpenBurger: !state.isOpenBurger })),
    }),
    { name: "BurgerStore" },
  ),
);
