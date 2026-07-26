const express = require("express");
const router = express.Router();

const {
  createLead,
  getAllLeads,
  updateLeadStatus,
  deleteLead,
} = require("../controllers/leadController");

const validateLead = require("../middleware/validateLead");
const auth = require("../middleware/auth");

// Public Route
router.post("/", validateLead, createLead);

// Protected Routes
router.get("/", auth, getAllLeads);
router.patch("/:id", auth, updateLeadStatus);
router.delete("/:id", auth, deleteLead);

module.exports = router;