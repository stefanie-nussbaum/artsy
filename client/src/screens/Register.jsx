import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { handleRegister } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='main-container'>
      <div className='container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
          className='container'
        >
          <h2>Register</h2>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
          />
          <br />
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
          <br />
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
          />
          <br />
          <Link to='/login'><h4>Already have an account? Log In!</h4></Link>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
