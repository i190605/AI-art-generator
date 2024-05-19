import React, { useState } from 'react';
import './Inspiration.css';

const inspirations = [
  { name: 'Realistic', className: 'realistic' },
  { name: 'Science Fiction', className: 'science-fiction' },
  { name: 'Cartoon', className: 'cartoon' },
  { name: 'Anime', className: 'anime' },
  { name: 'Oil Painting', className: 'oil-painting' },
  { name: 'Landscape', className: 'landscape' }
];

// Updated with random images from Unsplash
const images = [
  { alt: "A beautiful landscape", src: "https://source.unsplash.com/random/150x150?nature" },
  { alt: "A city skyline", src: "https://source.unsplash.com/random/150x150?city" },
  { alt: "A cute dog", src: "https://source.unsplash.com/random/150x150?dog" },
  { alt: "A beautiful flower", src: "https://source.unsplash.com/random/150x150?flower" },
  { alt: "A delicious meal", src: "https://source.unsplash.com/random/150x150?food" },
  { alt: "A mountain range", src: "https://source.unsplash.com/random/150x150?mountain" },
  { alt: "A person meditating", src: "https://source.unsplash.com/random/150x150?meditation" },
  { alt: "A futuristic city", src: "https://source.unsplash.com/random/150x150?future" }
];

function Inspiration() {
  const [activeCategory, setActiveCategory] = useState(inspirations[0].name);

  return (
    <section className="inspiration">
      <div className="inspiration-title">
        <h2>Inspirations</h2>
      </div>
      <div className="categories">
        {inspirations.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${category.className} ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.src} alt={image.alt} />
            <p>{image.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inspiration;
