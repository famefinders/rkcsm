import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Faculty.css";

const Faculty = () => {
  useScrollReveal();

  const facultyDepartments = [
    {
      title: "Faculty of Law",
      badge: "Legal Studies",
      desc: "Dedicated to shaping competent legal professionals through rigorous academic study, moot court practice, and expert mentorship in LLB and BA.LLB programmes.",
      courses: ["LLB (3 Years)", "BA.LLB (5 Years)"]
    },
    {
      title: "Faculty of Commerce",
      badge: "Commerce & Business",
      desc: "Empowering students with strong foundational and practical knowledge in commerce, accounting, business management, and financial systems through B.Com.",
      courses: ["B.Com (Undergraduate)"]
    },
    {
      title: "Faculty of Education",
      badge: "Teacher Training",
      desc: "Committed to building skilled, passionate educators and teaching professionals equipped with modern pedagogical methods via B.Ed and D.El.Ed programmes.",
      courses: ["B.Ed (Bachelor of Education)", "D.El.Ed (Diploma in Elementary Education)"]
    },
    {
      title: "Sports Academy",
      badge: "Physical Education",
      desc: "Promoting physical fitness, athletic discipline, and sportsmanship through dedicated coaching, tournaments, and state-of-the-art sports infrastructure.",
      courses: ["Cricket", "Football", "Athletics", "Badminton & More"]
    }
  ];

  return (
    <main className="faculty-page">

      {/* HERO */}
      <section className="faculty-hero reveal-on-scroll">
        <div className="faculty-container">
          <span className="faculty-eyebrow">ACADEMIC DEPARTMENTS</span>
          <h1>Our Distinguished Faculty</h1>
          <p>
            Expert academicians, legal practitioners, and dedicated educators driving
            excellence across our specialized colleges and training academies.
          </p>
        </div>
      </section>

      {/* DEPARTMENTS GRID */}
      <section className="faculty-main section-space reveal-on-scroll">
        <div className="faculty-container">
          
          <div className="faculty-heading">
            <span className="faculty-eyebrow">FACULTY DIRECTORY</span>
            <h2>Excellence Across Disciplines</h2>
            <p>Guided by experienced mentors dedicated to student success and holistic growth.</p>
          </div>

          <div className="faculty-grid">
            {facultyDepartments.map((dept, index) => (
              <div className="faculty-card" key={index}>
                <div className="faculty-card-top">
                  <span className="fac-badge">{dept.badge}</span>
                  <span className="fac-num">0{index + 1}</span>
                </div>
                <h3>{dept.title}</h3>
                <p>{dept.desc}</p>
                <div className="faculty-courses-list">
                  <strong>Offered Programmes:</strong>
                  <ul>
                    {dept.courses.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="faculty-cta reveal-on-scroll">
        <div className="faculty-container">
          <div className="faculty-cta-box">
            <span className="faculty-eyebrow">JOIN OUR INSTITUTIONS</span>
            <h2>Ready to begin your academic journey under expert mentorship?</h2>
            <p>Explore our courses and find the right faculty department aligned with your career objectives.</p>
            <Link to="/courses" className="faculty-btn">
              Explore All Courses →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Faculty;