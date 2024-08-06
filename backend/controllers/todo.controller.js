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

export const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const todos = await Todo.find({ userId });

    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const todoId = req.params.id;

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { todo },
      { new: true }
    );

    return res.status(200).json({
      message: 'Todo updated successfully',
      success: true,
      todo: updatedTodo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;

    await Todo.findByIdAndDelete(todoId);

    return res.status(200).json({
      message: 'Todo deleted successfully',
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};
