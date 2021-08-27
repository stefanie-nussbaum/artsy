import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function Products(props) {
  const { currentUser, products } = props

  return (
    <div>
      Products
      {products.map((product) => {
        <div key={product.id}>
          <ProductCard currentUser={currentUser} product={product} />
        </div>
      })}
    </div>
  )
}
