import React, { useState, useEffect } from 'react';
import './homeimage.css'; 
import Me from '../../assets/fahadkAvatar1.png'

function HomeImage() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setStartAnimation(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`image ${startAnimation ? 'rotate-animation' : ''}`}>
      <img src={Me} alt="Home_photo" className='home_img'/>
    </div>
  );
}

export default HomeImage;
