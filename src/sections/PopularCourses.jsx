import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import "./PopularCourses.css";

function PopularCourses() {
  const [activeTab, setActiveTab] = useState("All courses");
  const navigate = useNavigate();

  const tabs = [
    "All courses",
    "Law",
    "Commerce",
    "Education",
    "Media & film",
    "Computer Science & IT",
  ];

  const filteredCourses =
    activeTab === "All courses"
      ? COURSES_DATA
      : COURSES_DATA.filter((course) => course.category === activeTab);

  const handleCardClick = () => {
    navigate("/courses");
  };

  return (
    <section className="popular-courses-section">
      <div className="popular-courses-container">

        {/* TOP INTRO */}
        <div className="popular-courses-intro">
          <div className="popular-courses-heading">
            <div className="popular-kicker">
              <span></span>
              ACADEMIC PROGRAMMES
            </div>
            <div className="popular-title-row">
              <span className="popular-index">03</span>
              <h2>
                Find your
                <br />
                <em>direction.</em>
              </h2>
            </div>
          </div>

          <div className="popular-courses-copy">
            <div className="popular-count">
              <strong>12+</strong>
              <span>PROGRAMMES</span>
            </div>
            <p>
              Explore programmes across law, commerce, education,
              media, design and IT — and discover a path that
              fits your ambitions.
            </p>
            <Link to="/courses" className="popular-all-link">
              View all programmes
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* FILTERS */}
        <div className="popular-filters">
          <span className="popular-filter-label">EXPLORE BY</span>
          <div className="popular-tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                className={`popular-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* COURSE LIST */}
        <div className="popular-course-list">
          {filteredCourses.map((course, index) => (
            <article
              className="popular-course-row"
              key={course.id}
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
              <div className="popular-course-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="popular-course-icon">
                {course.title ? course.title.substring(0, 3).toUpperCase() : "IT"}
              </div>

              <div className="popular-course-main">
                <div className="popular-course-category">
                  {course.stream || course.category}
                </div>
                <h3>
                  {course.title} — {course.fullTitle}
                </h3>
                <p>
                  {course.description}
                </p>
              </div>

              <div className="popular-course-meta">
                <span>{course.level}</span>
                <span>{course.duration}</span>
                <span>{course.mode}</span>
              </div>

              <div className="popular-course-arrow">
                ↗
              </div>
            </article>
          ))}

          {filteredCourses.length === 0 && (
            <div className="popular-empty">
              <span>NO PROGRAMMES FOUND</span>
            </div>
          )}
        </div>

        {/* BOTTOM CTA */}
        <div className="popular-bottom">
          <div className="popular-bottom-line"></div>
          <p>Not sure which programme is right for you?</p>
          <Link to="/contact">
            Talk to our team
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PopularCourses;