import "./CareersPreview.css";

function CareersPreview() {
  return (
    <section className="careers-preview-section">
      <div className="container">

        <div className="careers-preview-box">

          <div className="careers-preview-content">
            <span>CAREERS AT RKCSM</span>

            <h2>
              Build your career
              <strong> with us.</strong>
            </h2>

            <p>
              Join an institution that values talent, learning and
              professional growth. Explore opportunities to work with
              the RKCSM Educational Society.
            </p>

            <div className="careers-preview-buttons">
              <a href="/careers" className="careers-primary-btn">
                Explore Careers →
              </a>

              <a href="/contact" className="careers-secondary-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="careers-preview-info">

            <div className="career-info-item">
              <span>01</span>
              <div>
                <h3>Teaching</h3>
                <p>
                  Opportunities for educators and academic professionals.
                </p>
              </div>
            </div>

            <div className="career-info-item">
              <span>02</span>
              <div>
                <h3>Administration</h3>
                <p>
                  Be part of the team managing our growing institutions.
                </p>
              </div>
            </div>

            <div className="career-info-item">
              <span>03</span>
              <div>
                <h3>Professional Roles</h3>
                <p>
                  Explore roles across technology, media and operations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CareersPreview;