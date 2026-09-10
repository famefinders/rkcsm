import React, { useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    title: "RKCSM Campus",
    category: "Campus",
    image: "/images/campus.jpg"
  },
  {
    title: "Computer Laboratory",
    category: "Academics",
    image: "/images/computer-lab.jpg"
  },
  {
    title: "Media & Production Studio",
    category: "Academics",
    image: "/images/media-studio.jpg"
  },
  {
    title: "Library",
    category: "Campus",
    image: "/images/library.jpg"
  },
  {
    title: "Convocation",
    category: "Events",
    image: "/images/convocation.jpg"
  },
  {
    title: "Cultural Festival",
    category: "Events",
    image: "/images/cultural-festival.jpg"
  }
];

const categories = ["All", "Campus", "Academics", "Events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-container">

          <span className="gallery-label">CAMPUS LIFE</span>

          <h1>Life at RKCSM</h1>

          <p>
            Explore our campuses, classrooms, laboratories, events and
            the experiences that make student life memorable.
          </p>

        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-main">
        <div className="gallery-container">

          <div className="gallery-heading">
            <span className="gallery-label">GALLERY</span>

            <h2>Inside our learning environment</h2>

            <p>
              A glimpse into the academic and campus experiences at RKCSM.
            </p>
          </div>

          {/* FILTERS */}
          <div className="gallery-filters">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

          </div>

          {/* GRID */}
          <div className="gallery-grid">

            {filteredItems.map((item, index) => (
              <div className="gallery-card" key={index}>

                <div className="gallery-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="gallery-container">

          <span className="gallery-label">EXPERIENCE RKCSM</span>

          <h2>Come and experience the campus yourself.</h2>

          <p>
            Have questions about admissions or our programmes?
            Our team is ready to help.
          </p>

          <a href="/contact" className="gallery-button">
            Contact us →
          </a>

        </div>
      </section>

    </main>
  );
};

export default Gallery;