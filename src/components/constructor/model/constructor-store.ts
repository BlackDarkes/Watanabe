import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IConstructorStore {
  type: string | null;
  color: string | null;
  size: string | null;
  file: File | null;
  price: number | null;

  setType: (type: string) => void;
  setColor: (color: string) => void;
  setSize: (size: string) => void;
  setFile: (file: File | null) => void;
  setPrice: (price: number) => void;

  reset: () => void;
}

export const useConstructorStore = create<IConstructorStore>()(
  devtools(
    (set) => ({
      type: null,
      color: null,
      size: null,
      file: null,
      price: null,

      setType: (type: string) => set({ type }),
      setColor: (color: string) => set({ color }),
      setSize: (size: string) => set({ size }),
      setFile: (file: File | null) => set({ file }),
      setPrice: (price: number) => set({ price }),

      reset: () => set({ type: null, color: null, size: null, file: null }),
    }),
    { name: "constructor-store" }
  )
);