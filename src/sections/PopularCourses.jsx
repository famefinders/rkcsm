import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PopularCourses.css";

function PopularCourses() {
  const [activeTab, setActiveTab] = useState("All courses");
  const navigate = useNavigate();

  // Saare 12 courses ki details jo courses page par bhi use hoti hain
  const courses = [
    {
      id: 1,
      icon: "IT",
      name: "BCA",
      fullTitle: "Bachelor of Computer Applications",
      institution: "R.K. Group of Institutions",
      tags: ["Undergraduate", "3 years", "Full-time"],
      category: "Computer Science & IT",
    },
    {
      id: 2,
      icon: "IT",
      name: "B.Sc. (IT)",
      fullTitle: "Bachelor of Science in Information Technology",
      institution: "R.K. Group of Institutions",
      tags: ["Undergraduate", "3 years", "Full-time"],
      category: "Computer Science & IT",
    },
    {
      id: 3,
      icon: "IT",
      name: "MCA",
      fullTitle: "Master of Computer Applications",
      institution: "R.K. Group of Institutions",
      tags: ["Postgraduate", "2 years", "Full-time"],
      category: "Computer Science & IT",
    },
    {
      id: 4,
      icon: "IT",
      name: "PGDCA",
      fullTitle: "Post Graduate Diploma in Computer Applications",
      institution: "R.K. Group of Institutions",
      tags: ["Diploma", "1 year", "Part-time / Weekend"],
      category: "Computer Science & IT",
    },
    {
      id: 5,
      icon: "MED",
      name: "BJMC",
      fullTitle: "Bachelor of Journalism & Mass Communication",
      institution: "R. K. Films & Media Academy, New Delhi",
      tags: ["Undergraduate", "3 years", "Full-time"],
      category: "Media & film",
    },
    {
      id: 6,
      icon: "MED",
      name: "MJMC",
      fullTitle: "Master of Journalism & Mass Communication",
      institution: "R. K. Films & Media Academy, New Delhi",
      tags: ["Postgraduate", "2 years", "Full-time"],
      category: "Media & film",
    },
    {
      id: 7,
      icon: "MED",
      name: "PG Diploma in Journalism",
      fullTitle: "Post Graduate Diploma in Journalism",
      institution: "R. K. Films & Media Academy, New Delhi",
      tags: ["Diploma", "1 year", "Part-time / Weekend"],
      category: "Media & film",
    },
    {
      id: 8,
      icon: "COM",
      name: "BBA",
      fullTitle: "Bachelor of Business Administration",
      institution: "R. K. College of Systems & Management, Firozabad",
      tags: ["Undergraduate", "3 years", "Full-time"],
      category: "Commerce",
    },
    {
      id: 9,
      icon: "COM",
      name: "MBA",
      fullTitle: "Master of Business Administration",
      institution: "R. K. College of Systems & Management, Firozabad",
      tags: ["Postgraduate", "2 years", "Part-time / Weekend"],
      category: "Commerce",
    },
    {
      id: 10,
      icon: "EDU",
      name: "B.Ed.",
      fullTitle: "Bachelor of Education",
      institution: "R. K. College of Systems & Management, Firozabad",
      tags: ["Undergraduate", "2 years", "NCTE"],
      category: "Education",
    },
    {
      id: 11,
      icon: "LAW",
      name: "BA.LLB",
      fullTitle: "Bachelor of Arts & Bachelor of Laws",
      institution: "R. K. College of Law, Firozabad",
      tags: ["Undergraduate", "5 years", "180 seats"],
      category: "Law",
    },
    {
      id: 12,
      icon: "LAW",
      name: "LLB",
      fullTitle: "Bachelor of Laws",
      institution: "R. K. College of Law, Firozabad",
      tags: ["Undergraduate", "3 years", "120 seats"],
      category: "Law",
    },
  ];

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
      ? courses
      : courses.filter((course) => course.category === activeTab);

  const handleCardClick = () => {
    navigate("/courses");
  };

  return (
    <section className="popular-courses-section">
      <div className="popular-courses-container">

        {/* =========================================
            TOP INTRO
        ========================================= */}
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
            <Link
              to="/courses"
              className="popular-all-link"
            >
              View all programmes
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* =========================================
            FILTERS
        ========================================= */}
        <div className="popular-filters">
          <span className="popular-filter-label">
            EXPLORE BY
          </span>
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

        {/* =========================================
            COURSE LIST
        ========================================= */}
        <div className="popular-course-list">
          {filteredCourses.map((course, index) => (
            <article
              className="popular-course-row"
              key={course.id}
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
              {/* Number */}
              <div className="popular-course-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="popular-course-icon">
                {course.icon}
              </div>

              {/* Main */}
              <div className="popular-course-main">
                <div className="popular-course-category">
                  {course.category}
                </div>
                <h3>
                  {course.name} — {course.fullTitle}
                </h3>
                <p>
                  {course.institution}
                </p>
              </div>

              {/* Tags */}
              <div className="popular-course-meta">
                {course.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="popular-course-arrow">
                ↗
              </div>
            </article>
          ))}

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <div className="popular-empty">
              <span>NO PROGRAMMES FOUND</span>
            </div>
          )}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="popular-bottom">
          <div className="popular-bottom-line"></div>
          <p>
            Not sure which programme is right for you?
          </p>
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