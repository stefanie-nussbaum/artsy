import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser } = props
  return (
    <div>
      {currentUser ? (
        <div>
          <Link to={`/users/${currentUser?.id}/products`}>{currentUser.username}</Link>
          <Link to='products/create'>Create Product</Link>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
    </div>
  )
}
