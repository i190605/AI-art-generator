import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>ART GENERATOR</h1>
      <nav>
        <ul>
          <li><a href="#photo-editing-tools">Photo Editing Tools</a></li>
          <li><a href="#ai-tools">AI Tools</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
      <a href="#sign-in" className="sign-in">Sign In</a>
    </header>
  );
}

export default Header;
