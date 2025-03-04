const express = require("express");
const { generatePlan, savePlan, getPlan } = require("../controllers/planController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/generate-plan", authMiddleware, generatePlan);
// router.post("/generate-plan", generatePlan);
router.post("/saveplan", authMiddleware, savePlan);
router.get("/getplan", authMiddleware, getPlan);

module.exports = router;