import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser } = props
  return (
    <div className='nav'>
      {currentUser ? (
        <div>
          <Link className='nav-link' to={`/users/${currentUser.id}/products`}>{currentUser.username}</Link>
          <Link className='nav-link' to='/products/create'>Create Product</Link>
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
