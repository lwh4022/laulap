import { create } from "zustand";

type State = {
  language: "en" | "kr";
};

type Action = {
  changeLanguage: () => void;
};

export const useZustandStore = create<State & Action>((set) => ({
  language: "en",
  changeLanguage: () =>
    set((state) => ({ language: state.language === "en" ? "kr" : "en" })),
}));
