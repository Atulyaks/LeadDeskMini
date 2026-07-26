const { body, validationResult } = require("express-validator");

const validateLead = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email"),

  body("budget")
    .notEmpty()
    .withMessage("Budget is required"),

  body("message")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.array());   // 👈 Add this line

      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = validateLead;