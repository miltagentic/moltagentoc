import React, { useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onEnter }) => {
  // State untuk ngatur efek memudar
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setIsFadingOut(true); // Jalankan animasi fade out
    
    // Tunggu 0.5 detik (sesuai durasi CSS) sebelum ganti halaman beneran
    setTimeout(() => {
      onEnter();
    }, 500); 
  };

  return (
    // Tambahin class "fade-out" kalau state-nya aktif
    <div className={`loading-wrapper ${isFadingOut ? 'fade-out' : ''}`} onClick={handleClick}>
      <div className="logo-container">
        <h1 className="text-logo">MOLTIC!</h1>
      </div>
      
      <div className="enter-instruction">
        <p>CLICK ANYWHERE TO ENTER</p>
      </div>
    </div>
  );
};

export default LoadingScreen;