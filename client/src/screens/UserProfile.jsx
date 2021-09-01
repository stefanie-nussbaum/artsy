import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function UserProfile(props) {
  const [user, setUser] = useState()
  const { currentUser, getUser } = props
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser(id))
    }
    fetchUser()
  }, [id, getUser])

  return (
    <div className='main-container'>
      {currentUser?.id === user?.id ? (
        <h2>Your Profile</h2>
      ) : (
        <h2>{`Welcome to ${user?.username}'s profile!`}</h2>
      )}
      <h3>{user?.username}'s Products</h3>
      <div className='container'>
        {user?.products.map((product, key) => {
          return (
            <div key={key}>
              <ProductCard currentUser={currentUser} product={product} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
