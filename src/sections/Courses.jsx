import { useMemo, useState } from "react";
import "./Courses.css";

const courses = [
  {
    id: 1,
    stream: "Computer Science & IT",
    level: "Undergraduate",
    mode: "Full-time",
    title: "BCA",
    fullTitle: "Bachelor of Computer Applications",
    duration: "3 years",
    eligibility: "10+2 any stream with Mathematics preferred",
    description:
      "Programming, data structures, databases and web development with lab-first teaching.",
    highlights: [
      "Six dedicated computer labs",
      "Industry mini-projects each semester",
      "Placement preparation from year two",
    ],
  },
  {
    id: 2,
    stream: "Computer Science & IT",
    level: "Undergraduate",
    mode: "Full-time",
    title: "B.Sc. (IT)",
    fullTitle: "Bachelor of Science in Information Technology",
    duration: "3 years",
    eligibility: "10+2 with Science / Mathematics",
    description:
      "A science-led IT degree covering networks, systems and applied software engineering.",
    highlights: [
      "Networking and systems labs",
      "Open-source tooling",
      "Research-oriented final year",
    ],
  },
  {
    id: 3,
    stream: "Computer Science & IT",
    level: "Postgraduate",
    mode: "Full-time",
    title: "MCA",
    fullTitle: "Master of Computer Applications",
    duration: "2 years",
    eligibility:
      "Bachelor's degree with Mathematics at 10+2 or graduation level",
    description:
      "Advanced software engineering, cloud and data systems with a capstone industry project.",
    highlights: [
      "Capstone with industry mentor",
      "Cloud / DevOps electives",
      "Interview coaching",
    ],
  },
  {
    id: 4,
    stream: "Computer Science & IT",
    level: "Diploma",
    mode: "Part-time / Weekend",
    title: "PGDCA",
    fullTitle: "Post Graduate Diploma in Computer Applications",
    duration: "1 year",
    eligibility: "Any graduate",
    description:
      "A fast, practical conversion course for graduates moving into IT roles.",
    highlights: [
      "Weekend batches",
      "Office automation to programming",
      "Portfolio of five projects",
    ],
  },

  {
    id: 5,
    stream: "Mass Communication",
    level: "Undergraduate",
    mode: "Full-time",
    title: "BJMC",
    fullTitle: "Bachelor of Journalism & Mass Communication",
    duration: "3 years",
    eligibility: "10+2 any stream",
    description:
      "Reporting, editing, media law and production across print, broadcast and digital.",
    highlights: [
      "In-house studio and edit suites",
      "Campus newsroom",
      "Internships with media houses",
    ],
  },
  {
    id: 6,
    stream: "Mass Communication",
    level: "Postgraduate",
    mode: "Full-time",
    title: "MJMC",
    fullTitle: "Master of Journalism & Mass Communication",
    duration: "2 years",
    eligibility: "Graduate in any discipline",
    description:
      "Specialised training in investigative reporting, media research and digital storytelling.",
    highlights: [
      "Documentary production",
      "Media research methods",
      "Guest faculty from newsrooms",
    ],
  },
  {
    id: 7,
    stream: "Mass Communication",
    level: "Diploma",
    mode: "Part-time / Weekend",
    title: "PG Diploma in Journalism",
    fullTitle: "Post Graduate Diploma in Journalism",
    duration: "1 year",
    eligibility: "Any graduate",
    description:
      "Evening and weekend track for working professionals entering media.",
    highlights: [
      "Weekend intensives",
      "Editing, camera and direction modules",
      "Live assignments",
    ],
  },

  {
    id: 8,
    stream: "Management",
    level: "Undergraduate",
    mode: "Full-time",
    title: "BBA",
    fullTitle: "Bachelor of Business Administration",
    duration: "3 years",
    eligibility: "10+2 any stream",
    description:
      "Business fundamentals with case-based learning in marketing, finance and operations.",
    highlights: [
      "Live case studies",
      "Summer internship",
      "Business communication lab",
    ],
  },
  {
    id: 9,
    stream: "Management",
    level: "Postgraduate",
    mode: "Part-time / Weekend",
    title: "MBA",
    fullTitle: "Master of Business Administration",
    duration: "2 years",
    eligibility: "Graduate in any discipline",
    description:
      "Weekend MBA designed for working professionals, with specialisation tracks.",
    highlights: [
      "Marketing / HR / Finance specialisations",
      "Working-professional cohort",
      "Capstone consulting project",
    ],
  },

  {
    id: 10,
    stream: "Teacher Training & Law",
    level: "Undergraduate",
    mode: "Full-time",
    title: "B.Ed.",
    fullTitle: "Bachelor of Education",
    duration: "2 years",
    eligibility: "Graduate with minimum qualifying marks",
    description:
      "Teacher preparation with supervised classroom practice in partner schools.",
    highlights: [
      "School internship blocks",
      "Pedagogy workshops",
      "Micro-teaching labs",
    ],
  },
  {
    id: 11,
    stream: "Teacher Training & Law",
    level: "Undergraduate",
    mode: "Full-time",
    title: "BA.LLB",
    fullTitle: "Bachelor of Arts & Bachelor of Laws",
    duration: "5 years",
    eligibility: "10+2 any stream",
    description:
      "Integrated law programme combining humanities with core legal training.",
    highlights: [
      "Moot court",
      "Legal aid clinic",
      "Court visits / internships",
    ],
  },
  {
    id: 12,
    stream: "Teacher Training & Law",
    level: "Undergraduate",
    mode: "Full-time",
    title: "LLB",
    fullTitle: "Bachelor of Laws",
    duration: "3 years",
    eligibility: "Any graduate",
    description:
      "Professional law degree with practice-oriented drafting and advocacy training.",
    highlights: [
      "Drafting and pleading workshops",
      "Advocacy training",
      "Internship support",
    ],
  },
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [stream, setStream] = useState("All");
  const [level, setLevel] = useState("All");
  const [mode, setMode] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
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

      {/* HERO */}
      <section className="courses-hero">
        <div className="courses-container">
          <div className="courses-hero-content">

            <span className="courses-eyebrow">
              OUR PROGRAMMES
            </span>

            <h1>
              Find the programme
              <br />
              that fits your future
            </h1>

            <p>
              Explore our undergraduate, postgraduate and diploma
              programmes across computing, media, management,
              teacher training and law.
            </p>

          </div>
        </div>
      </section>


      {/* COURSE EXPLORER */}
      <section className="courses-explorer">

        <div className="courses-container">

          {/* SEARCH */}
          <div className="course-search-box">

            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search courses, e.g. journalism, MCA, weekend"
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
                {filteredCourses.length} of {courses.length} programmes
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


                  <a
                    href={`/admissions?course=${encodeURIComponent(
                      `${course.title} — ${course.fullTitle}`
                    )}`}
                    className="course-enquiry"
                  >
                    Enquire about this course
                    <span>→</span>
                  </a>

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
      <section className="courses-cta">

        <div className="courses-container">

          <div className="courses-cta-content">

            <span className="courses-eyebrow">
              NEED HELP?
            </span>

            <h2>
              Not sure which programme
              is right for you?
            </h2>

            <p>
              Speak with our admissions team and get guidance
              based on your education and career goals.
            </p>

            <a
              href="/admissions"
              className="courses-cta-button"
            >
              Talk to admissions
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Courses;