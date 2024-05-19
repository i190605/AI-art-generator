import React from 'react';
import './Generator.css';

function Generator() {
  return (
    <section className="generator">
      <h2>Generate Your Art</h2>
      <div className="generator-content">
        <div className="controls">
          <textarea placeholder="Enter prompt here..."></textarea>
          <button>Generate</button>
        </div>
        <div className="output">
          <img src="https://via.placeholder.com/300" alt="Generated Art" />
        </div>
      </div>
    </section>
  );
}

export default Generator;
