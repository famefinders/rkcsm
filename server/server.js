const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

/* =================================
   MIDDLEWARE
================================= */

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

/* =================================
   API ROUTES
================================= */

app.use("/api", enquiryRoutes);

/* =================================
   HEALTH CHECK
================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RKCSM Backend is running successfully!",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

/* =================================
   SERVER CONFIGURATION
================================= */

const PORT = process.env.PORT || 5000;

/* =================================
   START SERVER
================================= */

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();