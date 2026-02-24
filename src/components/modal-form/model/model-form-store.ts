import { IProduct } from "@/shared/types/product.interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IModelFormStore {
  isOpen: boolean;
  name: string | null;
  price: number | null;
  handleOpen: (product: IProduct | null) => void;
}

export const useModelFormStore = create<IModelFormStore>()(
  devtools((set) => ({
    isOpen: false,
    name: null,
    price: null,

    handleOpen: (product: IProduct | null) => {
      set((state) => ({ isOpen: !state.isOpen }));
      document.body.classList.toggle("overflow-hidden");

      if (product) {
        set({ name: product.name, price: product.price });
      } else {
        set({ name: null, price: null });
      }
    }
  })),
);
