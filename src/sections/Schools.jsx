import { Link } from "react-router-dom";
import "./Schools.css";

function Schools() {
  const institutions = [
    {
      number: "01",
      title: "R. K. College of Systems & Management",
      location: "Firozabad",
      short: "Systems & Management",
      text: "Professional programmes in commerce, education and computer applications with a focus on career-oriented learning.",
      courses: ["B.Com", "B.Ed", "D.El.Ed"],
      cardClass: "card-maroon",
    },
    {
      number: "02",
      title: "R. K. College of Law",
      location: "Firozabad",
      short: "Law & Legal Studies",
      text: "Professional legal education designed to develop strong foundations in law, advocacy and legal practice.",
      courses: ["BA.LLB", "LLB"],
      cardClass: "card-dark-red",
    },
    {
      number: "03",
      title: "R. K. Films & Media Academy",
      location: "New Delhi",
      short: "Films & Media",
      text: "Media and communication education covering journalism, films, television and modern digital media.",
      courses: ["Mass Communication", "Film & TV", "Digital Media"],
      cardClass: "card-blue",
    },
    {
      number: "04",
      title: "R. K. Academy of Art & Design",
      location: "New Delhi",
      short: "Art & Design",
      text: "Creative education across design and visual arts for students looking to build careers in the creative industry.",
      courses: ["Fashion", "Interior", "Fine Arts"],
      cardClass: "card-purple",
    },
    {
      number: "05",
      title: "R. K. Sports Academy",
      location: "New Delhi",
      short: "Sports & Development",
      text: "A platform focused on sports, physical development and opportunities for students with sporting interests.",
      courses: ["Sports & Physical Development"],
      cardClass: "card-green",
    },
  ];

  return (
    <section className="schools-section">
      <div className="schools-container">

        {/* =========================================
            SECTION INTRO
        ========================================= */}

        <div className="schools-intro">

          <div className="schools-intro-left">
            <span className="schools-kicker">
              OUR INSTITUTIONS
            </span>

            <div className="schools-title-row">
              <span className="schools-title-index">
                01
              </span>

              <h2>
                One group.
                <br />
                <em>Many possibilities.</em>
              </h2>
            </div>
          </div>

          <div className="schools-intro-right">
            <p>
              Five institutions. Different disciplines.
              One shared commitment to helping students
              learn, grow and build meaningful futures.
            </p>

            <div className="schools-intro-line">
              <span></span>
              <small>RK GROUP / EDUCATION</small>
            </div>
          </div>

        </div>


        {/* =========================================
            INSTITUTION GRID
        ========================================= */}

        <div className="schools-grid">

          {institutions.map((institution) => (
            <article
              className={`school-card ${institution.cardClass}`}
              key={institution.number}
            >

              <div className="school-card-accent"></div>

              <div className="school-card-header">

                <span className="school-number">
                  {institution.number}
                </span>

                <span className="school-location">
                  {institution.location}
                </span>

              </div>


              <div className="school-card-content">

                <span className="school-category">
                  {institution.short}
                </span>

                <h3>
                  {institution.title}
                </h3>

                <p>
                  {institution.text}
                </p>

              </div>


              <div className="school-card-footer">

                <div className="school-courses">
                  {institution.courses.map((course) => (
                    <span key={course}>
                      {course}
                    </span>
                  ))}
                </div>

                <Link
                  to="/courses"
                  className="school-link"
                  aria-label={`Explore programmes at ${institution.title}`}
                >
                  <span>Explore programmes</span>
                  <b>↗</b>
                </Link>

              </div>

            </article>
          ))}


          {/* =========================================
              FEATURE / CTA CARD (Golden/Yellow Theme)
          ========================================= */}

          <article className="schools-feature-card card-gold">

            <div className="feature-top">

              <span className="feature-index">
                06
              </span>

              <span className="feature-label">
                OUR LEGACY
              </span>

            </div>

            <div className="feature-content">

              <span className="feature-number">
                30<span>+</span>
              </span>

              <h3>
                Years of
                <br />
                academic trust.
              </h3>

              <p>
                Since 1995, the RK Group has worked towards
                providing quality and professional education
                to students.
              </p>

            </div>

            <Link
              to="/about"
              className="feature-link"
            >
              <span>Discover our story</span>
              <b>↗</b>
            </Link>

          </article>

        </div>


        {/* =========================================
            BOTTOM NOTE
        ========================================= */}

        <div className="schools-bottom">

          <span>
            RK GROUP
          </span>

          <p>
            Education across management, law, media,
            design and sports.
          </p>

          <Link to="/courses">
            View all programmes
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Schools;