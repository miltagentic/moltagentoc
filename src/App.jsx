import { useState } from 'react';
// Import komponen LandingPage yang baru dibuat
import LandingPage from './components/LandingPage'; 
// Import LoadingScreen (pastikan path-nya benar sesuai posisi file lo)
import LoadingScreen from './components/LoadingScreen'; 
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered ? (
        // Tampilkan Loading Screen dulu
        <LoadingScreen onEnter={() => setHasEntered(true)} />
      ) : (
        // Setelah diklik, tampilkan Landing Page yang mirip referensi
        <LandingPage />
      )}
    </>
  );
}

export default App;