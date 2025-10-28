/**
 * This is the main homepage component.
 * It will be rendered as the 'children' prop in layout.tsx.
 */
export default function HomePage() {
  return (
    <main style={{
      fontFamily: 'system-ui, sans-serif',
      padding: '3rem',
      lineHeight: '1.5'
    }}>
      <h1>
        Welcome to My Page!
      </h1>
      <p>
        This is the content for the homepage.
      </p>
      <p>
        The navbar above is part of the layout and will stay
        on all pages.
      </p>
    </main>
  );
}