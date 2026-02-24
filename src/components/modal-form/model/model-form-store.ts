import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IModelFormStore {
  isOpen: boolean;
  handleOpen: () => void;
}

export const useModelFormStore = create<IModelFormStore>()(
  devtools((set) => ({
    isOpen: false,

    handleOpen: () => {
      set((state) => ({ isOpen: !state.isOpen }));
      document.body.classList.toggle("overflow-hidden");
    }
  })),
);
