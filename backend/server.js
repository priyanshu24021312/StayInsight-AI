const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");  

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const reviewRoutes = require("./routes/reviews");
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to StayInsight AI Backend API",
    version: "1.0.0",
  });
});
app.use("/api/reviews", reviewRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});