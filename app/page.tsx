'use client'; 

// 1. Fixed case consistency (FlipCard)
import FlipCard from './components/flipcard'; 
import { TypeAnimation } from 'react-type-animation';

// 2. Fixed case and renamed CSS files
import './components/flipcard.css'; 
import './components/ripplebutton.css'; // Renamed from 'ripplebutton.css'

// --- STYLES ---

const heroSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  minHeight: '80vh',
  gap: '4rem',
  padding: '2rem',
  // --- ADDED/CHANGED ---
  paddingTop: '11rem', // This pushes the content down below the navbar
  // Also adjust justify-content for more centered feel if it seems too low
  WebkitJustifyContent : 'center'
};

// 3. CLEANUP: This is just the container now
const heroTextStyle: React.CSSProperties = {
  width: '500px',
  textAlign:'left',
  display: 'flex',
  flexDirection: 'column',
  
  gap: '3rem',
  
  // REMOVED: fontSize & fontWeight
  // These properties belong on the text itself, not the container
};

// 4. This style now holds the text properties and the minHeight fix
const typingStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  height: '15rem', // The vertical wobble fix
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', // This pushes the text to the bottom
};

// --- COMPONENT ---

export default function HomePage() {
  return (
    <main>
      <section style={heroSectionStyle}>
        
        {/* Left Side Container */}
        <div style={heroTextStyle}>
          
          {/* 5. ADDED: This div uses the 'typingStyle' to fix the wobble */}
          <div style={typingStyle}>
            <TypeAnimation
              sequence={[
                'Hi, I\'m  Kartikeya Jhamnani',
                1500,
                'I am a Software Developer',
                1500,
                'I am a Cloud Engineer',
                1500,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          {/* Button (This part was already correct) */}
          <div style={{ marginTop: '3rem' }}>
            <a 
              href="mailto:kartikeyajhamnani@gmail.com" 
              className="action-button"
            >
              Let's Talk
            </a>
          </div>

        </div>

        {/* Right Side: Flip Card */}
        <div style={{ transform: 'translate(90px, -70px)' }}>
          <FlipCard />
        </div>

      </section>

      {/* --- Your Other Sections --- */}
      <section id="about" style={{ padding: '2rem', minHeight: '100vh' }}>
        <h2>About Me</h2>
      </section>
      
      <section id="my-cv" style={{ padding: '2rem', minHeight: '100vh', background: 'var(--navbar-bg)' }}>
        <h2>My CV</h2>
      </section>
      
      <section id="my-works" style={{ padding: '2rem', minHeight: '100vh' }}>
        <h2>My Works</h2>
      </section>
    </main>
  );
}