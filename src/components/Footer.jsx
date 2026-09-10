import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <div className="footer-logo">
            <img
              src="/images/rk-logo-footer.jpg"
              alt="RK Group of Institutions"
            />
          </div>

          <h3>RKCSM Educational Society</h3>

          <p>
            Building careers through quality professional education
            since 1995.
          </p>

          <a href="mailto:info@rkfma.com" className="footer-email">
            info@rkfma.com
          </a>

        </div>

        {/* EXPLORE */}
        <div className="footer-column">

          <h4>Explore</h4>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/admissions">Admissions</a>

        </div>

        {/* COMMUNITY */}
        <div className="footer-column">

          <h4>Community</h4>

          <a href="/careers">Careers</a>
          <a href="/alumni">Alumni</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>

        </div>

        {/* CAMPUSES */}
        <div className="footer-column footer-campus">

          <h4>Campuses</h4>

          <div>
            <strong>New Delhi</strong>
            <p>New Delhi, India</p>
          </div>

          <div>
            <strong>Firozabad</strong>
            <p>Uttar Pradesh, India</p>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} RKCSM Educational Society.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/contact">Contact</a>
          <a href="/admissions">Admissions</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;