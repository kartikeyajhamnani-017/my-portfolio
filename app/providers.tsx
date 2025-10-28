'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  // We use attribute="class" to add 'dark' or 'light' to the <html> tag
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}