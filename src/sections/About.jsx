import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

const About = () => {
  useScrollReveal();

  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero reveal-on-scroll">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-eyebrow">ABOUT US</span>

            <h1>Three decades of<br />building careers</h1>

            <p>
              R. K. C. Educational Society has been working in the field of
              professional education since 1995, helping students build the
              knowledge, skills and confidence needed for their careers.
            </p>
          </div>
        </div>
      </section>


      {/* ABOUT SOCIETY */}
      <section className="about-story section-space reveal-on-scroll">
        <div className="about-container about-two-column">

          <div className="about-section-title">
            <span className="about-eyebrow">ABOUT SOCIETY</span>
            <h2>Education with a purpose</h2>
          </div>

          <div className="about-story-text">
            <p>
              R. K. Convent School Educational Society was formed in 1995
              in New Delhi and is registered under the Societies Registration
              Act, 1860.
            </p>

            <p>
              The Society is a no-profit/no-loss body with the objective of
              spreading literacy nationwide. Since its inception, the Society
              has worked towards establishing recognised and professional
              educational institutions in New Delhi and Uttar Pradesh.
            </p>

            <p>
              Over the years, its educational initiatives have expanded to
              include institutions focused on computer applications, information
              technology, media, journalism, management, films and television
              studies, teacher education and law.
            </p>
          </div>

        </div>
      </section>


      {/* INSTITUTES & UNITS */}
      <section className="about-reach reveal-on-scroll">
        <div className="about-container">

          <div className="about-reach-heading">
            <span className="about-eyebrow">INSTITUTES & UNITS</span>
            <h2>Our Specialized Colleges & Units</h2>
          </div>

          <div className="about-reach-grid">

            <div className="about-reach-card">
              <div className="reach-number">01</div>
              <h3>Law College</h3>
              <p>
                Providing comprehensive legal education including LLB (3 Years) and BA.LLB (5 Years) approved by BCI.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">02</div>
              <h3>UG College</h3>
              <p>
                Offering undergraduate degree programmes like B.Com focused on commerce and professional skills.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">03</div>
              <h3>Teachers Training</h3>
              <p>
                Dedicated teacher education programmes including B.Ed and D.El.Ed approved by NCTE.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">04</div>
              <h3>Sports Academy</h3>
              <p>
                Promoting physical education, sports training, annual tournaments, and athletic development.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">05</div>
              <h3>K-12 School</h3>
              <p>
                English medium school framework laying a strong foundational education for young minds.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* OFFICE BEARERS */}
      <section className="about-development section-space reveal-on-scroll">
        <div className="about-container about-two-column">

          <div className="about-section-title">
            <span className="about-eyebrow">OFFICE BEARERS</span>
            <h2>Leadership & Administration</h2>
          </div>

          <div className="about-development-content">
            <p>
              Our management and staff members bring decades of academic expertise, institutional governance, and administrative dedication to ensure educational excellence.
            </p>
            <div className="development-list">
              <div className="development-item">
                <span>👤</span>
                <div>
                  <h3>Management Committee</h3>
                  <p>Guiding the institutional vision with transparent leadership and strategic planning.</p>
                </div>
              </div>
              <div className="development-item">
                <span>🎓</span>
                <div>
                  <h3>Academic Directors & Principals</h3>
                  <p>Overseeing curriculum delivery, student discipline, and faculty mentorship.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* CAMPUS LOCATION */}
      <section className="about-reach reveal-on-scroll">
        <div className="about-container">

          <div className="about-reach-heading">
            <span className="about-eyebrow">CAMPUS LOCATION</span>
            <h2>Our Campuses in New Delhi & Firozabad</h2>
          </div>

          <div className="about-reach-grid">

            <div className="about-reach-card">
              <div className="reach-number">01</div>
              <h3>New Delhi Campuses</h3>
              <p>
                Offering specialized programmes in Computer Applications, IT, Media Technologies, Mass Communication, and Management.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">02</div>
              <h3>Firozabad Campuses (Uttar Pradesh)</h3>
              <p>
                Equipped with sprawling green lawns, modern smart classrooms, moot court rooms, science labs, and a central library.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">03</div>
              <h3>Infrastructure</h3>
              <p>
                Purpose-built facilities designed to foster holistic student growth and professional readiness.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ALL ROUND DEVELOPMENT */}
      <section className="about-development section-space reveal-on-scroll">
        <div className="about-container about-two-column">

          <div className="about-section-title">
            <span className="about-eyebrow">BEYOND THE CLASSROOM</span>
            <h2>All-round development, not just marks</h2>
          </div>

          <div className="about-development-content">

            <p>
              Education is more than examinations. Our approach encourages
              students to participate in activities that help develop
              confidence, communication, creativity and a sense of
              responsibility.
            </p>

            <div className="development-list">

              <div className="development-item">
                <span>01</span>
                <div>
                  <h3>Debates & Discussions</h3>
                  <p>
                    Opportunities to develop communication skills and
                    independent thinking.
                  </p>
                </div>
              </div>

              <div className="development-item">
                <span>02</span>
                <div>
                  <h3>Sports & Activities</h3>
                  <p>
                    Encouraging participation, discipline and teamwork
                    beyond academics.
                  </p>
                </div>
              </div>

              <div className="development-item">
                <span>03</span>
                <div>
                  <h3>Cultural Activities</h3>
                  <p>
                    Events and activities that encourage creativity and
                    confidence.
                  </p>
                </div>
              </div>

              <div className="development-item">
                <span>04</span>
                <div>
                  <h3>Industry Exposure</h3>
                  <p>
                    Workshops, seminars and industry-oriented exposure to
                    connect learning with professional life.
                  </p>
                </div>
              </div>

              <div className="development-item">
                <span>05</span>
                <div>
                  <h3>Community Work</h3>
                  <p>
                    Encouraging students to become responsible members of
                    society.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* OUR MISSION & MOTTO */}
      <section className="about-mission reveal-on-scroll">
        <div className="about-container">

          <div className="mission-box">

            <span className="about-eyebrow">OUR MISSION & MOTTO</span>

            <blockquote>
              “We are committed to give our students quality & professional
              education to help them chart their own success stories not only
              as successful professionals in their respective fields but also
              as good human beings & responsible citizens.”
            </blockquote>

            <div className="mission-line"></div>

            <p className="mission-motto-text"><strong>Motto:</strong> विद्या धनम् सर्वधनम् प्रधानम्</p>
            <p>R. K. C. Educational Society</p>

          </div>

        </div>
      </section>


     {/* DONATIONS & 80G SUPPORT */}
      <section className="about-donations section-space reveal-on-scroll">
        <div className="about-container about-two-column">

          <div className="about-section-title">
            <span className="about-eyebrow">MAKE DONATIONS — 80G</span>
            <h2>Support our educational mission</h2>
          </div>

          <div className="about-story-text">
            <p>
              R. K. C. Educational Society welcomes contributions and voluntary donations 
              to help expand our literacy programmes, student scholarships, and campus facilities.
            </p>
            <p>
              All contributions made to the Society are eligible for tax deductions under 
              <strong> Section 80G of the Income Tax Act</strong>. 
            </p>
            <p>
              If you wish to contribute or support our infrastructure development, please reach out 
              to our administrative desk or email us for bank transfer and receipt guidelines.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link to="/contact" className="about-cta-button" style={{ display: "inline-block", textDecoration: "none" }}>
                Contact for Donations <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal-on-scroll">
        <div className="about-container">

          <div className="about-cta-content">
            <span className="about-eyebrow">START YOUR JOURNEY</span>

            <h2>Ready to explore your options?</h2>

            <p>
              Explore our programmes and find the course that fits your
              career goals.
            </p>

            <Link to="/courses" className="about-cta-button">
              Explore courses <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;