import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // 💡 GANTI TEKS "TBA" DI BAWAH SAMA CONTRACT ADDRESS (CA) ASLI LO NANTI
  const contractAddress = "TBA"; 
  
  const [copied, setCopied] = useState(false);

  // Fungsi buat copy otomatis ke clipboard HP/PC user (Tanpa Alert)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    // Balikin tulisan ke normal setelah 2 detik
    setTimeout(() => {
      setCopied(false);
    }, 2000); 
  };

  return (
    <div className="layout-container">
      {/* --- NAVBAR ATAS --- */}
      <nav className="top-navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Moltoc Logo" className="navbar-logo-img" />
          <span className="brand-name">Moltoc</span>
        </div>

        <div className="navbar-center">
          <a href="https://x.com/moltagentoc" target="_blank" rel="noopener noreferrer" className="nav-item">
            <span>X</span> @moltagentoc 
          </a>
          <a href="https://x.com/moltagentoc" target="_blank" rel="noopener noreferrer" className="nav-item">
            <span></span> X Community 
          </a>
        </div>

        <div className="navbar-right">
          {/* Box CA sekarang bisa diklik (cursor: pointer) */}
          <div className="contract-box-inline" onClick={copyToClipboard} style={{ cursor: 'pointer' }} title="Copy Contract Address">
            <span className="contract-label">Address:</span>
            <code className="contract-address">
              {copied ? "Copied! ✅" : `${contractAddress} ❐`}
            </code>
          </div>
        </div>
      </nav>

      {/* --- KONTEN UTAMA --- */}
      <main className="main-content">
        <div className="hero-text-section">
          <h1 className="hero-title">Welcome to Moltoc!</h1>
          <p className="hero-subtitle">
            We just making a Moltoc Cult
          </p>
          {/* Tombol Connect Wallet udah resmi dihapus dari sini */}
        </div>

        <div className="hero-image-container">
          <img src="/bg.png" alt="Moltoc Illustration" className="bg-illustration" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;