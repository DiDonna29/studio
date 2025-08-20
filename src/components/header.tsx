"use client";

import { useContext } from 'react';
import { AppContext } from '@/contexts/app-context';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Languages } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme, language, toggleLanguage } = useContext(AppContext);

  return (
    <header className="absolute top-4 right-4 flex items-center gap-2 z-50">
      <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
        <Languages className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
    </header>
  );
}
