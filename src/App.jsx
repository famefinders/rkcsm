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
import Careers from "./sections/Career"; 
import Alumni from "./sections/Alumni";
import Contact, { HomeEnquiry } from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
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

        <Route path="/careers" element={<Careers />} />

        <Route path="/alumni" element={<Alumni />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/gallery" element={<Gallery />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;