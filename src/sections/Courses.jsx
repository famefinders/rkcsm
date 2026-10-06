import React from "react";
import { Link } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Courses.css";

const Courses = () => {
  useScrollReveal(); // Poore page par smooth scroll reveal animation ke liye

  return (
    <main className="courses-page">

      {/* HERO SECTION WITH DYNAMIC COURSES BACKGROUND IMAGE */}
      <section 
        className="courses-hero reveal-on-scroll" 
        style={{ 
          position: "relative",
          backgroundColor: "#101b35",
          overflow: "hidden",
          color: "#fff",
          padding: "80px 0"
        }}
      >
        {/* Background Image Container */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1
          }}
        >
          <img 
            src="/images/courses.jpg" 
            alt="Courses Hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: "0.9"
            }}
          />
          {/* Dark Overlay for text readability */}
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(16, 27, 53, 0.25)"
            }}
          />
        </div>

        {/* Content over image */}
        <div className="courses-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="courses-hero-content">

            <span className="courses-eyebrow" style={{ color: "#d59b24" }}>
              OUR PROGRAMMES
            </span>

            <h1 style={{ color: "#fff" }}>
              Find the programme
              <br />
              that fits your future
            </h1>

            <p style={{ color: "#e4e7eb" }}>
              Explore our undergraduate, postgraduate, diploma and professional
              programmes including B.Com, B.Ed, D.El.Ed, LLB and BA.LLB.
            </p>

          </div>
        </div>
      </section>


      {/* COURSE EXPLORER (BINA FILTERS KE) */}
      <section className="courses-explorer reveal-on-scroll">

        <div className="courses-container">

          {/* RESULT HEADER */}
          <div className="courses-result-header" style={{ paddingTop: 0 }}>

            <div>
              <span className="courses-eyebrow">
                COURSE DIRECTORY
              </span>

              <h2>
                {COURSES_DATA.length} Programmes Available
              </h2>
            </div>

          </div>


          {/* COURSES GRID */}
          <div className="courses-grid">

            {COURSES_DATA.map((course) => {
              // Category ke hisaab se card ka background color match kar rahe hain
              let cardBgColor = "#ffffff";
              let cardBorderColor = "#e1e4e8";

              if (course.category === "Computer Science & IT") {
                cardBgColor = "#f4f7fa";
                cardBorderColor = "#d0d9e2";
              } else if (course.category === "Media & film") {
                cardBgColor = "#faf6f0";
                cardBorderColor = "#e6dcd0";
              } else if (course.category === "Commerce" || course.category === "Management") {
                cardBgColor = "#f5f6f8";
                cardBorderColor = "#dcdfe5";
              } else if (course.category === "Law" || course.category === "Education") {
                cardBgColor = "#fbf9f5";
                cardBorderColor = "#eae3d2";
              }

              return (
                <article
                  className="course-card"
                  key={course.id}
                  style={{ 
                    overflow: "hidden", 
                    borderRadius: "16px", 
                    display: "flex", 
                    flexDirection: "column", 
                    backgroundColor: cardBgColor,
                    border: `1px solid ${cardBorderColor}`
                  }}
                >

                  {/* COURSE CARD TOP IMAGE THUMBNAIL */}
                  <div style={{ width: "100%", height: "180px", overflow: "hidden", background: "#101b35" }}>
                    <img 
                      src={course.image || "/images/bca.jpg"} 
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </div>

                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div className="course-card-top">

                      <span className="course-stream" style={{ color: "#d59b24", fontWeight: "700" }}>
                        {course.stream}
                      </span>

                      <span className="course-number">
                        {String(course.id).padStart(2, "0")}
                      </span>

                    </div>


                    <h3 style={{ color: "#101b35", marginTop: "10px" }}>{course.title}</h3>

                    <h4 style={{ color: "#485365", fontSize: "14px", marginBottom: "15px" }}>{course.fullTitle}</h4>

                    <p className="course-description" style={{ color: "#707887", fontSize: "14px" }}>
                      {course.description}
                    </p>


                    <div className="course-meta">

                      <div>
                        <span>LEVEL</span>
                        <strong>{course.level}</strong>
                      </div>

                      <div>
                        <span>DURATION</span>
                        <strong>{course.duration}</strong>
                      </div>

                      <div>
                        <span>MODE</span>
                        <strong>{course.mode}</strong>
                      </div>

                    </div>


                    <div className="course-eligibility">

                      <span>ELIGIBILITY</span>

                      <p>{course.eligibility}</p>

                    </div>


                    <div className="course-highlights">

                      <span>HIGHLIGHTS</span>

                      <ul>
                        {course.highlights.map((highlight, index) => (
                          <li key={index}>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                    </div>


                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto", paddingTop: "15px" }}>
                      {/* CHECK DETAILS BUTTON */}
                      <Link
                        to={`/course-detail?id=${course.id}`}
                        className="course-enquiry"
                        style={{ color: "#101b35", fontWeight: "700" }}
                      >
                        Check Details
                        <span>→</span>
                      </Link>

                      {/* EXISTING ENQUIRE BUTTON */}
                      <Link
                        to={`/admissions?course=${encodeURIComponent(
                          `${course.title} —${course.fullTitle}`
                        )}`}
                        className="course-enquiry"
                      >
                        Enquire about this course
                        <span>→</span>
                      </Link>
                    </div>
                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="courses-cta reveal-on-scroll">

        <div className="courses-container">

          <div className="courses-cta-content">

            <span className="courses-eyebrow">
              NEED HELP?
            </span>

            <h2>
              Not sure which programme
              <br />
              is right for you?
            </h2>

            <p>
              Speak with our admissions team and get guidance
              based on your education and career goals.
            </p>

            <Link
              to="/admissions"
              className="courses-cta-button"
            >
              Talk to admissions
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Courses;