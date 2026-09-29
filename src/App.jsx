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

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;