import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Recognitions.css";

const recognitionItems = [
  {
    title: "Bar Council of India (BCI)",
    desc: "Approved for conducting professional law programmes including LLB and BA.LLB courses.",
    badge: "Law Approval"
  },
  {
    title: "National Council for Teacher Education (NCTE)",
    desc: "Recognised for quality teacher training education programmes like B.Ed and D.El.Ed.",
    badge: "Teacher Education"
  },
  {
    title: "Dr. B. R. Ambedkar Agra University",
    desc: "Affiliated for academic curriculum, examinations, and degree conferment across programmes.",
    badge: "University Affiliation"
  },
  {
    title: "SCERT Uttar Pradesh",
    desc: "Approved and governed under State Council of Educational Research and Training guidelines.",
    badge: "State Council"
  },
  {
    title: "UP Higher Education",
    desc: "Compliant with Uttar Pradesh Higher Education Department standards and frameworks.",
    badge: "State Higher Edu"
  },
  {
    title: "NAAC Accredited",
    desc: "Committed to maintaining institutional quality, academic standards, and continuous evaluation.",
    badge: "Quality Accreditation"
  },
  {
    title: "DIET Admission",
    desc: "Associated with District Institute of Education and Training training guidelines.",
    badge: "Training Institute"
  },
  {
    title: "UGC 2(f) & 12(B)",
    desc: "Recognized under University Grants Commission statutory provisions and development grants.",
    badge: "UGC Statutory"
  },
  {
    title: "Basic Education Department",
    desc: "Aligned with elementary and basic educational framework standards in Uttar Pradesh.",
    badge: "Basic Education"
  }
];

const Recognitions = () => {
  useScrollReveal();

  return (
    <main className="recognitions-page">

      {/* HERO SECTION */}
      <section className="recognitions-hero reveal-on-scroll">
        <div className="recognitions-container">
          <span className="recognitions-eyebrow">APPROVALS & ACCREDITATIONS</span>
          <h1>Recognised for Quality & Standards</h1>
          <p>
            Our institutions operate under statutory approvals, university affiliations,
            and accreditations from premier national and state educational bodies.
          </p>
        </div>
      </section>

      {/* RECOGNITIONS GRID */}
      <section className="recognitions-main section-space reveal-on-scroll">
        <div className="recognitions-container">
          
          <div className="recognitions-heading">
            <span className="recognitions-eyebrow">STATUTORY BODIES</span>
            <h2>Our Affiliations & Approvals</h2>
            <p>Complete transparency regarding our institutional recognitions and legal accreditations.</p>
          </div>

          <div className="recognitions-grid">
            {recognitionItems.map((item, index) => (
              <div className="recognition-card" key={index}>
                <div className="card-top-row">
                  <span className="rec-badge">{item.badge}</span>
                  <span className="rec-num">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="recognitions-cta reveal-on-scroll">
        <div className="recognitions-container">
          <div className="recognitions-cta-box">
            <span className="recognitions-eyebrow">HAVE QUESTIONS?</span>
            <h2>Need more details on our admissions & eligibility?</h2>
            <p>Our admissions desk is ready to help you with course guidelines, fee structures, and admission processes.</p>
            <Link to="/contact" className="recognitions-btn">
              Contact Admissions Desk →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Recognitions;