import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [showAiTools, setShowAiTools] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <h1>ART GENERATOR</h1>
      <nav>
        <div className="menu-icon" onClick={() => setMenuActive(!menuActive)}>
          ☰
        </div>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <a href="#photo-editing-tools">Photo Editing Tools</a>
          </li>
          <li
            onMouseEnter={() => setShowAiTools(true)}
            onMouseLeave={() => setShowAiTools(false)}
            onClick={() => setShowAiTools(!showAiTools)}
          >
            <a href="#ai-tools">AI Tools</a>
            {showAiTools && (
              <ul className="dropdown">
                <li>
                  <a href="#ai-tool-1">AI Tool 1</a>
                </li>
                <li>
                  <a href="#ai-tool-2">AI Tool 2</a>
                </li>
                <li>
                  <a href="#ai-tool-3">AI Tool 3</a>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setShowSupport(true)}
            onMouseLeave={() => setShowSupport(false)}
            onClick={() => setShowSupport(!showSupport)}
          >
            <a href="#support">Support</a>
            {showSupport && (
              <ul className="dropdown">
                <li>
                  <a href="#support-1">Support 1</a>
                </li>
                <li>
                  <a href="#support-2">Support 2</a>
                </li>
                <li>
                  <a href="#support-3">Support 3</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <a href="#sign-in" className="sign-in">
        Sign In
      </a>
    </header>
  );
}

export default Header;
