import Image from 'next/image';
import './flipcard.css'; 

export default function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        
        <div className="flip-card-front">
          <Image
            src="/my-photo.PNG"
            alt="Your Name"
            width={450}  
            height={450} 
            style={{ 
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>
        
        <div className="flip-card-back">
          <Image
            src="/my-avatar.PNG"
            alt="Your Avatar"
            width={450}  
            height={450}
            style={{ 
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>

      </div>
    </div>
  );
}