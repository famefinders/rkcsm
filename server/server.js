const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
  

app.use(cors());
app.use(express.json());
app.use("/api", enquiryRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "RKCSM Backend is running successfully!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});