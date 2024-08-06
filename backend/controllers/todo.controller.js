import { Todo } from '../models/todo.model.js';

export const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const userId = req.user.id;

    if (!todo) {
      return res.status(400).json({
        message: 'Todo is required',
        success: false,
      });
    }

    const newTodo = new Todo({
      userId,
      todo,
    });

    await newTodo.save();

    return res.status(201).json({
      message: 'Todo created successfully',
      success: true,
      todo: newTodo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};
