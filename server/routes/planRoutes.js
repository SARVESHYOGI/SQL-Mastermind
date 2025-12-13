const express = require("express");
const { generatePlan, savePlan, getPlan, deleteplan, generateQuestion } = require("../controllers/planController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/generate-plan", authMiddleware, generatePlan);
router.post("/generatequestion", generateQuestion);

router.post("/saveplan", authMiddleware, savePlan);
router.get("/getplan", authMiddleware, getPlan);
router.delete("/deleteplan/:id", authMiddleware, deleteplan);

module.exports = router;