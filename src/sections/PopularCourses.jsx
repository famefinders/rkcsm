import { useState } from "react";
import { Link } from "react-router-dom";
import "./PopularCourses.css";

function PopularCourses() {
  const [activeTab, setActiveTab] = useState("All courses");

  const courses = [
    {
      icon: "LAW",
      name: "BA LLB (Integrated)",
      institution: "R. K. College of Law, Firozabad",
      tags: ["Degree", "5 years", "180 seats"],
      category: "Law",
    },
    {
      icon: "LAW",
      name: "LLB (3 Year)",
      institution: "R. K. College of Law, Firozabad",
      tags: ["Degree", "3 years", "120 seats"],
      category: "Law",
    },
    {
      icon: "COM",
      name: "B.Com",
      institution: "R. K. College of Systems & Management, Firozabad",
      tags: ["Degree", "3 years", "180 seats"],
      category: "Commerce",
    },
    {
      icon: "EDU",
      name: "B.Ed",
      institution: "R. K. College of Systems & Management, Firozabad",
      tags: ["Degree", "2 years", "NCTE"],
      category: "Education",
    },
    {
      icon: "EDU",
      name: "D.El.Ed / BTC",
      institution: "R. K. College of Systems & Management, Firozabad",
      tags: ["Diploma", "2 years", "NCTE"],
      category: "Education",
    },
    {
      icon: "MED",
      name: "Mass Communication",
      institution: "R. K. Films & Media Academy, New Delhi",
      tags: ["Diploma", "DU tie-up"],
      category: "Media & film",
    },
    {
      icon: "ART",
      name: "Fashion Designing",
      institution: "R. K. Academy of Art & Design, New Delhi",
      tags: ["Diploma", "1 year / short-term"],
      category: "Design & arts",
    },
    {
      icon: "MED",
      name: "Digital Marketing",
      institution: "R. K. Films & Media Academy, New Delhi",
      tags: ["Certificate", "3–6 months"],
      category: "Media & film",
    },
  ];

  const tabs = [
    "All courses",
    "Law",
    "Commerce",
    "Education",
    "Media & film",
    "Design & arts",
    "Sports",
  ];

  const filteredCourses =
    activeTab === "All courses"
      ? courses
      : courses.filter((course) => course.category === activeTab);

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

              <span className="popular-index">
                03
              </span>

              <h2>
                Find your
                <br />
                <em>direction.</em>
              </h2>

            </div>

          </div>


          <div className="popular-courses-copy">

            <div className="popular-count">
              <strong>20+</strong>
              <span>PROGRAMMES</span>
            </div>

            <p>
              Explore programmes across law, commerce, education,
              media, design and arts — and discover a path that
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
              key={course.name}
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
                  {course.name}
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