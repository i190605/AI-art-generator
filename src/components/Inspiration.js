import React, { useState, useEffect } from "react";
import "./Inspiration.css";
import { config } from "./constants";

const inspirations = [
  { name: "Realistic", className: "realistic" },
  { name: "Science Fiction", className: "science-fiction" },
  { name: "Cartoon", className: "cartoon" },
  { name: "Anime", className: "anime" },
  { name: "Oil Painting", className: "oil-painting" },
  { name: "Landscape", className: "landscape" },
];

function Inspiration() {
  const [activeCategory, setActiveCategory] = useState(inspirations[0].name);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `${config.baseUrl}/api/mobile/assessment?format=json&hit_point=mobile&pagination=50`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);

      setAssets(data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <section className="inspiration">
      <div className="inspiration-title">
        <h2>Inspirations</h2>
      </div>
      <div className="categories">
        {inspirations.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${category.className} ${
              activeCategory === category.name ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {assets.map((asset, index) => (
          <div key={index} className="image-card">
            <img src={`${config.baseUrl}/${asset.images[0].image}`} />
            <p>
              {asset.generation_info.prompt.split(" ").slice(0, 7).join(" ")}
            </p>
            <div>{asset.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inspiration;
