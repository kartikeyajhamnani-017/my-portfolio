import Link from 'next/link';
// We'll use Bootstrap icons (bs) for a consistent look
import {
  BsLinkedin,
  BsInstagram,
  BsDiscord,
  BsAward, // A good icon for Credly
  // BsWhatsapp, // You could use this if you ignore the warning
} from 'react-icons/bs';

// Styles for the fixed container
const sidebarStyle: React.CSSProperties = {
  position: 'fixed', // Sticks to the viewport
  top: '50%', // Centers vertically
  transform: 'translateY(-50%)', // Adjusts vertical center
  left: 0, // Sticks to the left edge
  
  padding: '1rem', // Spacing from the edge
  
  display: 'flex',
  flexDirection: 'column', // Stack icons vertically
  gap: '1.5rem', // Space between icons
  
  // Use a transparent background
  backgroundColor: 'transparent', 
};

export default function SocialSidebar() {
  return (
    // We give it an 'id' so we can style the links with CSS
    <nav id="social-sidebar" style={sidebarStyle}>
      <Link href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        <BsLinkedin size={24} />
      </Link>
      
      <Link href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
        <BsInstagram size={24} />
      </Link>
      
      <Link href="https://discord.com/users/your-userid" target="_blank" rel="noopener noreferrer">
        <BsDiscord size={24} />
      </Link>
      
      <Link href="https://www.credly.com/users/your-username" target="_blank" rel="noopener noreferrer">
        <BsAward size={24} />
      </Link>

      {/* <Link href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp size={24} />
      </Link> 
      */}
    </nav>
  );
}