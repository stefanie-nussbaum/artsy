import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function UserProfile(props) {
  // const [usersProducts, setUsersProducts] = useState([])
  const [user, setUser] = useState()
  const { currentUser, getUser } = props
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser(id))
    }
    fetchUser()
  }, [id, getUser])

  // useEffect(() => {
  //   setUsersProducts(products.filter((product) => {
  //     if (product?.user_id === id) {
  //       return product
  //     }
  //     return null
  //   }))
  // }, [id, products])

  return (
    <div className='container'>
      {/* {usersProducts?.map((product, key) => {
        return (
          <div key={key}>
            <ProductCard currentUser={currentUser} product={product} />
          </div>
        )
      })} */}

      {user?.products.map((product, key) => {
        return (
          <div key={key}>
            <ProductCard currentUser={currentUser} product={product} />
          </div>
        )
      })}
    </div>
  )
}
