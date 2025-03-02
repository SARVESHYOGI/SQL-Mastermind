import express from "express";
import { createUser, loginUser } from "../controllers/user.controllers.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/auth", auth);
export default router;