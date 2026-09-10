import { Link } from "react-router-dom";
import "./Schools.css";

function Schools() {
  const institutions = [
    {
      number: "01",
      title: "R. K. College of Systems & Management",
      location: "Firozabad",
      text: "Professional programmes in commerce, education and computer applications with a focus on career-oriented learning.",
      courses: "B.Com • B.Ed • D.El.Ed",
    },
    {
      number: "02",
      title: "R. K. College of Law",
      location: "Firozabad",
      text: "Professional legal education designed to develop strong foundations in law, advocacy and legal practice.",
      courses: "BA.LLB • LLB",
    },
    {
      number: "03",
      title: "R. K. Films & Media Academy",
      location: "New Delhi",
      text: "Media and communication education covering journalism, films, television and modern digital media.",
      courses: "Mass Communication • Film & TV • Digital Media",
    },
    {
      number: "04",
      title: "R. K. Academy of Art & Design",
      location: "New Delhi",
      text: "Creative education across design and visual arts for students looking to build careers in the creative industry.",
      courses: "Fashion • Interior • Fine Arts",
    },
    {
      number: "05",
      title: "R. K. Sports Academy",
      location: "New Delhi",
      text: "A platform focused on sports, physical development and opportunities for students with sporting interests.",
      courses: "Sports & Physical Development",
    },
  ];

  return (
    <section className="schools-section">
      <div className="schools-container">

        {/* HEADING */}
        <div className="schools-heading">

          <div className="section-label">
            OUR INSTITUTIONS
          </div>

          <h2>
            One group.
            <br />
            <span>Five institutions.</span>
          </h2>

          <p>
            A group of educational institutions bringing together
            professional education, technology, law, media, design
            and sports.
          </p>

        </div>


        {/* INSTITUTION CARDS */}
        <div className="schools-grid">

          {institutions.map((institution) => (
            <div
              className="school-card"
              key={institution.number}
            >

              <div className="school-card-top">

                <span className="school-number">
                  {institution.number}
                </span>

                <span className="school-location">
                  {institution.location}
                </span>

              </div>

              <h3>
                {institution.title}
              </h3>

              <p>
                {institution.text}
              </p>

              <div className="school-courses">
                {institution.courses}
              </div>

              <Link
                to="/courses"
                className="school-link"
              >
                Explore programmes →
              </Link>

            </div>
          ))}


          {/* CTA CARD */}
          <div className="schools-cta">

            <div className="cta-number">
              30+
            </div>

            <h3>
              Years of academic trust
            </h3>

            <p>
              Since 1995, the RK Group has worked towards
              providing quality and professional education
              to students.
            </p>

            <Link
              to="/about"
              className="cta-link"
            >
              Discover our story →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Schools;