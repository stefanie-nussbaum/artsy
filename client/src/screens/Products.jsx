import React from 'react'
// import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function Products(props) {
  const { currentUser, products } = props

  return (
    <div className='container'>
      <h2>Products</h2>
      {products.map((product, key) => {
        console.log(product)
        return (
          <div key={key}>
            {/* <Link to={`/products/${product.id}`}>
              <img src={product.img_url} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>{product.user?.username}</p>
              <p>Click to see more</p>
            </Link> */}
            <ProductCard currentUser={currentUser} product={product} />


          </div>
        )
      })}

    </div>
  )
}
