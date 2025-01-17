import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useThemeStore = create<
  ThemeProviderState,
  [['zustand/persist', ThemeProviderState]]
>(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme: Theme) => set({ theme }),
    }),
    {
      name: 'vite-ui-theme',
    }
  )
);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    setTheme(storedTheme);
  }, [defaultTheme, setTheme, storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return <>{children}</>;
}

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore();
  return { theme, setTheme };
};
