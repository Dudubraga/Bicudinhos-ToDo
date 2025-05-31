import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeMode = 'light' | 'dark' | 'system';
interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: 'system',
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: 'app-theme-storage', 
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);