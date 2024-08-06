// controllers/customData.controller.js

import { CustomData } from '../models/customData.model.js';

export const addCustomData = async (req, res) => {
  try {
    const { userId, data } = req.body;

    if (!userId || !data) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const customData = new CustomData({ userId, data });
    await customData.save();

    res.status(201).json({ message: "Data saved successfully", customData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getCustomData = async (req, res) => {
  try {
    const { userId } = req.params;
    const customData = await CustomData.find({ userId });

    res.status(200).json(customData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateCustomData = async (req, res) => {
  try {
    const { dataId } = req.params;
    const { data } = req.body;

    const updatedData = await CustomData.findByIdAndUpdate(dataId, { data }, { new: true });

    res.status(200).json({ message: "Data updated successfully", updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteCustomData = async (req, res) => {
  try {
    const { dataId } = req.params;

    await CustomData.findByIdAndDelete(dataId);

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
