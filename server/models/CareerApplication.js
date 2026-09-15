const mongoose = require("mongoose");

const careerApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    position: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    experience: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },

    portfolio: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    note: {
      type: String,
      trim: true,
      maxlength: 1500,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CareerApplication",
  careerApplicationSchema
);