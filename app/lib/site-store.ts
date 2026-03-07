import { create } from 'zustand';

interface TreatSiteState {
  scene: 'paper' | 'midnight';
  activeFeature: string;
  setScene: (scene: 'paper' | 'midnight') => void;
  setActiveFeature: (id: string) => void;
}

export const useTreatSiteStore = create<TreatSiteState>((set) => ({
  scene: 'paper',
  activeFeature: 'calling',
  setScene: (scene) => set({ scene }),
  setActiveFeature: (id) => set({ activeFeature: id }),
}));