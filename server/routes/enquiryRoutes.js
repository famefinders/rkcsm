const express = require("express");

const Enquiry = require("../models/Enquiry");
const AdmissionEnquiry = require("../models/AdmissionEnquiry");
const CareerApplication = require("../models/CareerApplication");
const allowedCourses = require("../constants/courses");
const allowedPositions = require("../constants/positions");

const router = express.Router();

/* =================================
   COMMON VALIDATION
================================= */

const nameRegex = /^[A-Za-z\s.'-]{2,50}$/;

const phoneRegex = /^[6-9][0-9]{9}$/;

const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/* =================================
   COMMON CLEANING HELPER
================================= */

const cleanString = (value) => {
  return typeof value === "string" ? value.trim() : "";
};

// =================================
// COMMON ENQUIRY VALIDATION
// =================================

const validateCommonEnquiryFields = ({
  name,
  phone,
  email,
  course,
  message,
}) => {
  if (!name || !phone || !email || !course) {
    return "Please fill in all required fields.";
  }

  if (!nameRegex.test(name)) {
    return "Please enter a valid name.";
  }

  if (!phoneRegex.test(phone)) {
    return "Please enter a valid 10-digit Indian mobile number.";
  }

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!allowedCourses.includes(course)) {
    return "Please select a valid course.";
  }

  if (message.length > 1000) {
    return "Message cannot exceed 1000 characters.";
  }

  return null;
};


/* =================================
   GENERAL ENQUIRY API
   Home + Contact enquiries
================================= */

router.post("/enquiry", async (req, res) => {
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


  const validationError = validateCommonEnquiryFields({
  name,
  phone,
  email,
  course,
  message,
});

if (validationError) {
  return res.status(400).json({
    success: false,
    message: validationError,
  });
}


  /* Save to MongoDB */

  try {
    const enquiry = await Enquiry.create({
      name,
      phone,
      email,
      course,
      message,
    });

    console.log("New Enquiry saved:", enquiry._id);

    return res.status(201).json({
      success: true,
      message: "Enquiry received successfully!",
    });
  } catch (error) {
    console.error("General enquiry database error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save enquiry. Please try again.",
    });
  }
});


/* =================================
   ADMISSION ENQUIRY API
================================= */

router.post("/admission-enquiry", async (req, res) => {
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


  const validationError = validateCommonEnquiryFields({
  name,
  phone,
  email,
  course,
  message,
});

if (validationError) {
  return res.status(400).json({
    success: false,
    message: validationError,
  });
}


  /* Save to MongoDB */

  try {
    const admissionEnquiry = await AdmissionEnquiry.create({
      name,
      phone,
      email,
      course,
      message,
    });

    console.log(
      "New Admission Enquiry saved:",
      admissionEnquiry._id
    );

    return res.status(201).json({
      success: true,
      message:
        "Your admission enquiry has been received successfully!",
    });
  } catch (error) {
    console.error("Admission enquiry database error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to save admission enquiry. Please try again.",
    });
  }
});


/* =================================
   CAREER APPLICATION API
================================= */

router.post("/career-application", async (req, res) => {
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

  /* Position validation */

  if (!allowedPositions.includes(position)) {
    return res.status(400).json({
      success: false,
      message: "Please select a valid position.",
    });s
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


  /* Save to MongoDB */

  try {
    const careerApplication = await CareerApplication.create({
      position,
      name,
      email,
      phone,
      experience,
      portfolio,
      note,
    });

    console.log(
      "New Career Application saved:",
      careerApplication._id
    );

    return res.status(201).json({
      success: true,
      message:
        "Your career application has been received successfully!",
    });
  } catch (error) {
    console.error("Career application database error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to save career application. Please try again.",
    });
  }
});


// =================================
// CENTRAL ERROR HANDLER
// =================================

router.use((error, req, res, next) => {
  console.error("Unhandled server error:", error);

  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
});

/* =================================
   EXPORT ROUTER
================================= */

module.exports = router;