const express = require("express");
const router = express.Router();
// const Geo = require("../model/Geo");
const QuestionAnswer = require("../model/QuestionAnswer");

// router.get("/questions", async (req, res) => {
//   try {
//     // Get only the Generated_questions field
//     const data = await Geo.find({}, { Generated_questions: 1, _id: 0 });

//     // Flatten them into one array
//     const allQuestions = data.flatMap((doc) => doc.Generated_questions);

//     res.json(allQuestions);
//   } catch (err) {
//     console.error("Error fetching questions:", err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// POST endpoint to store form data
router.post("/submit-form", async (req, res) => {
  try {
    const { url, email, companyName, questionAnswers, firstName, lastName } = req.body;

    // Validate required fields
    if (!url || !email) {
      return res.status(400).json({ 
        message: "URL and email are required" 
      });
    }

    // Create new question answer document
    const newQuestionAnswer = new QuestionAnswer({
      url,
      email,
      companyName: companyName || "",
      questionAnswer: questionAnswers || {},
      firstName: firstName || "",
      lastName: lastName || ""
    });

    // Save to database
    const savedData = await newQuestionAnswer.save();

    res.status(201).json({
      message: "Form data saved successfully",
      data: savedData
    });

  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).json({ 
      message: "Server Error", 
      error: err.message 
    });
  }
});

module.exports = router;
