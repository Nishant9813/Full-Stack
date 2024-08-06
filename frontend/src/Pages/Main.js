import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';

const Main = () => {
  const [todo, setTodo] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('User is not logged in');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/todo', 
        { todo }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error saving todo');
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
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        {message && <p className="mt-3">{message}</p>}
      </div>
    </>
  );
};

export default Main;
