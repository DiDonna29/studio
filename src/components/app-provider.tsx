"use client";

import type { FC, ReactNode } from 'react';
import { AppContext, defaultState } from '@/contexts/app-context';
import { useReducer, useEffect } from 'react';

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'TOGGLE_LANGUAGE':
      return { ...state, language: state.language === 'es' ? 'en' : 'es' };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme');
      const storedLang = localStorage.getItem('language');
      if (storedTheme) {
        dispatch({ type: 'SET_THEME', payload: storedTheme });
      }
      if (storedLang) {
        dispatch({ type: 'SET_LANGUAGE', payload: storedLang });
      } else {
        // Set default language if none is stored
        dispatch({ type: 'SET_LANGUAGE', payload: 'es' });
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(state.theme);
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);
  
  useEffect(() => {
    localStorage.setItem('language', state.language);
  }, [state.language]);

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  const toggleLanguage = () => dispatch({ type: 'TOGGLE_LANGUAGE' });

  return (
    <AppContext.Provider value={{ ...state, toggleTheme, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
