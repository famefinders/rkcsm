import "./About.css";
const About = () => {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">
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


      {/* OUR STORY */}
      <section className="about-story section-space">
        <div className="about-container about-two-column">

          <div className="about-section-title">
            <span className="about-eyebrow">OUR STORY</span>
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


      {/* REACH */}
      <section className="about-reach">
        <div className="about-container">

          <div className="about-reach-heading">
            <span className="about-eyebrow">OUR REACH</span>
            <h2>Growing with every generation</h2>
          </div>

          <div className="about-reach-grid">

            <div className="about-reach-card">
              <div className="reach-number">01</div>
              <h3>New Delhi</h3>
              <p>
                Our New Delhi campuses offer programmes in Computer
                Applications, Information Technology, Media Technologies,
                Mass Communication & Journalism, Management and Films &
                Television Studies.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">02</div>
              <h3>Firozabad</h3>
              <p>
                Our Firozabad institutions provide professional education
                supported by classrooms, library facilities, computer labs,
                auditorium and other campus facilities.
              </p>
            </div>

            <div className="about-reach-card">
              <div className="reach-number">03</div>
              <h3>Professional Education</h3>
              <p>
                The Society continues to focus on quality and professional
                education that prepares students for their respective fields.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TIMELINE SECTION ================= */}
      <section className="about-timeline-section section-space">
        <div className="about-container">
          <div className="about-timeline-header">
            <span className="about-eyebrow">OUR LEGACY & JOURNEY</span>
            <h2>Decades of growth, <br />milestone by milestone.</h2>
            <p>From a single school in 1995 to a multi-campus educational group spanning professional studies, law, and media.</p>
          </div>

          <div className="timeline-image-wrapper">
            <img 
              src="/images/timeline.jpg" 
              alt="RK Group Timeline Journey from 1995 to 2019" 
              className="timeline-graphic-img"
            />
          </div>
        </div>
      </section>


      {/* ALL ROUND DEVELOPMENT */}
      <section className="about-development section-space">
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


      {/* PURPOSE CARDS */}
      <section className="about-purpose">
        <div className="about-container">

          <div className="about-purpose-heading">
            <span className="about-eyebrow">WHAT DRIVES US</span>
            <h2>Our purpose, standards and support</h2>
          </div>

          <div className="purpose-grid">

            <div className="purpose-card">
              <span>01</span>
              <h3>Purpose</h3>
              <p>
                To contribute towards spreading literacy and creating
                opportunities for professional education.
              </p>
            </div>

            <div className="purpose-card">
              <span>02</span>
              <h3>Standards</h3>
              <p>
                To provide quality and professional education through
                structured academic programmes and learning facilities.
              </p>
            </div>

            <div className="purpose-card">
              <span>03</span>
              <h3>Support</h3>
              <p>
                Career counselling, workshops and seminars help students
                understand opportunities beyond the classroom.
              </p>
            </div>

            <div className="purpose-card">
              <span>04</span>
              <h3>Reach</h3>
              <p>
                Educational institutions and programmes across New Delhi
                and Firozabad in Uttar Pradesh.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* MISSION */}
      <section className="about-mission">
        <div className="about-container">

          <div className="mission-box">

            <span className="about-eyebrow">OUR MISSION</span>

            <blockquote>
              “We are committed to give our students quality & professional
              education to help them chart their own success stories not only
              as successful professionals in their respective fields but also
              as good human beings & responsible citizens.”
            </blockquote>

            <div className="mission-line"></div>

            <p>R. K. C. Educational Society</p>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">

          <div className="about-cta-content">
            <span className="about-eyebrow">START YOUR JOURNEY</span>

            <h2>Ready to explore your options?</h2>

            <p>
              Explore our programmes and find the course that fits your
              career goals.
            </p>

            <a href="/courses" className="about-cta-button">
              Explore courses <span>→</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;