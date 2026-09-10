import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background image */}
      <div className="hero-bg" aria-hidden="true"></div>

      {/* Cinematic overlays */}
      <div className="hero-overlay"></div>
      <div className="hero-overlay-gradient"></div>

      {/* Decorative elements */}
      <div className="hero-bg-number">1995</div>

      <div className="hero-frame hero-frame-top"></div>
      <div className="hero-frame hero-frame-bottom"></div>


      {/* =========================================
          MAIN HERO
      ========================================= */}

      <div className="hero-container">

        <div className="hero-content">

          {/* Brand eyebrow */}

          <div className="hero-eyebrow">

            <span className="hero-eyebrow-line"></span>

            <span>
              R. K. C. S. EDUCATIONAL SOCIETY
            </span>

          </div>


          {/* Established badge */}

          <div className="hero-established">

            <span className="hero-status-dot"></span>

            ESTABLISHED 1995

          </div>


          {/* Heading */}

          <h1>

            Education
            <br />

            <span>That Shapes</span>
            <br />

            Your Future.

          </h1>


          {/* Description */}

          <p className="hero-description">

            A legacy of quality and professional education,
            empowering students to build meaningful careers
            and brighter futures.

          </p>


          {/* Motto */}

          <div className="hero-motto">

            <span></span>

            <strong>
              विद्या धनम् सर्वधनम् प्रधानम्
            </strong>

            <span></span>

          </div>


          {/* =========================================
              BUTTONS
          ========================================= */}

          <div className="hero-actions">

            <Link
              to="/apply"
              className="hero-primary-btn"
            >

              <span>
                Apply for Admission
              </span>

              <b>↗</b>

            </Link>


            <Link
              to="/courses"
              className="hero-secondary-btn"
            >

              <span>
                Explore Courses
              </span>

              <b>→</b>

            </Link>

          </div>


          {/* Trust */}

          <div className="hero-trust">

            <div>
              <strong>30+</strong>
              <span>Years of Excellence</span>
            </div>

            <i></i>

            <div>
              <strong>05</strong>
              <span>Institutions</span>
            </div>

            <i></i>

            <div>
              <strong>20+</strong>
              <span>Programmes</span>
            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div className="hero-right">

          <div className="hero-right-top">

            <span>
              RK GROUP
            </span>

            <span>
              01 — 05
            </span>

          </div>


          <div className="hero-right-middle">

            <div className="hero-vertical-line"></div>

            <div className="hero-right-copy">

              <span>
                ONE GROUP
              </span>

              <span>
                FIVE INSTITUTIONS
              </span>

              <strong>
                INFINITE FUTURES
              </strong>

            </div>

          </div>


          <div className="hero-right-bottom">

            <span className="hero-scroll-text">
              SCROLL TO EXPLORE
            </span>

            <span className="hero-scroll">
              ↓
            </span>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM STATS
      ========================================= */}

      <div className="hero-bottom">

        <div className="hero-bottom-inner">


          <div className="hero-bottom-label">

            <span>
              01
            </span>

            <p>
              OUR LEGACY
            </p>

          </div>


          <div className="hero-bottom-stat">

            <strong>
              30<span>+</span>
            </strong>

            <p>
              Years of
              <br />
              Excellence
            </p>

          </div>


          <div className="hero-bottom-stat">

            <strong>
              05
            </strong>

            <p>
              Institutions
              <br />
              Under RK Group
            </p>

          </div>


          <div className="hero-bottom-stat">

            <strong>
              20<span>+</span>
            </strong>

            <p>
              Academic
              <br />
              Programmes
            </p>

          </div>


          <div className="hero-bottom-stat">

            <strong>
              500<span>+</span>
            </strong>

            <p>
              Students
              <br />
              & Counting
            </p>

          </div>

        </div>

      </div>


      {/* Image indicator */}

      <div className="hero-media-label">

        <span></span>

        <p>
          RKCSM / 1995
        </p>

      </div>

    </section>
  );
}

export default Hero;