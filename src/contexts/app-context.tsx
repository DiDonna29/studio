"use client";

import { createContext } from 'react';

type AppContextType = {
  theme: 'light' | 'dark';
  language: 'en' | 'es';
  toggleTheme: () => void;
  toggleLanguage: () => void;
};

export const defaultState: AppContextType = {
  theme: 'light',
  language: 'es',
  toggleTheme: () => {},
  toggleLanguage: () => {},
};

export const AppContext = createContext<AppContextType>(defaultState);
