import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { currentUser } = props

  return (
    <header>
      <h1>Artsy</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
        </div>
      ) : (
        <Link>Login/Register</Link>
      )}
    </header>
  )
}
