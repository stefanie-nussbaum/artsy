import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser, handleLogout } = props
  return (
    <div className='nav'>
      {currentUser ? (
        <div>

          <Link className='nav-link' to='/products'>Shop Products</Link>
          <Link className='nav-link' to='/products/create'>Create Product</Link>
          <Link className='nav-link' to={`/users/${currentUser.id}/products`}>{currentUser.username}</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link className='nav-link' to='/products'>Shop Products</Link>
          <Link className='nav-link' to='/login'>Login/Register</Link>
        </div>
      )}
    </div>
  )
}
