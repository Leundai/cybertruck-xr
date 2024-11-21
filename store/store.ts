import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialColorState = {
  selected: undefined as undefined | string,
};

export const useColorStore = create(
  combine(initialColorState, (set) => ({
    setColor(name: string, value: string) {
      set({ [name]: value });
    },
    setSelected(selected: string | undefined) {
      set({ selected });
    },
  }))
);
