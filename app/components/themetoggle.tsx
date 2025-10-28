'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Using some basic CSS variables for colors (we'll define them in globals.css)
const toggleContainerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  width: '50px', // Width of the entire toggle
  height: '28px', // Height of the entire toggle
  cursor: 'pointer',
};

// Visually hidden checkbox for accessibility
const hiddenCheckboxStyle: React.CSSProperties = {
  opacity: 0,
  width: 0,
  height: 0,
};

// Styles for the actual slider background (the track)
const sliderStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'var(--toggle-bg-light)', // Will be defined in globals.css
  borderRadius: '28px', // Half of height for rounded ends
  transition: '0.4s',
  border: '1px solid var(--toggle-border)', // A border for both states
};

// Styles for the slider 'thumb' or 'handle'
const thumbStyle: React.CSSProperties = {
  position: 'absolute',
  content: '""', // Required for pseudo-elements, but not for div
  height: '22px', // Slightly smaller than track height
  width: '22px', // Square for the circle
  left: '3px', // Spacing from the left
  bottom: '3px', // Spacing from the bottom
  backgroundColor: 'var(--toggle-thumb-light)', // Will be defined in globals.css
  borderRadius: '50%', // Makes it a circle
  transition: '0.4s',
  display: 'flex', // For centering the icon
  justifyContent: 'center',
  alignItems: 'center',
};

// Styles for the icon inside the thumb
const iconStyle: React.CSSProperties = {
  fontSize: '14px', // Size of the moon/sun icon
  color: 'var(--toggle-icon-light)', // Color of the icon
  transition: '0.4s',
};


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to prevent layout shift
    return <div style={toggleContainerStyle} />;
  }

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // Dynamic styles based on theme
  const currentSliderStyle: React.CSSProperties = {
    ...sliderStyle,
    backgroundColor: isDark ? 'var(--toggle-bg-dark)' : 'var(--toggle-bg-light)',
    // You could also change the border color here if needed
  };

  const currentThumbStyle: React.CSSProperties = {
    ...thumbStyle,
    transform: isDark ? 'translateX(22px)' : 'translateX(0)', // Moves the thumb
    backgroundColor: isDark ? 'var(--toggle-thumb-dark)' : 'var(--toggle-thumb-light)',
  };

  const currentIconStyle: React.CSSProperties = {
    ...iconStyle,
    color: isDark ? 'var(--toggle-icon-dark)' : 'var(--toggle-icon-light)',
  };


  return (
    <label style={toggleContainerStyle}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        style={hiddenCheckboxStyle}
        aria-label="Toggle dark mode"
      />
      <div style={currentSliderStyle}>
        <div style={currentThumbStyle}>
          <span style={currentIconStyle}>
            {isDark ? '☾' : '☀'} {/* Using unicode symbols for now */}
          </span>
        </div>
      </div>
    </label>
  );
}