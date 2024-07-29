"use client";

import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
