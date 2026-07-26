
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
  const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;