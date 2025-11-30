import { create } from "zustand";

interface PreferencesState {
  darkMode: boolean;
  showEmail: boolean;
  layout: "grid" | "list";
  toggleDarkMode: () => void;
  toggleEmail: () => void;
  setLayout: (layout: "grid" | "list") => void;
}

export const usePreferences = create<PreferencesState>((set) => ({
  darkMode: false,
  showEmail: true,
  layout: "grid",
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleEmail: () => set((state) => ({ showEmail: !state.showEmail })),
  setLayout: (layout) => set({ layout }),
}));
