import express from 'express';
import { createTodo } from '../controllers/todo.controller.js';
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.route('/').post(authenticateToken, createTodo);

export default router;
