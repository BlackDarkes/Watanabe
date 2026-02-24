import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IHeroStore {
  scrollElement: HTMLUListElement | null;
  setScrollElement: (scrollElement: HTMLUListElement | null) => void;
  scrollPreview: () => void;
  scrollNext: () => void;
}

export const useHeroStore = create<IHeroStore>()(
  devtools(
    (set, get) => ({
      scrollElement: null,

      setScrollElement: (el) => set({ scrollElement: el }),

      scrollPreview: () => {
        const el = get().scrollElement;

        if (el) {
          const firstChild = el.firstElementChild as HTMLLIElement | null;

          if (firstChild) {
            el.scrollBy({
              left: -firstChild.clientWidth,
              behavior: "smooth",
            });
          }
        }
      },

      scrollNext: () => {
        const el = get().scrollElement;

        if (el) {
          const firstChild = el.firstElementChild as HTMLLIElement | null;

          if (firstChild) {
            el.scrollBy({
              left: firstChild.clientWidth,
              behavior: "smooth",
            });
          }
        }
      },
    }),
    { name: "hero-store" },
  ),
);
