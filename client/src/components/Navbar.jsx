import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser, handleLogout } = props
  return (
    <div>
      {currentUser ? (
        <div className='container2'>
          <Link className='nav-link' to='/products'><button>Shop Products</button></Link>
          <Link className='nav-link' to='/products/create'><button>Create Product</button></Link>
          <Link className='nav-link' to={`/users/${currentUser.id}/products`}><button>{currentUser.username}</button></Link>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='container2'>
          <Link className='nav-link' to='/products'><button>Shop Products</button></Link>
          <Link className='nav-link' to='/login'><button>Login/Register</button></Link>
        </div>
      )}
    </div>
  )
}
