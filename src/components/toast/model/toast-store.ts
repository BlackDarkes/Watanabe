import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IToastStore {
  message: string;
  isOpen: boolean;
  isError: boolean;
  onOpen: (message: string, isError?: boolean) => void;
  onClose: () => void;
}

export const useToastStore = create<IToastStore>()(
  devtools((set) => ({
    message: "",
    isOpen: false,
    isError: false,
    onOpen: (message, isError = false) => {
      set({ message, isOpen: true, isError });
    },
    onClose: () => set({ isOpen: false }),
  })),
);
