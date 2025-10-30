import type { Metadata } from 'next';
import Navbar from './components/navbar';
import SocialSidebar from './components/socialsidebar';
import FlipCard from './components/flipcard'; // 1. Import FlipCard
import Providers from './providers';
import './globals.css';
import './components/flipcard.css'; // 2. Import the CSS

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <SocialSidebar />
          {/* 3. REMOVE: <FlipCard /> is no longer here */}
          {children}
        </Providers>
      </body>
    </html>
  );
}