import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout(props) {
  const { currentUser } = props

  return (
    <div className='main-container'>
      <header>
        <Link to='/products'><h1>Artsy</h1></Link>
        <Navbar currentUser={currentUser} />
      </header>
      {props.children}
      <Footer />
    </div>
  )
}
