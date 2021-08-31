import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { handleLogin } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='main-container'>
      <div className='form-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
          className='container'
        >
          <h2>Login</h2>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
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
          <Link to='/register'><h4>Don't have an account? Register!</h4></Link>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
