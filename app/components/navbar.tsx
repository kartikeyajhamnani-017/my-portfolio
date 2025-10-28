import Link from 'next/link';
import ThemeToggle from './themetoggle';

// 1. Update navStyles to 'space-between'
const navStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between', // Changed from 'flex-start'
  alignItems: 'center',
  padding: '1rem 2rem',
};

// 2. Remove marginRight from linkStyles
const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  fontWeight: 500,
  // marginRight is no longer needed, we'll use 'gap'
};

// 3. Define styles for the new right-side wrapper
const rightNavStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem', // This adds spacing between your links/button
};

export default function Navbar() {
  return (
    <nav style={navStyles}>
      <Link href="/" style={linkStyles}>
        Home
      </Link>

      <div style={rightNavStyles}>
        <Link href="/about" style={linkStyles}>
          About
        </Link>
        <Link href="/my-cv" style={linkStyles}>
          MyCV
        </Link>
        <Link href="/my-works" style={linkStyles}>
          MyWorks
        </Link>

        {/* 2. Use the ThemeToggle component */}
        <ThemeToggle />
      </div>
    </nav>
  );
}