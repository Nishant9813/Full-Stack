// controllers/auth.controller.js

import { User } from '../models/user.model.js';

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      userId: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
