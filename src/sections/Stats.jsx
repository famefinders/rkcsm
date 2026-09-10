// function Stats() {
//   return (
//     <section className="stats-section">
//       <div className="container stats-grid">

//         <div className="stat-item">
//           <span className="stat-number">30+</span>
//           <span className="stat-label">Years of Education</span>
//         </div>

//         <div className="stat-item">
//           <span className="stat-number">4</span>
//           <span className="stat-label">Major Academic Areas</span>
//         </div>

//         <div className="stat-item">
//           <span className="stat-number">2</span>
//           <span className="stat-label">Campuses</span>
//         </div>

//         <div className="stat-item">
//           <span className="stat-number">1995</span>
//           <span className="stat-label">Society Established</span>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Stats;

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