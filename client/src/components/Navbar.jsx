import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser } = props
  return (
    <div>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <p>Create Product</p>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
    </div>
  )
}
