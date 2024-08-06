import express from "express";
import { login, logout, register } from "../controllers/user.controller.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.route("/login").post(login)
router.route("/register").post(register)


router.get('/profile', authenticateToken, (req, res) => {
    res.status(200).json({
      message: 'Profile data',
      user: req.user,
      success: true,
    });
  });
router.route("/logout").post(logout)


export default router;