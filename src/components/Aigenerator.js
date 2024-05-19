import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Aigenerator.css';

function AIArtGenerator() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGenerateClick = () => {
    navigate('/text-generate'); // Navigate to the TextGenerate page
  };

  return (
    <div className="ai-art-generator-container">
      <div className="ellipse-1"></div>
      <div className="ellipse-2"></div>
      <div className="ellipse-3"></div>
      <h1 className="title">AI Art Generator</h1>
      <p className="description">
        Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI generated art. Enter a prompt, and choose a style, AI art generator brings your ideas to life!
      </p>
      <div className="input-container">
        <input type="text" placeholder="Enter prompt here..." className="prompt-input" />
        <div className="generate-button-container">
          <button className="generate-button" onClick={handleGenerateClick}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default AIArtGenerator;
