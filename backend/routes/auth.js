// routes/auth.js

import express from 'express';
import { getUser } from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/user', verifyToken, getUser);

export default router;
