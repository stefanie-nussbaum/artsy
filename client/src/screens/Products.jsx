import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function Products(props) {
  const { currentUser, products } = props

  return (
    <div>
      Products
      {/* <p>{products[0].name}</p>
      {products.map((product, key) => {
          <p>{key}</p>
          <p>{product.name}</p> */}
      <ProductCard currentUser={currentUser} products={products} />

    </div>
  )
}
