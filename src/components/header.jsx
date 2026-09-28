import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {/* ================= MAIN NAVBAR ================= */}
      <div className={`main-navbar-wrapper ${isScrolled ? "is-floating" : ""}`}>
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
              <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
              <Link to="/courses" className={isActive("/courses") ? "active" : ""}>Courses</Link>
              <Link to="/admissions" className={isActive("/admissions") ? "active" : ""}>Admissions</Link>
              <Link to="/careers" className={isActive("/careers") ? "active" : ""}>Careers</Link>
              <Link to="/alumni" className={isActive("/alumni") ? "active" : ""}>Alumni</Link>
              <Link to="/gallery" className={isActive("/gallery") ? "active" : ""}>Gallery</Link>
              <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>

              {/* APPLY BUTTON */}
              <Link to="/apply" className="apply-button">
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
      </div>

      {/* ================= NOTICE TICKER (Header ke niche) ================= */}
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
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={closeMenu}>About</Link>
        <Link to="/courses" className={isActive("/courses") ? "active" : ""} onClick={closeMenu}>Courses</Link>
        <Link to="/admissions" className={isActive("/admissions") ? "active" : ""} onClick={closeMenu}>Admissions</Link>
        <Link to="/careers" className={isActive("/careers") ? "active" : ""} onClick={closeMenu}>Careers</Link>
        <Link to="/alumni" className={isActive("/alumni") ? "active" : ""} onClick={closeMenu}>Alumni</Link>
        <Link to="/gallery" className={isActive("/gallery") ? "active" : ""} onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>Contact</Link>
        <Link to="/apply" className="mobile-apply" onClick={closeMenu}>Apply Now</Link>
      </nav>

    </header>
  );
};

export default Header;