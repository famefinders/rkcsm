import "./AlumniPreview.css";

function AlumniPreview() {
  return (
    <section className="alumni-section">
      <div className="container">

        <div className="alumni-heading">
          <div>
            <span>Our Alumni</span>
            <h2>
              Learning that stays with you
              <strong> for life.</strong>
            </h2>
          </div>

          <a href="/alumni" className="alumni-view-btn">
            Meet Our Alumni →
          </a>
        </div>

        <div className="alumni-content">

          <div className="alumni-quote">
            <div className="quote-mark">“</div>

            <p>
              The right education is not just about earning a degree.
              It is about building confidence, developing practical skills
              and preparing yourself for the real world.
            </p>

            <div className="quote-line"></div>

            <span>
              RKCSM Educational Society
            </span>
          </div>

          <div className="alumni-points">

            <div className="alumni-point">
              <span className="point-number">01</span>
              <div>
                <h3>Professional Learning</h3>
                <p>
                  Industry-oriented education designed to prepare students
                  for professional careers.
                </p>
              </div>
            </div>

            <div className="alumni-point">
              <span className="point-number">02</span>
              <div>
                <h3>Practical Exposure</h3>
                <p>
                  Labs, studios, workshops and activities that connect
                  classroom learning with practical experience.
                </p>
              </div>
            </div>

            <div className="alumni-point">
              <span className="point-number">03</span>
              <div>
                <h3>Career Focus</h3>
                <p>
                  Helping students develop the skills and confidence
                  required to build successful careers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AlumniPreview;