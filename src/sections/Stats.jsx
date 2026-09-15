import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "30+",
      label: "Years of teaching",
    },
    {
      number: "12",
      label: "Degree & diploma programmes",
    },
    {
      number: "2",
      label: "Campuses: Delhi & Firozabad",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;