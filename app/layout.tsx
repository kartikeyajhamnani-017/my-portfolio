import type { Metadata } from 'next';
import Navbar from './components/navbar';
import Providers from './providers'; // 1. Import your new providers
import './globals.css'; // 2. Make sure globals.css is imported

export const metadata: Metadata = {
  title: 'My Website',
  description: 'My personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Add 'suppressHydrationWarning' to <html>
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* 4. Wrap your content (including Navbar) with Providers */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}