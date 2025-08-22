const express = require("express");
const { query, validationResult } = require("express-validator");
const { protect } = require("../middleWare/authMiddleWare");
const { getAutoCompleteSuggestions } = require("../services/mapsService");

const router = express.Router();

router.get(
  "/get-suggestions",
   // auth check runs first (so we don't even validate if not logged in)
  query("input").isString().isLength({ min: 3 }).withMessage("Input must be at least 3 characters"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const suggestions = await getAutoCompleteSuggestions(req.query.input);
      return res.json({ suggestions });
    } catch (err) {
      console.error("Maps API error:", err.message);
      return res.status(500).json({ message: "Unable to fetch suggestions", error: err.message });
    }
  }
);

module.exports = router;
