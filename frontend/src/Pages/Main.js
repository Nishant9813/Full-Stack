import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';

const Main = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const fetchTodos = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('User is not logged in');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8000/api/v1/todo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(response.data.todos);
    } catch (error) {
      setMessage('Error fetching todos');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('User is not logged in');
      return;
    }

    try {
      if (editTodo) {
        const response = await axios.put(`http://localhost:8000/api/v1/todo/${editTodo._id}`, 
          { todo }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage(response.data.message);
      } else {
        const response = await axios.post('http://localhost:8000/api/v1/todo', 
          { todo }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage(response.data.message);
      }

      setTodo('');
      setEditTodo(null);
      fetchTodos();
    } catch (error) {
      setMessage('Error saving todo');
      console.error(error);
    }
  };

  const handleEdit = (todoItem) => {
    setEditTodo(todoItem);
    setTodo(todoItem.todo);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('User is not logged in');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/todo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(response.data.message);
      fetchTodos();
    } catch (error) {
      setMessage('Error deleting todo');
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>To-Do List</h2>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter to-do item"
          className="form-control mb-3"
        />
        <button onClick={handleSave} className="btn btn-primary">
          {editTodo ? 'Update' : 'Save'}
        </button>
        {message && <p className="mt-3">{message}</p>}

        <table className="table mt-5">
          <thead>
            <tr>
              <th>To-Do Item</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <tr key={item._id}>
                <td>{item.todo}</td>
                <td>
                  <button onClick={() => handleEdit(item)} className="btn btn-warning mr-2">Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
