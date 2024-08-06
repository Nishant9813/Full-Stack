import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Signup />} path='/signup' />
      </Routes>
  )
}

export default App