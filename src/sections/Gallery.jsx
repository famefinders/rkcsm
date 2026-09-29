import React, { useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    title: "RKCSM Campus",
    category: "Campus",
    image: "/images/campus.jpg",
    desc: "Main campus building showing our vibrant environment."
  },
  {
    title: "Computer Laboratory",
    category: "Academics",
    image: "/images/computer-lab.jpg",
    desc: "State-of-the-art computer labs equipped with modern systems."
  },
  {
    title: "Media & Production Studio",
    category: "Academics",
    image: "/images/media-studio.jpg",
    desc: "Professional studio for mass communication and journalism students."
  },
  {
    title: "Library",
    category: "Campus",
    image: "/images/library.jpg",
    desc: "Extensive collection of books, journals and study materials."
  },
  {
    title: "Convocation",
    category: "Events",
    image: "/images/convocation.jpg",
    desc: "Celebrating academic success and graduation milestones."
  },
  {
    title: "Cultural Festival",
    category: "Events",
    image: "/images/cultural-festival.jpg",
    desc: "Students participating in annual cultural and arts events."
  },
  {
    title: "Moot Court Room",
    category: "Academics",
    image: "/images/moot-court.jpg",
    desc: "Students participating in practical moot court training sessions."
  },
  {
  title: "Academic Meet & Faculty",
  category: "Academics",
  image: "/images/academic-gathering.jpg",
  desc: "Faculty members and students gathered at the college campus."
  },
  {
    title: "Main Campus Building",
    category: "Campus",
    image: "/images/campus-building.jpg",
    desc: "Front view of our sprawling campus building and lush green lawns."
  },
  {
    title: "Green Lawns & Gardens",
    category: "Campus",
    image: "/images/campus-lawn-1.jpg",
    desc: "Peaceful and well-maintained green spaces across the campus."
  },
  {
    title: "Campus Gardens",
    category: "Campus",
    image: "/images/campus-lawn-2.jpg",
    desc: "Scenic views of the college grounds and natural surroundings."
  },
  {
    title: "College Grounds",
    category: "Campus",
    image: "/images/campus-ground.jpg",
    desc: "Open grounds providing an energetic atmosphere for students."
  },
  {
    title: "Campus Walkway",
    category: "Campus",
    image: "/images/campus-pathway.jpg",
    desc: "Connecting pathways and corridors across institutional blocks."
  }
];

const categories = ["All", "Campus", "Academics", "Events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

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
              A glimpse into the academic and campus experiences at RKCSM. Click any image to view details.
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
              <div 
                className="gallery-card" 
                key={index}
                onClick={() => setActiveImage(item)}
              >

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

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>&times;</button>
            <img src={activeImage.image} alt={activeImage.title} />
            <div className="lightbox-details">
              <span className="lightbox-cat">{activeImage.category}</span>
              <h2>{activeImage.title}</h2>
              <p>{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}

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