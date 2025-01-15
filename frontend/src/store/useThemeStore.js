import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "Black",
  setTheme: (theme) => {
    console.log("daisyuiworks")
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
