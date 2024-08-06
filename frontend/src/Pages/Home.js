import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
    <Header />
    <div className='d-flex justify-content-around align-items-center w-50 mx-auto p-5'>
      <div className='d-flex flex-column gap-2 text-center'>
        <h1 className='mb-3'>Welcome to my website 😊👍</h1>
        <h3>Login to see the data.</h3>
        <p>Still not Registered? Sign up right now.</p>
      </div>
    </div>
    </>
  )
}

export default Home