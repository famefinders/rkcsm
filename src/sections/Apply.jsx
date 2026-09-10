import { useState } from "react";
import { COURSES } from "../data/courses";
import "./Apply.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://rkcsm.onrender.com";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
          result.message || "Unable to submit your application."
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
      console.error("Application submission failed:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    }
  };

  return (
    <main className="apply-page">
      {/* Application Form */}
      <section className="apply-form-section">
        <div className="apply-container apply-form-layout">
          <div className="apply-form-intro">
            <span className="apply-eyebrow">
              APPLICATION FORM
            </span>

            <h1>
              Tell us what
              <br />
              you're looking for.
            </h1>

            <p>
              Complete the form with your details and select the
              programme you want to apply for. Our admissions team
              will contact you with the next steps.
            </p>

            <div className="apply-contact-note">
              <span>NEED HELP?</span>

              <strong>
                Speak with our admissions team.
              </strong>

              <a href="mailto:info@rkfma.com">
                info@rkfma.com
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="apply-success">
              <div className="apply-success-icon">✓</div>

              <h2>Application received!</h2>

              <p>
                Thank you for your interest in RKCSM. Our
                admissions team will get in touch with you
                shortly.
              </p>

              <button
                type="button"
                className="apply-submit"
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
              >
                Submit another application
                <span>→</span>
              </button>
            </div>
          ) : (
            <form
              className="apply-form"
              onSubmit={handleSubmit}
            >
              <div className="apply-form-field">
                <label htmlFor="apply-name">
                  Full name
                </label>

                <input
                  id="apply-name"
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

              <div className="apply-form-row">
                <div className="apply-form-field">
                  <label htmlFor="apply-phone">
                    Phone
                  </label>

                  <input
                    id="apply-phone"
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

                <div className="apply-form-field">
                  <label htmlFor="apply-email">
                    Email
                  </label>

                  <input
                    id="apply-email"
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

              <div className="apply-form-field">
                <label htmlFor="apply-course">
                  Course of interest
                </label>

                <select
                  id="apply-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a course
                  </option>

                  {COURSES.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="apply-form-field">
                <label htmlFor="apply-message">
                  Message <span>(optional)</span>
                </label>

                <textarea
                  id="apply-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us anything you'd like to know..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="1000"
                ></textarea>
              </div>

              {error && (
                <div
                  className="apply-error"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="apply-submit"
              >
                Submit application
                <span>→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="apply-bottom">
        <div className="apply-container">
          <div className="apply-bottom-content">
            <span className="apply-eyebrow">
              HAVE QUESTIONS?
            </span>

            <h2>We're here to help.</h2>

            <p>
              Get in touch with the team for programme,
              eligibility and admission-related queries.
            </p>

            <a
              href="mailto:info@rkfma.com"
              className="apply-email-button"
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

export default Apply;