import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='main-container'>
      <div className='container2'>
        <div className='card2'>
          <h2>Browse through various handmade creations!</h2>
          <h3>Our artistic community shares many different products for you to browse and shop for every day.</h3>
          <Link to='/products'><button>Shop Products</button></Link>
        </div>
      </div>
      <div className='container2'>
        <div className='card2'>
          <h2>Join the community and post your own creations!</h2>
          <h3>We love those who are creative at heart and encourage everyone to join our community, no matter what your artistic medium may be. We have it all!</h3>
          <Link to='/register'><button>Register/Login</button></Link>
        </div>
      </div>
    </div>
  )
}
