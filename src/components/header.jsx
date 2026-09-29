import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Niche scroll karte waqt header hide ho jayega
        setShowNavbar(false);
      } else {
        // Upar scroll karte waqt header wapas aa jayega
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <header className={`site-header ${showNavbar ? "visible" : "hidden"}`}>

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
            <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
            <Link to="/recognitions" className={isActive("/recognitions") ? "active" : ""}>Recognitions</Link>
            <Link to="/courses" className={isActive("/courses") ? "active" : ""}>Courses</Link>
            <Link to="/faculty" className={isActive("/faculty") ? "active" : ""}>Faculty</Link>
            <Link to="/admissions" className={isActive("/admissions") ? "active" : ""}>Admissions</Link>
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

      {/* ================= NOTICE TICKER ================= */}
      <div className="notice-ticker">
        <div className="ticker-label">
          NOTICE
        </div>

        <div className="ticker-content-wrapper">
          <marquee behavior="scroll" direction="left" scrollamount="5">
            Admissions open for 2026 — Enquire now for courses, eligibility and admission guidance.
          </marquee>
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
        <Link to="/recognitions" className={isActive("/recognitions") ? "active" : ""} onClick={closeMenu}>Recognitions</Link>
        <Link to="/courses" className={isActive("/courses") ? "active" : ""} onClick={closeMenu}>Courses</Link>
        <Link to="/faculty" className={isActive("/faculty") ? "active" : ""} onClick={closeMenu}>Faculty</Link>
        <Link to="/admissions" className={isActive("/admissions") ? "active" : ""} onClick={closeMenu}>Admissions</Link>
        <Link to="/alumni" className={isActive("/alumni") ? "active" : ""} onClick={closeMenu}>Alumni</Link>
        <Link to="/gallery" className={isActive("/gallery") ? "active" : ""} onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>Contact</Link>
        <Link to="/apply" className="mobile-apply" onClick={closeMenu}>Apply Now</Link>
      </nav>

    </header>
  );
};

export default Header;