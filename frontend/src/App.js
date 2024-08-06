import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Routes>
      <Route path='/main' element={isAuthenticated ? <Main /> : <Login/>}/>
      <Route
        path='/'
        element={isAuthenticated ? <Main /> : <Home/>}
      />
      <Route
        path='/login'
        element={isAuthenticated ? <Main/> : <Login />}
      />
      <Route
        path='/signup'
        element={isAuthenticated ? <Main/> : <Signup />}
      />
    </Routes>
  );
};

export default App;
