import React, { useState } from "react";
import "./Alumni.css";

const alumniStories = [
  {
    name: "Priya Sharma",
    course: "BJMC, 2019",
    role: "Media Professional",
    text: "The practical exposure during my course helped me understand how professional media environments actually work."
  },
  {
    name: "Aman Verma",
    course: "MCA, 2021",
    role: "Software Professional",
    text: "The combination of technical learning and practical projects gave me confidence to begin my professional journey."
  },
  {
    name: "Neha Gupta",
    course: "B.Ed., 2018",
    role: "Teacher",
    text: "The teaching practice and academic environment helped me become more confident in the classroom."
  },
  {
    name: "Rahul Yadav",
    course: "BBA, 2020",
    role: "Business Professional",
    text: "The practical approach to management studies helped me develop skills that I could use in the workplace."
  },
  {
    name: "Sana Khan",
    course: "MJMC, 2022",
    role: "Digital Media Professional",
    text: "The media-focused learning experience gave me a strong foundation for working in the digital media industry."
  }
];

const Alumni = () => {
  const [current, setCurrent] = useState(0);

  const nextStory = () => {
    setCurrent((prev) => (prev + 1) % alumniStories.length);
  };

  const previousStory = () => {
    setCurrent(
      (prev) => (prev - 1 + alumniStories.length) % alumniStories.length
    );
  };

  const story = alumniStories[current];

  return (
    <main className="alumni-page">

      {/* HERO */}
      <section className="alumni-hero">
        <div className="alumni-hero-content">
          <span className="section-label">OUR ALUMNI</span>

          <h1>Where our students are today</h1>

          <p>
            Our alumni carry the knowledge, confidence and practical experience
            gained during their time with RKCSM into their professional lives.
          </p>
        </div>
      </section>

      {/* STORIES */}
      <section className="alumni-stories">
        <div className="alumni-container">

          <div className="alumni-heading">
            <span className="section-label">ALUMNI STORIES</span>

            <h2>Learning that stays with you</h2>

            <p>
              Explore stories from students who have taken their next steps
              after completing their education with us.
            </p>
          </div>

          <div className="alumni-card">

            <div className="quote-mark">“</div>

            <p className="alumni-quote">
              {story.text}
            </p>

            <div className="alumni-person">
              <div className="alumni-avatar">
                {story.name.charAt(0)}
              </div>

              <div>
                <h3>{story.name}</h3>
                <p>
                  {story.course} · {story.role}
                </p>
              </div>
            </div>

            <div className="alumni-controls">

              <button
                className="alumni-arrow"
                onClick={previousStory}
                aria-label="Previous alumni story"
              >
                ←
              </button>

              <span className="alumni-counter">
                {current + 1} / {alumniStories.length}
              </span>

              <button
                className="alumni-arrow"
                onClick={nextStory}
                aria-label="Next alumni story"
              >
                →
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* COMMUNITY */}
      <section className="alumni-community">
        <div className="alumni-container alumni-community-grid">

          <div>
            <span className="section-label">STAY CONNECTED</span>

            <h2>Once a student, always part of the community.</h2>
          </div>

          <div>
            <p>
              Stay connected with RKCSM, share your professional journey and
              inspire the next generation of students.
            </p>

            <a href="/contact" className="alumni-button">
              Share your story
            </a>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Alumni;