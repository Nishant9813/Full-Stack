// models/customData.model.js

import mongoose from 'mongoose';

const customDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  data: { type: String, required: true }
});

export const CustomData = mongoose.model('CustomData', customDataSchema);
