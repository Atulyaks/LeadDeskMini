
const Lead = require("./models/Lead");
const express = require("express");
const leadRoutes = require("./routes/leadRoutes");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/leads", leadRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "LeadDesk Mini API is running 🚀",
  });
});

sequelize
  .sync()
  .then(() => {
    console.log("✅ Connected to MySQL");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed");
    console.error(err);
  });