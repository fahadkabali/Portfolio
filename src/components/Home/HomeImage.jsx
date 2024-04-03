import React, { useState, useEffect, useRef } from 'react';
import './homeimage.css'; 
import Me from '../../assets/fahadkAvatar1.png'



function HomeImage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const startAnimationAfterInactivity = () => {
      timerRef.current = setTimeout(() => {
        setStartAnimation(true);
      }, 5000); 
    };

    const handleUserActivity = () => {
      setStartAnimation(false);
      clearTimeout(timerRef.current);
      startAnimationAfterInactivity();
    };


    startAnimationAfterInactivity();

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
    };
  }, []);

  return (
    <div className={`image ${startAnimation ? 'rotate-animation' : ''}`}>
      <img src={Me} alt="Home_photo" className="home_img"/>
    </div>
  );
}

export default HomeImage;
