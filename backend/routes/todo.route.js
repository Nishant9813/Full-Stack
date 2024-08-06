import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todo.controller.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .post(authenticateToken, createTodo)
  .get(authenticateToken, getTodos);

router.route('/:id')
  .put(authenticateToken, updateTodo)
  .delete(authenticateToken, deleteTodo);

export default router;
