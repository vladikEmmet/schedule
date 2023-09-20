import { create } from "zustand";

export const useInput = create((set) => ({
  cabinet: "",
  setCabinet: (value) => set((state) => ({ cabinet: value })),
}));

export const useSchedule = create((set) => ({
  activeDay: null,
  open: (day) =>
    set(() => {
      return { activeDay: day };
    }),
  close: () => set(() => ({ activeDay: null })),
}));
