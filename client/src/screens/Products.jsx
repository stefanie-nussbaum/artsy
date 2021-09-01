import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Products(props) {
  const { currentUser, products } = props

  return (
    <div className='main-container'>
      <h2>Products</h2>
      <div className='container'>
        {products.map((product, key) => {
          console.log(product)
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
