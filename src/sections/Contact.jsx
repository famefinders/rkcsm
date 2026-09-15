import React, { useState } from "react";

import "./Contact.css";

/* =================================
   COMMON COURSE LIST
================================= */

const COURSES = [
  "BCA — Bachelor of Computer Applications",
  "B.Sc. (IT) — Bachelor of Science in Information Technology",
  "MCA — Master of Computer Applications",
  "PGDCA — Post Graduate Diploma in Computer Applications",
  "BJMC — Bachelor of Journalism & Mass Communication",
  "MJMC — Master of Journalism & Mass Communication",
  "PG Diploma in Journalism",
  "BBA — Bachelor of Business Administration",
  "MBA — Master of Business Administration",
  "B.Ed. — Bachelor of Education",
  "BA.LLB — Bachelor of Arts & Bachelor of Laws",
  "LLB — Bachelor of Laws",
];

/* =================================
   API BASE URL
================================= */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://rkcsm.onrender.com";

/* =================================
   CONTACT PAGE
================================= */

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  /* =================================
     HANDLE INPUT CHANGE
  ================================= */

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

  /* =================================
     CONTACT FORM SUBMIT
  ================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim().toLowerCase();
    const course = formData.course.trim();
    const message = formData.message.trim();

    /* ================= VALIDATION ================= */

    const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;
    const phoneRegex = /^[6-9][0-9]{9}$/;

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!name || !phone || !email || !course) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!nameRegex.test(name)) {
      setError("Please enter a valid name.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!COURSES.includes(course)) {
      setError("Please select a valid course.");
      return;
    }

    if (message.length > 500) {
      setError("Message must be 500 characters or less.");
      return;
    }

    /* ================= API SUBMISSION ================= */

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${API_BASE_URL}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            course,
            message,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(
          result.message ||
            "Unable to submit your enquiry. Please try again."
        );
        return;
      }

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (err) {
      console.error(
        "Contact enquiry submission failed:",
        err
      );

      setError(
        "Unable to connect to the server. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =================================
     NEW CONTACT ENQUIRY
  ================================= */

  const handleNewEnquiry = () => {
    setSubmitted(false);
    setError("");

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-label">
            CONTACT US
          </span>

          <h1>
            Talk to the team
          </h1>

          <p>
            Have a question about admissions, courses or our
            campuses? Get in touch with the RKCSM team and we
            will be happy to help.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTACT ================= */}

      <section className="contact-main">
        <div className="contact-container contact-grid">

          {/* ================= LEFT INFO ================= */}

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              We’re here to help.
            </h2>

            <p>
              Whether you are a prospective student, parent,
              alumnus or professional looking to connect with
              us, reach out to our team.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <a href="mailto:info@rkfma.com">
                    info@rkfma.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  ⌂
                </div>

                <div>
                  <span>
                    Campuses
                  </span>

                  <p>
                    New Delhi & Firozabad
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="contact-form-card">

            <h2>
              Send an admission enquiry
            </h2>

            <p>
              Fill in your details and our team can get back
              to you.
            </p>

            {/* ================= SUCCESS ================= */}

            {submitted ? (
              <div className="contact-success">

                <div className="success-icon">
                  ✓
                </div>

                <h3>
                  Thank you!
                </h3>

                <p>
                  Your enquiry has been recorded successfully.
                  Our team will get in touch with you.
                </p>

                <button
                  type="button"
                  onClick={handleNewEnquiry}
                  className="contact-submit"
                >
                  Send another enquiry
                </button>

              </div>
            ) : (

              <form onSubmit={handleSubmit}>

                {/* ================= ERROR ================= */}

                {error && (
                  <div
                    style={{
                      color: "#b00020",
                      background: "#fff0f0",
                      padding: "12px 15px",
                      marginBottom: "18px",
                      border: "1px solid #f0b5b5",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                    }}
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                {/* ================= NAME ================= */}

                <div className="contact-field">

                  <label htmlFor="contact-name">
                    Full name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    minLength="2"
                    maxLength="50"
                    pattern="[A-Za-z\s.'-]+"
                    autoComplete="name"
                    required
                  />

                </div>

                {/* ================= PHONE + EMAIL ================= */}

                <div className="contact-two-fields">

                  <div className="contact-field">

                    <label htmlFor="contact-phone">
                      Phone
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      inputMode="numeric"
                      maxLength="10"
                      pattern="[6-9][0-9]{9}"
                      autoComplete="tel"
                      required
                    />

                  </div>

                  <div className="contact-field">

                    <label htmlFor="contact-email">
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      maxLength="100"
                      autoComplete="email"
                      required
                    />

                  </div>

                </div>

                {/* ================= COURSE ================= */}

                <div className="contact-field">

                  <label htmlFor="contact-course">
                    Course of interest
                  </label>

                  <select
                    id="contact-course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a course
                    </option>

                    {COURSES.map((course) => (
                      <option
                        key={course}
                        value={course}
                      >
                        {course}
                      </option>
                    ))}
                  </select>

                </div>

                {/* ================= MESSAGE ================= */}

                <div className="contact-field">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    maxLength="500"
                    placeholder="Tell us how we can help..."
                  />

                </div>

                {/* ================= SUBMIT ================= */}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending enquiry..."
                    : "Send enquiry →"}
                </button>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* ================= CAMPUSES ================= */}

      <section className="campus-section">

        <div className="contact-container">

          <div className="campus-heading">

            <span className="contact-label">
              OUR CAMPUSES
            </span>

            <h2>
              Find us across two campuses
            </h2>

          </div>

          <div className="campus-grid">

            <div className="campus-card">

              <span>
                01
              </span>

              <h3>
                New Delhi
              </h3>

              <p>
                Our New Delhi campus offers programmes across
                computer applications, IT, media, journalism,
                management and related professional fields.
              </p>

            </div>

            <div className="campus-card">

              <span>
                02
              </span>

              <h3>
                Firozabad
              </h3>

              <p>
                Our Firozabad campus provides professional
                education with facilities supporting academic
                learning and student development.
              </p>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

/* =================================
   HOME PAGE ENQUIRY SECTION
================================= */

export const HomeEnquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =================================
     HOME ENQUIRY SUBMIT
  ================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name")?.trim(),
      phone: formData.get("phone")?.trim(),
      email: formData.get("email")?.trim().toLowerCase(),
      course: formData.get("course"),
    };

    /* ================= FRONTEND VALIDATION ================= */

    const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;
    const phoneRegex = /^[6-9][0-9]{9}$/;

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (
      !data.name ||
      !data.phone ||
      !data.email ||
      !data.course
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!nameRegex.test(data.name)) {
      setError("Please enter a valid name.");
      return;
    }

    if (!phoneRegex.test(data.phone)) {
      setError(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!COURSES.includes(data.course)) {
      setError("Please select a valid course.");
      return;
    }

    /* ================= API SUBMISSION ================= */

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${API_BASE_URL}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(
          result.message ||
            "Unable to submit your enquiry. Please try again."
        );
        return;
      }

      setSubmitted(true);

    } catch (err) {
      console.error(
        "Enquiry submission failed:",
        err
      );

      setError(
        "Unable to connect to the server. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="home-enquiry">

      <div className="contact-container home-enquiry-grid">

        {/* ================= CONTENT ================= */}

        <div className="home-enquiry-content">

          <span className="contact-label">
            ADMISSION ENQUIRY
          </span>

          <h2>
            Ready to take the
            <br />
            <strong>next step?</strong>
          </h2>

          <p>
            Have questions about courses, eligibility or
            admissions? Share your details and our team will
            help you with the next steps.
          </p>

          <div className="home-enquiry-points">

            <span>
              ✓ Course guidance
            </span>

            <span>
              ✓ Admission support
            </span>

            <span>
              ✓ Campus information
            </span>

          </div>

        </div>

        {/* ================= HOME FORM ================= */}

        <div className="home-enquiry-card">

          {submitted ? (

            <div className="contact-success">

              <div className="success-icon">
                ✓
              </div>

              <h3>
                Thank you!
              </h3>

              <p>
                Your enquiry has been recorded successfully.
                Our team will get in touch with you.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
                className="contact-submit"
              >
                Send another enquiry
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              {/* ================= ERROR ================= */}

              {error && (
                <div
                  style={{
                    color: "#b00020",
                    background: "#fff0f0",
                    padding: "12px 15px",
                    marginBottom: "18px",
                    border: "1px solid #f0b5b5",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                  role="alert"
                >
                  {error}
                </div>
              )}

              {/* ================= NAME + PHONE ================= */}

              <div className="home-enquiry-row">

                <div className="contact-field">

                  <label>
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    minLength="2"
                    maxLength="50"
                    pattern="[A-Za-z\s.'-]+"
                    autoComplete="name"
                    required
                  />

                </div>

                <div className="contact-field">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10-digit mobile number"
                    inputMode="numeric"
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    autoComplete="tel"
                    required
                  />

                </div>

              </div>

              {/* ================= EMAIL ================= */}

              <div className="contact-field">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  maxLength="100"
                  autoComplete="email"
                  required
                />

              </div>

              {/* ================= COURSE ================= */}

              <div className="contact-field">

                <label>
                  Course of interest
                </label>

                <select
                  name="course"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a course
                  </option>

                  {COURSES.map((course) => (
                    <option
                      key={course}
                      value={course}
                    >
                      {course}
                    </option>
                  ))}

                </select>

              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Enquiry →"}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;