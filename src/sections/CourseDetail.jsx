import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Courses.css";

const CourseDetail = () => {
  useScrollReveal();
  const [searchParams] = useSearchParams();
  const courseId = parseInt(searchParams.get("id"));

  // Find the selected course data
  const course = COURSES_DATA.find((c) => c.id === courseId) || COURSES_DATA[0];

  return (
    <main className="courses-page" style={{ background: "#f8f9fa" }}>
      {/* HERO SECTION */}
      <section className="courses-hero reveal-on-scroll">
        <div className="courses-container">
          <div className="courses-hero-content">
            <span className="courses-eyebrow">{course.stream}</span>
            <h1>{course.title}</h1>
            <p>{course.fullTitle}</p>
          </div>
        </div>
      </section>

      {/* DETAILS CONTENT SECTION */}
      <section className="courses-explorer reveal-on-scroll" style={{ padding: "60px 0" }}>
        <div className="courses-container" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start" }}>
          
          {/* LEFT COLUMN: Overview & Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* PROGRAM OVERVIEW */}
            <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid #e4e7eb" }}>
              <h2 style={{ fontSize: "28px", color: "#101b35", marginBottom: "20px" }}>Program Overview</h2>
              <p style={{ fontSize: "16px", color: "#667085", lineHeight: "1.7", marginBottom: "15px" }}>
                {course.description}. This comprehensive programme is designed to equip learners with both theoretical knowledge and hands-on practical experience needed in today's digital and professional world.
              </p>
            </div>

            {/* CAREER OPPORTUNITIES */}
            <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid #e4e7eb" }}>
              <h2 style={{ fontSize: "28px", color: "#101b35", marginBottom: "20px" }}>Career Opportunities</h2>
              <p style={{ fontSize: "16px", color: "#667085", lineHeight: "1.7", marginBottom: "20px" }}>
                Graduates from this programme find excellent placement opportunities across top industries and corporate houses:
              </p>
              <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", listStyle: "disc", paddingLeft: "20px", color: "#475467" }}>
                <li>Software Developer / Professional</li>
                <li>Data Analyst & Consultant</li>
                <li>Core Domain Specialist</li>
                <li>Research & Higher Studies (MCA/MBA/etc.)</li>
              </ul>
            </div>

            {/* PROGRAM HIGHLIGHTS */}
            <div style={{ background: "#101b35", color: "#fff", padding: "40px", borderRadius: "12px" }}>
              <h2 style={{ fontSize: "28px", color: "#fff", marginBottom: "20px" }}>Program Highlights</h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0 }}>
                {course.highlights.map((highlight, index) => (
                  <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "16px" }}>
                    <span style={{ color: "#d59b24" }}>✓</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Summary Card & Admissions */}
          <div style={{ background: "#fff", padding: "30px", borderRadius: "12px", border: "1px solid #e4e7eb", position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "25px" }}>
            
            <div>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#667085", letterSpacing: "1px" }}>DURATION</span>
              <h3 style={{ fontSize: "24px", color: "#d59b24", marginTop: "5px" }}>{course.duration}</h3>
              <span style={{ fontSize: "13px", color: "#667085" }}>(Semester System)</span>
            </div>

            <hr style={{ border: "0", borderTop: "1px solid #e4e7eb" }} />

            <div>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#667085", letterSpacing: "1px" }}>LEVEL & MODE</span>
              <p style={{ fontSize: "16px", fontWeight: "600", color: "#101b35", marginTop: "5px" }}>{course.level} — {course.mode}</p>
            </div>

            <hr style={{ border: "0", borderTop: "1px solid #e4e7eb" }} />

            <div>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#667085", letterSpacing: "1px" }}>ELIGIBILITY</span>
              <p style={{ fontSize: "15px", color: "#475467", marginTop: "5px", lineHeight: "1.5" }}>{course.eligibility}</p>
            </div>

            <Link
              to={`/admissions?course=${encodeURIComponent(`${course.title} —${course.fullTitle}`)}`}
              style={{
                background: "#d59b24",
                color: "#101b35",
                textAlign: "center",
                padding: "15px",
                borderRadius: "8px",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginTop: "10px"
              }}
            >
              Enquire About This Course →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
};

export default CourseDetail;