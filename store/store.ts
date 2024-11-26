import { Matrix4, Vector3 } from "three";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialColorPickerState = {
  selected: undefined as undefined | string,
};

export const useColorStore = create(
  combine(initialColorPickerState, (set) => ({
    setColor(name: string, value: string) {
      set({ [name]: value });
    },
    setSelected(selected: string | undefined) {
      set({ selected });
    },
  }))
);
