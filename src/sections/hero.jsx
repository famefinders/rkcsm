import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badges">
            <span>Est. 1995</span>
            <span>UGC Approved</span>
            <span>NAAC</span>
            <span>BCI Approved</span>
            <span>NCTE</span>
          </div>

          <h1>
            One Group.
            <br />
            Five Institutions.
            <br />
            <span>Infinite Futures.</span>
          </h1>

          <p>
            R. K. C. S. Educational Society has been committed to
            providing quality and professional education since 1995,
            helping students build successful careers and brighter futures.
          </p>

          <div className="hero-motto">
            विद्या धनम् सर्वधनम् प्रधानम्
          </div>

          <div className="hero-buttons">

            <Link
              to="/apply"
              className="hero-primary-btn"
            >
              Apply for Admission →
            </Link>

            <a
              href="https://wa.me/"
              className="hero-whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>

            <Link
              to="/courses"
              className="hero-secondary-btn"
            >
              Browse Courses
            </Link>

          </div>

          <div className="hero-trust">

            <div>
              <strong>✓</strong>
              <span>Professional Education</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Career Focused</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Since 1995</span>
            </div>

          </div>

        </div>


        {/* RIGHT OVERVIEW */}
        <div className="hero-overview">

          <div className="overview-heading">
            <span>RK GROUP</span>
            <h2>Our Journey</h2>
          </div>

          <div className="overview-stats">

            <div className="overview-stat">
              <strong>30+</strong>
              <span>Years of Excellence</span>
            </div>

            <div className="overview-stat">
              <strong>5</strong>
              <span>Institutions</span>
            </div>

            <div className="overview-stat">
              <strong>20+</strong>
              <span>Programmes</span>
            </div>

            <div className="overview-stat">
              <strong>500+</strong>
              <span>Students</span>
            </div>

          </div>

          <div className="institution-list">

            <div>R. K. College of Systems & Management</div>

            <div>R. K. College of Law</div>

            <div>R. K. Films & Media Academy</div>

            <div>R. K. Academy of Art & Design</div>

            <div>R. K. Sports Academy</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;