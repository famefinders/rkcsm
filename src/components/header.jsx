import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-container">

          <div className="top-info">
            <span>📍 New Delhi & Firozabad</span>
            <span>📞 +91 XXXXX XXXXX</span>
            <span>✉ info@rkfma.com</span>
          </div>

          <div className="top-social">
            <span>f</span>
            <span>𝕏</span>
            <span>in</span>
            <span>▶</span>
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="main-navbar">

        <div className="header-container">

          {/* LOGO */}
          <Link
            to="/"
            className="header-logo"
            onClick={closeMenu}
          >
            <img
              src="/images/rk-logo-header.jpg"
              alt="RK Group of Institutions"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">

            <Link
              to="/"
              className={isActive("/") ? "active" : ""}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={isActive("/about") ? "active" : ""}
            >
              About
            </Link>

            <Link
              to="/courses"
              className={isActive("/courses") ? "active" : ""}
            >
              Courses
            </Link>

            <Link
              to="/admissions"
              className={isActive("/admissions") ? "active" : ""}
            >
              Admissions
            </Link>

            <Link
              to="/careers"
              className={isActive("/careers") ? "active" : ""}
            >
              Careers
            </Link>

            <Link
              to="/alumni"
              className={isActive("/alumni") ? "active" : ""}
            >
              Alumni
            </Link>

            <Link
              to="/gallery"
              className={isActive("/gallery") ? "active" : ""}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>

            {/* APPLY BUTTON */}
            <Link
              to="/apply"
              className="apply-button"
            >
              Apply Now
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      {/* ================= TICKER ================= */}
      <div className="notice-ticker">
        <div className="ticker-label">
          NOTICE
        </div>

        <div className="ticker-content">
          Admissions open for 2026 — Enquire now for courses,
          eligibility and admission guidance.
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <nav
        className={
          menuOpen
            ? "mobile-nav open"
            : "mobile-nav"
        }
      >

        <Link
          to="/"
          className={isActive("/") ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={isActive("/about") ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="/courses"
          className={isActive("/courses") ? "active" : ""}
          onClick={closeMenu}
        >
          Courses
        </Link>

        <Link
          to="/admissions"
          className={isActive("/admissions") ? "active" : ""}
          onClick={closeMenu}
        >
          Admissions
        </Link>

        <Link
          to="/careers"
          className={isActive("/careers") ? "active" : ""}
          onClick={closeMenu}
        >
          Careers
        </Link>

        <Link
          to="/alumni"
          className={isActive("/alumni") ? "active" : ""}
          onClick={closeMenu}
        >
          Alumni
        </Link>

        <Link
          to="/gallery"
          className={isActive("/gallery") ? "active" : ""}
          onClick={closeMenu}
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className={isActive("/contact") ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>

        {/* APPLY BUTTON */}
        <Link
          to="/apply"
          className="mobile-apply"
          onClick={closeMenu}
        >
          Apply Now
        </Link>

      </nav>

    </header>
  );
};

export default Header;