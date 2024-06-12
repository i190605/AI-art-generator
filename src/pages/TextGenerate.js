import React, { useEffect } from "react";
import TextHeader from "../components/HeaderText"; // Adjust the path if necessary
import "./TextGenerate.css"; // Ensure your CSS file is imported

const TextGenerate = () => {
  useEffect(() => {
    // Left Side Navigation
    const sideNavLeft = document.createElement("div");
    sideNavLeft.id = "side-nav-left";

    const myCreations = document.createElement("div");
    myCreations.id = "my-creations";
    myCreations.textContent = "My Creations";

    const dividerLeft = document.createElement("div");
    dividerLeft.classList.add("divider");

    // List of landscape images
    const creations = [
      "https://images.unsplash.com/photo-1587502536263-3ff9b9f36cd7?fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1604850802744-5114b9c675ff?fit=crop&w=600&h=400&q=80",
    ];

    sideNavLeft.appendChild(myCreations);
    sideNavLeft.appendChild(dividerLeft);

    creations.forEach((image) => {
      const creation = document.createElement("div");
      creation.classList.add("creation");
      creation.style.backgroundImage = `url(${image})`;
      sideNavLeft.appendChild(creation);
    });

    // Right Side Navigation
    const sideNavRight = document.createElement("div");
    sideNavRight.id = "side-nav-right";

    // Content for the right side navigation
    const rightContentHTML = `
      <div class="rectangle-46">
        
        <textarea class="description-input" placeholder="Describe what you want to create"></textarea>
        <div class="settings">⚙️ Settings</div>
      </div>
      <div class="aspect-ratio">Aspect Ratio</div>
      <div class="aspect-ratio-options">
        <button>1:1</button>
        <button>2:3</button>
        <button>3:2</button>
        <button>3:4</button>
        <button>4:3</button>
      </div>
      <div class="models-styles">Models & Styles</div>
      <div class="models-options">
        <button>Realistic</button>
        <button>Disney</button>
        <button>Anime</button>
      </div>
      <div class="styles-options">
        <button>Icon</button>
        <button>Render</button>
        <button>Line Art</button>
        <button>Pixel Art</button>
        <button>Cartoon</button>
        <button>Imagine V3</button>
      </div>
      <div class="rectangle-48">
        <div class="generate">Generate</div>
      </div>
    `;
    sideNavRight.innerHTML = rightContentHTML;

    document.body.appendChild(sideNavLeft);
    document.body.appendChild(sideNavRight);

    return () => {
      // Cleanup: remove the side-navs when the component unmounts
      document.body.removeChild(sideNavLeft);
      document.body.removeChild(sideNavRight);
    };
  }, []);

  return (
    <div>
      <TextHeader />
      <div className="text-generate-content">
        <div className="center-picture">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=800&h=600&q=80"
            alt="Center"
          />
        </div>
      </div>
    </div>
  );
};

export default TextGenerate;
