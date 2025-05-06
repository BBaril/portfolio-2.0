'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm font-semibold px-4 py-1 rounded-lg bg-bbTealDark dark:bg-bbTealDark/70 text-bbOffBlack dark:text-bbOffBlack hover:bg-bbTealDark dark:hover:bg-bbPop/70 transition-opacity bg-opacity-20 duration-200 shadow"
    >
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
