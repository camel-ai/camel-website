// store/navStore.js
import { create } from "zustand";

interface PostState {
  viewId: number | null;
  setViewId: (viewId: number | null) => void;
}

export const useViewStore = create<PostState>((set) => ({
  viewId: null,
  setViewId: (viewId) => set({ viewId: viewId }),
}));
