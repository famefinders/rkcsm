import { useState } from "react";
import "./PopularCourses.css";

function PopularCourses() {
  const [activeTab, setActiveTab] = useState("All courses");

  const courses = [
    {
      icon: "⚖️",
      name: "BA LLB (integrated)",
      institution: "RK College of Law, Firozabad",
      tags: ["Degree", "5 years", "180 seats"],
      category: "Law",
      tagTypes: ["degree", "dip", "dip"],
    },
    {
      icon: "🏛️",
      name: "LLB (3 year)",
      institution: "RK College of Law, Firozabad",
      tags: ["Degree", "3 years", "120 seats"],
      category: "Law",
      tagTypes: ["degree", "dip", "dip"],
    },
    {
      icon: "💼",
      name: "B.Com",
      institution: "RKCSM, Firozabad",
      tags: ["Degree", "3 years", "180 seats"],
      category: "Commerce",
      tagTypes: ["degree", "dip", "dip"],
    },
    {
      icon: "📚",
      name: "B.Ed",
      institution: "RKCSM, Firozabad",
      tags: ["Degree", "2 years", "NCTE"],
      category: "Education",
      tagTypes: ["degree", "dip", "cert"],
    },
    {
      icon: "✏️",
      name: "D.El.Ed / BTC",
      institution: "RKCSM, Firozabad",
      tags: ["Diploma", "2 years", "NCTE"],
      category: "Education",
      tagTypes: ["dip", "dip", "cert"],
    },
    {
      icon: "📡",
      name: "Mass communication",
      institution: "RKFMA, New Delhi",
      tags: ["Diploma", "DU tie-up"],
      category: "Media & film",
      tagTypes: ["dip", "cert"],
    },
    {
      icon: "👗",
      name: "Fashion designing",
      institution: "RKAAD, New Delhi",
      tags: ["Diploma", "1 year / short-term"],
      category: "Design & arts",
      tagTypes: ["dip", "cert"],
    },
    {
      icon: "📱",
      name: "Digital marketing",
      institution: "RKFMA, New Delhi",
      tags: ["Certificate", "3–6 months"],
      category: "Media & film",
      tagTypes: ["cert", "cert"],
    },
  ];

  const tabs = [
    { label: "All courses", icon: "" },
    { label: "Law", icon: "⚖️" },
    { label: "Commerce", icon: "💼" },
    { label: "Education", icon: "📚" },
    { label: "Media & film", icon: "🎬" },
    { label: "Design & arts", icon: "🎨" },
    { label: "Sports", icon: "🏃" },
  ];

  const filteredCourses =
    activeTab === "All courses"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <section className="courses-section">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="courses-section-title">
          <div className="eyebrow">Academic programmes</div>

          <h2>Courses by discipline</h2>

          <div className="title-rule"></div>

          <p>
            Browse all 20+ programmes across law, commerce, education,
            media, design and arts
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="course-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`course-tab ${
                activeTab === tab.label ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* COURSE CARDS */}
        <div className="discipline-grid">
          {filteredCourses.map((course) => (
            <div className="discipline-card" key={course.name}>

              <div className="discipline-icon">
                {course.icon}
              </div>

              <h3>{course.name}</h3>

              <p className="discipline-institution">
                {course.institution}
              </p>

              <div className="discipline-tags">
                {course.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`discipline-tag ${course.tagTypes[index]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularCourses;