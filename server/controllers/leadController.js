const Lead = require("../models/Lead");

// ==========================
// Create Lead (Public)
// ==========================
const createLead = async (req, res) => {
  try {
    console.log("Incoming Body:", req.body);

    const lead = await Lead.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    console.error(error);

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        success: false,
        message: "A lead with this email already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};