import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Admissions.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://rkcsm.onrender.com";

const Admissions = () => {
  useScrollReveal();
  const [searchParams] = useSearchParams();

  const courseFromUrl = searchParams.get("course") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: courseFromUrl,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      course: courseFromUrl,
    }));
  }, [courseFromUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;
    const phoneRegex = /^[6-9][0-9]{9}$/;
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();
    const cleanEmail = formData.email.trim().toLowerCase();
    const cleanCourse = formData.course.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName || !cleanPhone || !cleanEmail || !cleanCourse) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!nameRegex.test(cleanName)) {
      setError("Please enter a valid name.");
      return;
    }

    if (!phoneRegex.test(cleanPhone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!cleanCourse) {
      setError("Please select a course.");
      return;
    }

    if (cleanMessage.length > 1000) {
      setError("Message cannot exceed 1000 characters.");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/admission-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: cleanName,
            phone: cleanPhone,
            email: cleanEmail,
            course: cleanCourse,
            message: cleanMessage,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(
          result.message || "Unable to submit your enquiry."
        );
        return;
      }

      setSubmitted(true);
      setError("");

      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Admission enquiry submission failed:",
        error
      );

      setError(
        "Unable to connect to the server. Please try again."
      );
    }
  };

  return (
    <main className="admissions-page">

      {/* HERO */}
      <section className="admissions-hero reveal-on-scroll">
        <div className="admissions-container">

          <div className="admissions-hero-content">

            <span className="admissions-eyebrow">
              ADMISSIONS 2026
            </span>

            <h1>
              Your next chapter
              <br />
              starts here
            </h1>

            <p>
              Take the first step towards a professional education in B.Com, B.Ed, D.El.Ed, LLB and BA.LLB.
              Send us your enquiry and our admissions team will guide you through the process.
            </p>

          </div>

        </div>
      </section>

      {/* STEPS & PROCESS */}
      <section className="admission-steps-section reveal-on-scroll">

        <div className="admissions-container">

          <div className="admissions-heading">

            <span className="admissions-eyebrow">
              ADMISSION PROCESS
            </span>

            <h2>How to secure your admission</h2>
            <p>Structured guidelines for B.Com, B.Ed, D.El.Ed, LLB, and BA.LLB programmes.</p>

          </div>

          <div className="admission-steps">

            <div className="admission-step">
              <span>01</span>
              <h3>Course Selection</h3>
              <p>Choose your preferred professional degree or teacher training programme based on eligibility.</p>
            </div>

            <div className="admission-step">
              <span>02</span>
              <h3>Counselling & Helpdesk</h3>
              <p>Connect with our admissions desk for guidance regarding university norms and seat availability.</p>
            </div>

            <div className="admission-step">
              <span>03</span>
              <h3>Document Verification</h3>
              <p>Submit academic marksheets, ID proof, and statutory certificates as required by governing bodies.</p>
            </div>

            <div className="admission-step">
              <span>04</span>
              <h3>Fee & Confirmation</h3>
              <p>Complete admission formalities and fee submission to confirm your enrollment.</p>
            </div>

          </div>

        </div>

      </section>

      {/* CAREER COUNSELLING SECTION */}
      <section className="career-counselling-section" style={{ padding: "90px 0", background: "#f7f8fa" }}>
        <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", alignItems: "center" }}>
            
            <div>
              <span style={{ color: "#d59b24", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "2px", display: "inline-block", marginBottom: "15px" }}>
                EXPERT GUIDANCE
              </span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 42px)", color: "#101b35", margin: "0 0 15px 0", lineHeight: "1.2" }}>
                Free Career Counselling & Course Guidance
              </h2>
              <p style={{ color: "#667085", fontSize: "16px", lineHeight: "1.7", margin: "0 0 25px 0" }}>
                Confused about which career path or professional course to choose after your schooling or graduation? Our experienced academic counsellors are here to help you map out your future based on your interests, skills, and industry demands.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0", display: "flex", flexDirection: "column", gap: "12px", color: "#101b35", fontWeight: "600", fontSize: "15px" }}>
                <li>✓ One-on-one session with expert counsellors</li>
                <li>✓ Detailed insights into job scopes and industry trends</li>
                <li>✓ Personalized course and scholarship recommendations</li>
              </ul>
              <a href="/contact" style={{ display: "inline-block", background: "#101b35", color: "#ffffff", padding: "14px 28px", fontWeight: "750", borderRadius: "6px", textDecoration: "none" }}>
                Book a Counselling Session →
              </a>
            </div>

            <div style={{ background: "#ffffff", padding: "40px", border: "1px solid #e4e7eb", borderRadius: "12px", boxShadow: "0 15px 30px rgba(16, 27, 53, 0.05)" }}>
              <span style={{ color: "#8b1a1a", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>QUICK ENQUIRY</span>
              <h3 style={{ fontSize: "24px", color: "#101b35", margin: "10px 0 20px 0" }}>Request a Callback</h3>
              
              <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#344054", marginBottom: "6px" }}>Full Name</label>
                  <input type="text" placeholder="Enter your full name" style={{ width: "100%", padding: "12px", border: "1px solid #d7dce4", borderRadius: "6px", fontSize: "14px" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#344054", marginBottom: "6px" }}>Phone Number</label>
                  <input type="tel" placeholder="Enter your mobile number" style={{ width: "100%", padding: "12px", border: "1px solid #d7dce4", borderRadius: "6px", fontSize: "14px" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#344054", marginBottom: "6px" }}>Interested Course</label>
                  <select style={{ width: "100%", padding: "12px", border: "1px solid #d7dce4", borderRadius: "6px", fontSize: "14px", background: "#fff" }}>
                    <option>Select Programme</option>
                    <option>Mass Communication & Journalism</option>
                    <option>Computer Science & IT</option>
                    <option>Management & Business</option>
                    <option>Law / Legal Studies</option>
                  </select>
                </div>
                <button type="submit" style={{ background: "#d59b24", color: "#101b35", border: "none", padding: "14px", fontWeight: "750", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}>
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>


      {/* PLACEMENT CELL & RECRUITERS */}
      <section className="admission-steps-section reveal-on-scroll" style={{ background: "#f7f8fa" }}>
        <div className="admissions-container">
          
          <div className="admissions-heading" style={{ maxWidth: "700px", marginBottom: "40px" }}>
            <span className="admissions-eyebrow">CAREER & PLACEMENTS</span>
            <h2>Placement Cell & Recruiters</h2>
            <p style={{ color: "#667085", marginTop: "10px" }}>
              Connecting academic excellence with corporate opportunities through dedicated career guidance, training sessions, and top-tier recruiters.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            
            <div style={{ background: "#ffffff", padding: "35px", border: "1px solid #e4e7eb", borderRadius: "10px" }}>
              <span style={{ color: "#d59b24", fontSize: "12px", fontWeight: "800", textTransform: "uppercase" }}>01 / Career Guidance</span>
              <h3 style={{ fontSize: "22px", color: "#101b35", margin: "12px 0 12px" }}>Dedicated Placement Cell</h3>
              <p style={{ color: "#667085", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                Providing students with resume building workshops, mock interviews, aptitude training, and personalized career mentoring.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "35px", border: "1px solid #e4e7eb", borderRadius: "10px" }}>
              <span style={{ color: "#d59b24", fontSize: "12px", fontWeight: "800", textTransform: "uppercase" }}>02 / Industry Connect</span>
              <h3 style={{ fontSize: "22px", color: "#101b35", margin: "12px 0 12px" }}>Corporate Recruiters</h3>
              <p style={{ color: "#667085", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                Strong network of industry partners, law firms, financial institutions, and media houses facilitating internships and final placements.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "35px", border: "1px solid #e4e7eb", borderRadius: "10px" }}>
              <span style={{ color: "#d59b24", fontSize: "12px", fontWeight: "800", textTransform: "uppercase" }}>03 / Skill Enhancement</span>
              <h3 style={{ fontSize: "22px", color: "#101b35", margin: "12px 0 12px" }}>Training & Internships</h3>
              <p style={{ color: "#667085", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                Mandatory internships and practical training programmes enabling students to gain hands-on corporate and institutional exposure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SCHOLARSHIPS & DOWNLOADS */}
      <section className="admission-resources-section reveal-on-scroll">
        <div className="admissions-container">
          <div className="resources-grid">
            
            <div className="resource-card">
              <span className="admissions-eyebrow">FINANCIAL SUPPORT</span>
              <h3>Scholarships & Concessions</h3>
              <p>
                Merit-based scholarships and financial assistance schemes are available for eligible students 
                as per government and institutional norms. Reach out to our helpdesk for details.
              </p>
            </div>

            <div className="resource-card">
              <span className="admissions-eyebrow">OFFLINE FORMS</span>
              <h3>Download Prospectus & Forms</h3>
              <p>
                Prefer offline submission? Download our official admission enquiry form or prospectus in PDF format.
              </p>
              <div className="download-links-group">
                <a href="/downloads/admission-form.pdf" download className="pdf-download-btn">
                  Download Admission Form (PDF) ↓
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="admission-form-section reveal-on-scroll">

        <div className="admissions-container admission-form-layout">

          {/* LEFT */}
          <div className="admission-form-intro">

            <span className="admissions-eyebrow">
              ONLINE APPLICATION
            </span>

            <h2>
              Tell us what
              <br />
              you're looking for.
            </h2>

            <p>
              Fill in your details and select your course of interest. Our admissions helpdesk will connect with you promptly.
            </p>

            <div className="admission-contact-note">

              <span>ADMISSIONS HELPDESK</span>

              <strong>
                Speak with our counsellors.
              </strong>

              <a href="mailto:info@rkfma.com">
                info@rkfma.com
              </a>

            </div>

          </div>

          {/* FORM / SUCCESS MESSAGE */}

          {submitted ? (

            <div className="admission-success">

              <div className="success-icon">
                ✓
              </div>

              <h3>
                Thank you!
              </h3>

              <p>
                Your admission enquiry has been received
                successfully. Our admissions team will get
                in touch with you.
              </p>

              <button
                type="button"
                className="admission-submit"
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
              >
                Send another enquiry
                <span>→</span>
              </button>

            </div>

          ) : (

            <form
              className="admission-form"
              onSubmit={handleSubmit}
            >

              <div className="form-field">

                <label htmlFor="name">
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength="2"
                  maxLength="50"
                  pattern="[A-Za-z\s.'-]+"
                  autoComplete="name"
                  required
                />

              </div>

              <div className="form-row">

                <div className="form-field">

                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    autoComplete="tel"
                    required
                  />

                </div>

                <div className="form-field">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength="100"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              <div className="form-field">

                <label htmlFor="course">
                  Course of interest
                </label>

                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a course
                  </option>

                  <option value="B.Com — Bachelor of Commerce">
                    B.Com — Bachelor of Commerce
                  </option>

                  <option value="B.Ed — Bachelor of Education">
                    B.Ed — Bachelor of Education
                  </option>

                  <option value="D.El.Ed — Diploma in Elementary Education">
                    D.El.Ed — Diploma in Elementary Education
                  </option>

                  <option value="LLB — Bachelor of Laws (3 Years)">
                    LLB — Bachelor of Laws (3 Years)
                  </option>

                  <option value="BA.LLB — Bachelor of Arts & Bachelor of Laws (5 Years)">
                    BA.LLB — Bachelor of Arts & Bachelor of Laws (5 Years)
                  </option>

                  <option value="School / K-12 Admissions">
                    School / K-12 Admissions
                  </option>

                </select>

              </div>

              <div className="form-field">

                <label htmlFor="message">
                  Message <span>(optional)</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us anything you'd like to know..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="1000"
                ></textarea>

              </div>

              {/* ERROR MESSAGE */}

              {error && (
                <div
                  style={{
                    marginBottom: "16px",
                    padding: "12px 14px",
                    background: "#fff1f1",
                    border: "1px solid #f0caca",
                    color: "#a11a1a",
                    fontSize: "13px",
                    lineHeight: "1.5",
                  }}
                  role="alert"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="admission-submit"
              >
                Submit enquiry
                <span>→</span>
              </button>

            </form>

          )}

        </div>

      </section>

      {/* BOTTOM CTA */}

      <section className="admission-bottom reveal-on-scroll">

        <div className="admissions-container">

          <div className="admission-bottom-content">

            <span className="admissions-eyebrow">
              HAVE QUESTIONS?
            </span>

            <h2>
              We're here to help.
            </h2>

            <p>
              Get in touch with the team for programme,
              eligibility and admission-related queries.
            </p>

            <a
              href="mailto:info@rkfma.com"
              className="admission-email-button"
            >
              Email admissions
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Admissions;