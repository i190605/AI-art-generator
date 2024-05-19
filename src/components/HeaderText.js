import React from 'react';
import './HeaderText.css';

const TextHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>ART GENERATOR</span>
      </div>
      <nav className="nav">
        <button className="nav-button active">Text to Image</button>
        <button className="nav-button">Image to Image</button>
        <button className="nav-button">AI Avatar</button>
        <button className="nav-button">Face Swap</button>
      </nav>
      <div className="profile">
        <img src="profile.png" alt="Profile Icon" className="profile-icon" />
      </div>
    </header>
  );
};

export default TextHeader;
