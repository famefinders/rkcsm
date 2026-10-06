import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/Footer";

// Pages & Components imports
import Home from "./sections/Home";
import About from "./sections/About";
import Courses from "./sections/Courses";
import CourseDetail from "./sections/CourseDetail";
import Admissions from "./sections/Admissions";
import Apply from "./sections/Apply";
import Faculty from "./sections/Faculty"; 
import Alumni from "./sections/Alumni";
import Contact from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Recognitions from "./sections/Recognitions";
//import AdminDashboard from "./sections/AdminDashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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

        /* <Route path="/admin" element={<AdminDashboard />} /> */

        <Route path="/course-detail" element={<CourseDetail />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;