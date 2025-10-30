import Link from 'next/link';
import ThemeToggle from './themetoggle';

// 1. Update navStyles to 'space-between'
const navStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',

  // --- ADD THESE LINES ---
  position: 'fixed', // This makes it "stick"
  top: 0,
  left: 0,
  right: 0, // Stretches it across the full width
  zIndex: 100, // Ensures it stays on top of other content
  
  // Also, let's make sure it uses the theme background
  background: 'var(--navbar-bg)', 
  borderBottom: '1px solid var(--navbar-border)',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
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
      
      {/* The "Home" link should still be a next/link 
          to reload the page (or go to '/') */}
      <Link href="/" style={linkStyles}>
        Home
      </Link>

      {/* --- CHANGED LINKS --- */}
      <div style={rightNavStyles}>
        
        {/* These are now <a> tags pointing to your section IDs */}
        <a href="#about" style={linkStyles}>
          About
        </a>
        <a href="#my-cv" style={linkStyles}>
          MyCV
        </a>
        <a href="#my-works" style={linkStyles}>
          MyWorks
        </a>

        {/* Your theme toggle remains the same */}
        <ThemeToggle />
      </div>
    </nav>
  );
}