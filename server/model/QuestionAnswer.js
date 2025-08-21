const mongoose = require("mongoose");

const questionAnswerSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    companyName: { type: String, required: false },
    questionAnswer: { type: Object, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("QuestionAnswer", questionAnswerSchema, "questionAnswer");
