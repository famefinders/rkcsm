const express = require("express");

const router = express.Router();

/* =================================
   COMMON VALIDATION
================================= */

const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;

const phoneRegex = /^[6-9][0-9]{9}$/;

const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


/* =================================
   ALLOWED COURSES
================================= */

/*
  All website enquiry/admission forms
  use the same 12 descriptive course values.
*/

const allowedCourses = [
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
   COMMON CLEANING HELPER
================================= */

const cleanString = (value) => {
  return typeof value === "string" ? value.trim() : "";
};


/* =================================
   GENERAL ENQUIRY API
================================= */

router.post("/enquiry", (req, res) => {
  let {
    name,
    phone,
    email,
    course,
  } = req.body;

  /* Clean input */
  name = cleanString(name);
  phone = cleanString(phone);
  email = cleanString(email).toLowerCase();
  course = cleanString(course);


  /* Required fields */
  if (!name || !phone || !email || !course) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }


  /* Name validation */
  if (!nameRegex.test(name)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid name.",
    });
  }


  /* Phone validation */
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message:
        "Please enter a valid 10-digit Indian mobile number.",
    });
  }


  /* Email validation */
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }


  /* Course validation */
  if (!allowedCourses.includes(course)) {
    return res.status(400).json({
      success: false,
      message: "Please select a valid course.",
    });
  }


  /* Successful enquiry */
  console.log("New Enquiry:", {
    name,
    phone,
    email,
    course,
    receivedAt: new Date().toISOString(),
  });


  return res.status(201).json({
    success: true,
    message: "Enquiry received successfully!",
  });
});


/* =================================
   ADMISSION ENQUIRY API
================================= */

router.post("/admission-enquiry", (req, res) => {
  let {
    name,
    phone,
    email,
    course,
    message,
  } = req.body;


  /* Clean input */
  name = cleanString(name);
  phone = cleanString(phone);
  email = cleanString(email).toLowerCase();
  course = cleanString(course);
  message = cleanString(message);


  /* Required fields */
  if (!name || !phone || !email || !course) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }


  /* Name validation */
  if (!nameRegex.test(name)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid name.",
    });
  }


  /* Phone validation */
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message:
        "Please enter a valid 10-digit Indian mobile number.",
    });
  }


  /* Email validation */
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }


  /* Course validation */
  if (!allowedCourses.includes(course)) {
    return res.status(400).json({
      success: false,
      message: "Please select a valid course.",
    });
  }


  /* Message validation */
  if (message.length > 1000) {
    return res.status(400).json({
      success: false,
      message: "Message cannot exceed 1000 characters.",
    });
  }


  /* Admission enquiry received */
  console.log("New Admission Enquiry:", {
    name,
    phone,
    email,
    course,
    message,
    receivedAt: new Date().toISOString(),
  });


  return res.status(201).json({
    success: true,
    message:
      "Your admission enquiry has been received successfully!",
  });
});


/* =================================
   CAREER APPLICATION API
================================= */

router.post("/career-application", (req, res) => {
  let {
    position,
    name,
    email,
    phone,
    experience,
    portfolio,
    note,
  } = req.body;


  /* Clean input */
  position = cleanString(position);
  name = cleanString(name);
  email = cleanString(email).toLowerCase();
  phone = cleanString(phone);
  experience = cleanString(experience);
  portfolio = cleanString(portfolio);
  note = cleanString(note);


  /* Required fields */
  if (!position || !name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }


  /* Allowed positions */
  const allowedPositions = [
    "Assistant Professor — Computer Science",
    "Lecturer — Journalism & Media Production",
    "Visiting Faculty — Constitutional Law",
    "Admissions Counsellor",
    "Computer Lab Assistant",
  ];


  /* Position validation */
  if (!allowedPositions.includes(position)) {
    return res.status(400).json({
      success: false,
      message: "Please select a valid position.",
    });
  }


  /* Name validation */
  if (!nameRegex.test(name)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid name.",
    });
  }


  /* Phone validation */
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message:
        "Please enter a valid 10-digit Indian mobile number.",
    });
  }


  /* Email validation */
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }


  /* Experience validation */
  if (experience.length > 100) {
    return res.status(400).json({
      success: false,
      message:
        "Experience information cannot exceed 100 characters.",
    });
  }


  /* Portfolio validation */
  if (portfolio) {
    try {
      new URL(portfolio);
    } catch {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a valid CV / portfolio link.",
      });
    }
  }


  /* Covering note validation */
  if (note.length > 1500) {
    return res.status(400).json({
      success: false,
      message:
        "Covering note cannot exceed 1500 characters.",
    });
  }


  /* Career application received */
  console.log("New Career Application:", {
    position,
    name,
    email,
    phone,
    experience,
    portfolio,
    note,
    receivedAt: new Date().toISOString(),
  });


  return res.status(201).json({
    success: true,
    message:
      "Your career application has been received successfully!",
  });
});


/* =================================
   EXPORT ROUTER
================================= */

module.exports = router;