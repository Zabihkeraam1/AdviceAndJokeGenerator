import { create } from "zustand";
interface dataStore {
  data: string;
  setData: (data: string) => void;
}

export const useDataStore = create<dataStore>((set) => ({
  data: "Just impossible is impossible?",
  setData: (data: string) => {
    set({ data: data });
  },
}));
