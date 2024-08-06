// middleware/authMiddleware.js

import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization'];  

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id;
    return res.status(200).json({
      userId:req.userId
    })
    next();
    
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
      success: false,
    });
  }
};
