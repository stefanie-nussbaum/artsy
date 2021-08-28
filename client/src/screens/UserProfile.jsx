import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function UserProfile(props) {
  const { currentUser, products } = props
  const { id } = useParams()
  return (
    <div>

      {products.map((product, key) => {
        console.log(product)
        {
          product?.user_id === id && (
            <div key={key}>
              <ProductCard currentUser={currentUser} product={product} />
            </div>
          )
        }

      })}

    </div>
  )
}
