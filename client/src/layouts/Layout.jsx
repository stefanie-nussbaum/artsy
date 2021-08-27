import React from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout(props) {
  const { currentUser } = props

  return (
    <div>
      <header>
        <h1>Artsy</h1>
        <Navbar currentUser={currentUser} />
        {props.children}
      </header>
      <Footer />
    </div>
  )
}
