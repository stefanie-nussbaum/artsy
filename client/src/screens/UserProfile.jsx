import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function UserProfile(props) {
  const [usersProducts, setUsersProducts] = useState([])
  const { currentUser, products } = props
  const { id } = useParams()

  useEffect(() => {
    setUsersProducts(products.filter((product) => {
      if (product?.user_id === id) {
        return product
      }
      return null
    }))
  }, [id, products])

  return (
    <div>
      {usersProducts?.map((product, key) => {
        return (
          <div key={key}>
            <ProductCard currentUser={currentUser} product={product} />
          </div>
        )
      })}
    </div>
  )
}
