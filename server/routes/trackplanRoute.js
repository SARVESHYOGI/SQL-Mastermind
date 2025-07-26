const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { addtotrackplan, gettrackplan, updateCompletion } = require("../controllers/trackplanController");

const router = express.Router();

router.post("/trackplan/:id", authMiddleware, addtotrackplan)
router.get("/trackplan/", authMiddleware, gettrackplan)
router.patch('/updateCompletion', authMiddleware, updateCompletion);
module.exports = router;