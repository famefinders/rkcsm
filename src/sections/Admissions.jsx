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