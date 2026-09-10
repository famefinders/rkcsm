import "./Learning.css";
function Learning() {
  const features = [
    {
      number: "01",
      title: "Practical Learning",
      text: "Go beyond classroom theory with learning experiences designed around practical knowledge and professional skills.",
    },
    {
      number: "02",
      title: "Modern Facilities",
      text: "Access computer labs, media facilities, library resources and learning environments that support your academic journey.",
    },
    {
      number: "03",
      title: "Career Preparation",
      text: "Develop professional confidence through workshops, seminars, counselling and career-focused learning opportunities.",
    },
  ];

  return (
    <section className="learning-section">
      <div className="container">

        <div className="learning-top">

          <div>
            <span>Learn & Grow</span>

            <h2>
              Education that prepares
              <strong> you for the real world.</strong>
            </h2>
          </div>

          <p>
            At RKCSM, learning is focused not only on academic knowledge
            but also on helping students develop professional skills and
            confidence for their future.
          </p>

        </div>

        <div className="learning-grid">

          {features.map((feature) => (
            <div className="learning-card" key={feature.number}>

              <span className="learning-number">
                {feature.number}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Learning;