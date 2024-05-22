import React from "react";
import "./HeaderText.css";

const TextHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>ART GENERATOR</span>
      </div>
      <div class="nav-links">
        <a href="#" class="button active">
          Text to Image
        </a>
        <a href="#" class="button disabled">
          Image to Image
        </a>
        <a href="#" class="button disabled">
          AI Avatar
        </a>
        <a href="#" class="button disabled">
          Face Swap
        </a>
      </div>

      <div className="profile">
        <img src="profile.png" alt="Profile Icon" className="profile-icon" />
      </div>
    </header>
  );
};

export default TextHeader;
