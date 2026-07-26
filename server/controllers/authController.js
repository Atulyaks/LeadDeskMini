const jwt = require("jsonwebtoken");

const ADMIN_EMAIL = "admin@digitalheroes.com";
const ADMIN_PASSWORD = "password123";

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (
    email !== ADMIN_EMAIL ||
    password !== ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      email: ADMIN_EMAIL,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({
    success: true,
    token,
  });
};