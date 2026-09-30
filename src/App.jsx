import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Header from "./components/header";

import Hero from "./sections/hero";
import Stats from "./sections/Stats";
import Schools from "./sections/Schools";
import Learning from "./sections/Learning";
import PopularCourses from "./sections/PopularCourses";
import AlumniPreview from "./sections/AlumniPreview";
import CareersPreview from "./sections/CareersPreview";
import Mission from "./sections/Mission";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Admissions from "./sections/Admissions";
import Apply from "./sections/Apply";
import Faculty from "./sections/Faculty"; 
import Alumni from "./sections/Alumni";
import Contact, { HomeEnquiry } from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Footer from "./components/Footer";
import Recognitions from "./sections/Recognitions";
import AdminDashboard from "./sections/AdminDashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  // Global Scroll Reveal Effect for homepage sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
      sec.classList.add("reveal-on-scroll");
      observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Schools />
      <Learning />
      <PopularCourses />
      <AlumniPreview />
      <CareersPreview />
      <Mission />

      {/* BLOG / NEWS & UPDATES SECTION */}
      <section className="section-space reveal-on-scroll" style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto" }}>
          
          <div style={{ maxWidth: "700px", marginBottom: "40px" }}>
            <span style={{ color: "#d59b24", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "2px", display: "inline-block", marginBottom: "15px" }}>
              NEWS & UPDATES
            </span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 42px)", color: "#101b35", margin: "0 0 10px 0" }}>
              Latest Announcements & Blog
            </h2>
            <p style={{ color: "#667085", fontSize: "16px", margin: 0 }}>
              Stay updated with institutional events, admission notices, academic schedules, and educational articles.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            
            <div style={{ background: "#f7f8fa", padding: "30px", border: "1px solid #e4e7eb", borderRadius: "10px" }}>
              <span style={{ color: "#d59b24", fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>September 2026</span>
              <h3 style={{ fontSize: "20px", color: "#101b35", margin: "10px 0 10px" }}>Admissions Open for 2026-27 Academic Session</h3>
              <p style={{ color: "#667085", fontSize: "14px", lineHeight: "1.6", margin: "0 0 15px 0" }}>
                Applications are now being invited for B.Com, B.Ed, D.El.Ed, LLB, and BA.LLB programmes across our institutions.
              </p>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#101b35", cursor: "pointer" }}>Read Notice →</span>
            </div>

            <div style={{ background: "#f7f8fa", padding: "30px", border: "1px solid #e4e7eb", borderRadius: "10px" }}>
              <span style={{ color: "#d59b24", fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>August 2026</span>
              <h3 style={{ fontSize: "20px", color: "#101b35", margin: "10px 0 10px" }}>Annual Moot Court Competition & Workshop</h3>
              <p style={{ color: "#667085", fontSize: "14px", lineHeight: "1.6", margin: "0 0 15px 0" }}>
                Law faculty students participated in rigorous advocacy training sessions conducted by eminent legal practitioners.
              </p>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#101b35", cursor: "pointer" }}>Read Notice →</span>
            </div>

            <div style={{ background: "#f7f8fa", padding: "30px", border: "1px solid #e4e7eb", borderRadius: "10px" }}>
              <span style={{ color: "#d59b24", fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>July 2026</span>
              <h3 style={{ fontSize: "20px", color: "#101b35", margin: "10px 0 10px" }}>Community Development & Village Adoption Drive</h3>
              <p style={{ color: "#667085", fontSize: "14px", lineHeight: "1.6", margin: "0 0 15px 0" }}>
                Our student volunteers organized free digital literacy camps and health awareness drives in nearby adopted villages.
              </p>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#101b35", cursor: "pointer" }}>Read Notice →</span>
            </div>

          </div>

        </div>
      </section>

      <HomeEnquiry />
    </>
  );
};


function App() {
  return (
    <BrowserRouter>
      
      <ScrollToTop />

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/apply" element={<Apply />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/alumni" element={<Alumni />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/recognitions" element={<Recognitions />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;