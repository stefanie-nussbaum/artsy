import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout(props) {
  const { currentUser, handleLogout } = props

  return (
    <div>
      <div classname='container'>
        <header className='nav'>
          <Link to='/products'><h1>Artsy</h1></Link>
          <Navbar currentUser={currentUser} handleLogout={handleLogout} />
        </header>

        {props.children}
      </div>
      <Footer />
    </div>
  )
}
