import { create } from "zustand";

export type TreatScene = "midnight" | "paper";

type TreatSiteStore = {
  activeFeature: string;
  scene: TreatScene;
  setActiveFeature: (feature: string) => void;
  setScene: (scene: TreatScene) => void;
};

export const useTreatSiteStore = create<TreatSiteStore>((set) => ({
  activeFeature: "calling",
  scene: "midnight",
  setActiveFeature: (activeFeature) => set({ activeFeature }),
  setScene: (scene) => set({ scene }),
}));
