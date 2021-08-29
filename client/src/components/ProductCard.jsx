import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import Products from '../screens/Products'

export default function ProductCard(props) {
  const { product, currentUser } = props

  return (
    <div className='card'>
      <Link to={`/products/${product.id}`}>
        <img src={product.img_url} alt={product.name} />
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <Link className='user' to={`/users/${product.user?.id}/products`}><p>{product.user?.username}</p></Link>
        <p>Click to see more</p>
      </Link>
    </div>
  )
}
