function Mission() {
  const milestones = [
    {
      year: "1995",
      title: "The beginning",
      text: "RK Convent School Educational Society was formed in New Delhi with a vision to spread literacy and professional education.",
    },
    {
      year: "1997",
      title: "RKCSM established",
      text: "R. K. College of Systems & Management was established in New Delhi, beginning the group's journey in professional education.",
    },
    {
      year: "2002",
      title: "Legal education",
      text: "R. K. College of Law was established in Firozabad, expanding the group's academic reach.",
    },
    {
      year: "2010+",
      title: "Growing the vision",
      text: "The group continued expanding its educational initiatives across professional education, media, design and other emerging fields.",
    },
  ];

  return (
    <section className="mission-section" id="legacy">
      <div className="container">

        <div className="mission-content">

          {/* LEFT SIDE */}
          <div className="mission-main">

            <span>OUR LEGACY</span>

            <h2>
              30 years of shaping
              <br />
              <strong>India's future.</strong>
            </h2>

            <div className="mission-rule"></div>

            <p>
              From a single vision to five great institutions,
              the RK Group has spent three decades building
              opportunities through education.
            </p>

            <div className="mission-brand">
              <div className="mission-logo-mark">RK</div>

              <div>
                <strong>RKCSM Educational Society</strong>
                <span>Since 1995</span>
              </div>
            </div>

            <div className="mission-pills">
              <span>Est. 1995</span>
              <span>Professional Education</span>
              <span>New Delhi</span>
              <span>Firozabad</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="mission-cards">

            <div className="mission-story-heading">
              <span>OUR JOURNEY</span>

              <h3>
                From a single vision to
                <strong> five great institutions.</strong>
              </h3>
            </div>

            <div className="mission-timeline">

              {milestones.map((item, index) => (
                <div className="mission-card" key={item.year}>

                  <div className="mission-year">
                    {item.year}
                  </div>

                  <div className="mission-icon">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h4>{item.title}</h4>

                    <p>{item.text}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Mission;