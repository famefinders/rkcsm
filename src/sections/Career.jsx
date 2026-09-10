import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Careers.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://rkcsm.onrender.com";

const jobs = [
  {
    id: 1,
    title: "Assistant Professor — Computer Science",
    category: "Faculty",
    location: "New Delhi",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Teach computer science subjects, mentor students and contribute to academic and practical learning.",
  },
  {
    id: 2,
    title: "Lecturer — Journalism & Media Production",
    category: "Faculty",
    location: "New Delhi",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Deliver practical and theoretical teaching across journalism, media production and related subjects.",
  },
  {
    id: 3,
    title: "Visiting Faculty — Constitutional Law",
    category: "Faculty",
    location: "Firozabad",
    type: "Part-time",
    experience: "3+ years",
    description:
      "Support law students through classroom teaching, discussions and practice-oriented academic sessions.",
  },
  {
    id: 4,
    title: "Admissions Counsellor",
    category: "Administration",
    location: "New Delhi",
    type: "Full-time",
    experience: "1+ year",
    description:
      "Guide prospective students, handle admission enquiries and support the admissions process.",
  },
  {
    id: 5,
    title: "Computer Lab Assistant",
    category: "Support",
    location: "New Delhi",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Support day-to-day computer lab operations, systems and students during practical sessions.",
  },
];

const Careers = () => {
  const [searchParams] = useSearchParams();

  const positionFromUrl = searchParams.get("position") || "";

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [formData, setFormData] = useState({
    position: positionFromUrl,
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      position: positionFromUrl,
    }));
  }, [positionFromUrl]);

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

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

  const handleApply = (job) => {
    setSubmitted(false);
    setError("");

    setFormData((prev) => ({
      ...prev,
      position: job.title,
    }));

    setTimeout(() => {
      document
        .getElementById("career-application")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Frontend validation
    const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;
    const phoneRegex = /^[6-9][0-9]{9}$/;
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const cleanPosition = formData.position.trim();
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim().toLowerCase();
    const cleanPhone = formData.phone.trim();
    const cleanExperience = formData.experience.trim();
    const cleanPortfolio = formData.portfolio.trim();
    const cleanNote = formData.note.trim();

    if (!cleanPosition) {
      setError("Please select a position.");
      return;
    }

    if (!nameRegex.test(cleanName)) {
      setError("Please enter a valid name.");
      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(cleanPhone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (cleanExperience.length > 100) {
      setError(
        "Experience information cannot exceed 100 characters."
      );
      return;
    }

    if (cleanPortfolio) {
      try {
        const portfolioUrl = new URL(cleanPortfolio);

        if (
          portfolioUrl.protocol !== "http:" &&
          portfolioUrl.protocol !== "https:"
        ) {
          setError("Please enter a valid CV / portfolio link.");
          return;
        }
      } catch {
        setError("Please enter a valid CV / portfolio link.");
        return;
      }
    }

    if (cleanNote.length > 1500) {
      setError(
        "Covering note cannot exceed 1500 characters."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${API_BASE_URL}/api/career-application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            position: cleanPosition,
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            experience: cleanExperience,
            portfolio: cleanPortfolio,
            note: cleanNote,
          }),
        }
      );

      let result = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok || !result.success) {
        setError(
          result.message ||
            "Unable to submit your application."
        );
        return;
      }

      // Successful submission
      setSubmitted(true);
      setError("");

      setFormData({
        position: "",
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        note: "",
      });
    } catch (error) {
      console.error(
        "Career application submission failed:",
        error
      );

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="careers-page">

      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-container">
          <div className="careers-hero-content">

            <span className="careers-eyebrow">
              CAREERS
            </span>

            <h1>
              Teach, build
              <br />
              and grow with us
            </h1>

            <p>
              Join an education-focused organisation where
              faculty and staff contribute directly to the
              learning and growth of students.
            </p>

          </div>
        </div>
      </section>


      {/* JOBS */}
      <section className="career-jobs-section">
        <div className="careers-container">

          <div className="career-heading">

            <div>
              <span className="careers-eyebrow">
                OPEN ROLES
              </span>

              <h2>
                Find your next role
              </h2>
            </div>

            <div className="career-filters">

              <button
                type="button"
                className={
                  selectedCategory === "All"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory("All")
                }
              >
                All
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Faculty"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory("Faculty")
                }
              >
                Faculty
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Administration"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory("Administration")
                }
              >
                Administration
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Support"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory("Support")
                }
              >
                Support
              </button>

            </div>

          </div>


          <div className="jobs-list">

            {filteredJobs.map((job) => (

              <article
                className="job-card"
                key={job.id}
              >

                <div className="job-main">

                  <span className="job-category">
                    {job.category}
                  </span>

                  <h3>{job.title}</h3>

                  <p>{job.description}</p>

                </div>


                <div className="job-details">

                  <div>
                    <span>LOCATION</span>
                    <strong>{job.location}</strong>
                  </div>

                  <div>
                    <span>TYPE</span>
                    <strong>{job.type}</strong>
                  </div>

                  <div>
                    <span>EXPERIENCE</span>
                    <strong>{job.experience}</strong>
                  </div>

                </div>


                <button
                  type="button"
                  className="job-apply"
                  onClick={() => handleApply(job)}
                >
                  Apply
                  <span>→</span>
                </button>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* APPLICATION */}
      <section
        className="career-application-section"
        id="career-application"
      >

        <div className="careers-container career-form-layout">

          <div className="career-form-intro">

            <span className="careers-eyebrow">
              WORK WITH US
            </span>

            <h2>
              Tell us
              <br />
              about yourself.
            </h2>

            <p>
              Interested in joining the team? Select a position
              and share your details with us.
            </p>

            <div className="career-note">

              <span>APPLICATION TIP</span>

              <p>
                Include relevant experience, skills and a link
                to your portfolio where applicable.
              </p>

            </div>

          </div>


          {/* SUCCESS MESSAGE / FORM */}

          {submitted ? (

            <div className="career-success">

              <div className="career-success-icon">
                ✓
              </div>

              <h3>
                Application received!
              </h3>

              <p>
                Thank you for your interest in joining our team.
                Your application has been received successfully
                and our team will review your profile.
              </p>

              <button
                type="button"
                className="career-submit"
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
              className="career-form"
              onSubmit={handleSubmit}
            >

              <div className="career-field">

                <label htmlFor="position">
                  Position
                </label>

                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a position
                  </option>

                  {jobs.map((job) => (
                    <option
                      key={job.id}
                      value={job.title}
                    >
                      {job.title}
                    </option>
                  ))}

                </select>

              </div>


              <div className="career-field">

                <label htmlFor="career-name">
                  Full name
                </label>

                <input
                  id="career-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength="2"
                  maxLength="50"
                  pattern="[A-Za-z\s.'-]+"
                  required
                />

              </div>


              <div className="career-form-row">

                <div className="career-field">

                  <label htmlFor="career-email">
                    Email
                  </label>

                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength="100"
                    required
                  />

                </div>


                <div className="career-field">

                  <label htmlFor="career-phone">
                    Phone
                  </label>

                  <input
                    id="career-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    required
                  />

                </div>

              </div>


              <div className="career-field">

                <label htmlFor="experience">
                  Years of experience
                </label>

                <input
                  id="experience"
                  name="experience"
                  type="text"
                  placeholder="e.g. 2 years"
                  value={formData.experience}
                  onChange={handleChange}
                  maxLength="100"
                />

              </div>


              <div className="career-field">

                <label htmlFor="portfolio">
                  CV / portfolio link
                </label>

                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  placeholder="https://..."
                  value={formData.portfolio}
                  onChange={handleChange}
                />

              </div>


              <div className="career-field">

                <label htmlFor="career-note">
                  Covering note
                </label>

                <textarea
                  id="career-note"
                  name="note"
                  rows="5"
                  placeholder="Tell us briefly about yourself..."
                  value={formData.note}
                  onChange={handleChange}
                  maxLength="1500"
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
                >
                  {error}
                </div>
              )}


              <button
                type="submit"
                className="career-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit application"}

                <span>
                  {isSubmitting ? "..." : "→"}
                </span>
              </button>

            </form>

          )}

        </div>

      </section>


      {/* CTA */}
      <section className="career-bottom">

        <div className="careers-container">

          <div className="career-bottom-content">

            <span className="careers-eyebrow">
              CONNECT
            </span>

            <h2>
              Don't see the right opening?
            </h2>

            <p>
              You can still reach out to our team with your
              profile and area of interest.
            </p>

            <a
              href="mailto:info@rkfma.com"
              className="career-email-button"
            >
              Send your profile
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Careers;