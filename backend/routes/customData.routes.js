// routes/customData.routes.js

import express from 'express';
import { addCustomData, getCustomData, updateCustomData, deleteCustomData } from '../controllers/customData.controller.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', addCustomData);
router.get('/:userId', verifyToken, getCustomData);
router.put('/:dataId', verifyToken, updateCustomData);
router.delete('/:dataId', verifyToken, deleteCustomData);


export default router;
