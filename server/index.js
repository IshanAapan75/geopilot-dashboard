const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const Geo = require("./model/Geo");
// console.log("Geo model loaded:", !!Geo);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// app.get("/questions", async (req, res) => {
//   try {
//     const data = await Geo.find({}, { Generated_questions: 1, _id: 0 });
//     console.log("Fetched documents:", data);

//     const allQuestions = data.flatMap((doc) => doc.Generated_questions);
//     console.log("Flattened questions:", allQuestions);

//     res.json(allQuestions);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

app.use("/api/v1", require("./routes/question"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
