import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Courses.css";

const Courses = () => {
  useScrollReveal(); // Poore page par smooth scroll reveal animation ke liye

  const [search, setSearch] = useState("");
  const [stream, setStream] = useState("All");
  const [level, setLevel] = useState("All");
  const [mode, setMode] = useState("All");

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(searchText) ||
        course.fullTitle.toLowerCase().includes(searchText) ||
        course.description.toLowerCase().includes(searchText);

      const matchesStream =
        stream === "All" || course.stream === stream;

      const matchesLevel =
        level === "All" || course.level === level;

      const matchesMode =
        mode === "All" || course.mode === mode;

      return (
        matchesSearch &&
        matchesStream &&
        matchesLevel &&
        matchesMode
      );
    });
  }, [search, stream, level, mode]);

  const resetFilters = () => {
    setSearch("");
    setStream("All");
    setLevel("All");
    setMode("All");
  };

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


      {/* COURSE EXPLORER */}
      <section className="courses-explorer reveal-on-scroll">

        <div className="courses-container">

          {/* SEARCH */}
          <div className="course-search-box">

            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search courses, e.g. B.Com, LLB, B.Ed, D.El.Ed"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          {/* FILTERS */}
          <div className="course-filters">

            <div className="filter-group">

              <label>Stream</label>

              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
              >
                <option>All</option>
                <option>Computer Science & IT</option>
                <option>Mass Communication</option>
                <option>Management</option>
                <option>Teacher Training & Law</option>
                <option>Commerce & School</option>
              </select>

            </div>


            <div className="filter-group">

              <label>Level</label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option>All</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>Diploma</option>
                <option>School</option>
              </select>

            </div>


            <div className="filter-group">

              <label>Mode</label>

              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
              >
                <option>All</option>
                <option>Full-time</option>
                <option>Part-time / Weekend</option>
              </select>

            </div>


            {(search || stream !== "All" || level !== "All" || mode !== "All") && (
              <button
                className="reset-filters"
                onClick={resetFilters}
              >
                Reset filters
              </button>
            )}

          </div>


          {/* RESULT HEADER */}
          <div className="courses-result-header">

            <div>
              <span className="courses-eyebrow">
                COURSE DIRECTORY
              </span>

              <h2>
                {filteredCourses.length} of {COURSES_DATA.length} programmes
              </h2>
            </div>

          </div>


          {/* COURSES */}
          {filteredCourses.length > 0 ? (

            <div className="courses-grid">

              {filteredCourses.map((course) => (

                <article
                  className="course-card"
                  key={course.id}
                >

                  <div className="course-card-top">

                    <span className="course-stream">
                      {course.stream}
                    </span>

                    <span className="course-number">
                      {String(course.id).padStart(2, "0")}
                    </span>

                  </div>


                  <h3>{course.title}</h3>

                  <h4>{course.fullTitle}</h4>

                  <p className="course-description">
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


                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "15px" }}>
                    {/* CHECK DETAILS BUTTON (Without background, clean black text style) */}
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

                </article>

              ))}

            </div>

          ) : (

            <div className="no-courses">

              <h3>No programmes found</h3>

              <p>
                Try changing your search or filters.
              </p>

              <button onClick={resetFilters}>
                Show all programmes
              </button>

            </div>

          )}

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