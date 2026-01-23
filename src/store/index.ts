// src/store/index.ts
import { create } from "zustand";
//import { persist } from "zustand/middleware";

// Mobile Menu Store
interface MobileMenuState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

// Contact Form Store
interface ContactFormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  setStatus: (status: "idle" | "loading" | "success" | "error") => void;
  setMessage: (message: string) => void;
  reset: () => void;
}

export const useContactFormStore = create<ContactFormState>((set) => ({
  status: "idle",
  message: "",
  setStatus: (status) => set({ status }),
  setMessage: (message) => set({ message }),
  reset: () => set({ status: "idle", message: "" }),
}));

// UI Store for global UI state
interface UIState {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
  showBackToTop: boolean;
  setShowBackToTop: (show: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled) => set({ isScrolled }),
  showBackToTop: false,
  setShowBackToTop: (show) => set({ showBackToTop: show }),
}));

// Newsletter Store
interface NewsletterState {
  email: string;
  status: "idle" | "loading" | "success" | "error";
  setEmail: (email: string) => void;
  setStatus: (status: "idle" | "loading" | "success" | "error") => void;
  reset: () => void;
}

export const useNewsletterStore = create<NewsletterState>((set) => ({
  email: "",
  status: "idle",
  setEmail: (email) => set({ email }),
  setStatus: (status) => set({ status }),
  reset: () => set({ email: "", status: "idle" }),
}));
