import "./Learning.css";

function Learning() {
  const features = [
    {
      number: "01",
      title: "Practical Learning",
      text: "Go beyond classroom theory with learning experiences designed around practical knowledge and professional skills.",
      tag: "KNOWLEDGE",
    },
    {
      number: "02",
      title: "Modern Facilities",
      text: "Access computer labs, media facilities, library resources and learning environments that support your academic journey.",
      tag: "ENVIRONMENT",
    },
    {
      number: "03",
      title: "Career Preparation",
      text: "Develop professional confidence through workshops, seminars, counselling and career-focused learning opportunities.",
      tag: "CAREER",
    },
  ];

  return (
    <section className="learning-section">
      <div className="learning-container">

        {/* =========================================
            INTRO
        ========================================= */}

        <div className="learning-intro">

          <div className="learning-intro-main">

            <div className="learning-kicker">
              <span></span>
              LEARN & GROW
            </div>

            <div className="learning-heading-row">

              <span className="learning-index">
                02
              </span>

              <h2>
                Education that
                <br />
                prepares <em>you.</em>
              </h2>

            </div>

          </div>


          <div className="learning-intro-copy">

            <p>
              At RKCSM, learning goes beyond academic knowledge.
              We focus on helping students develop practical skills,
              professional confidence and the mindset needed for
              the real world.
            </p>

            <div className="learning-copy-line">
              <span></span>
              <small>
                KNOWLEDGE / SKILLS / CONFIDENCE
              </small>
            </div>

          </div>

        </div>


        {/* =========================================
            FEATURE LIST
        ========================================= */}

        <div className="learning-features">

          {features.map((feature) => (
            <article
              className="learning-feature"
              key={feature.number}
            >

              {/* Number */}

              <div className="learning-feature-number">
                {feature.number}
              </div>


              {/* Main content */}

              <div className="learning-feature-main">

                <span className="learning-feature-tag">
                  {feature.tag}
                </span>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </div>


              {/* Arrow */}

              <div className="learning-feature-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <div className="learning-bottom">

          <div className="learning-bottom-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>
            <strong>Learn.</strong> Build your skills.
            <strong> Grow.</strong> Build your confidence.
            <strong> Lead.</strong> Build your future.
          </p>

          <span className="learning-bottom-year">
            RKCSM / 1995
          </span>

        </div>

      </div>
    </section>
  );
}

export default Learning;