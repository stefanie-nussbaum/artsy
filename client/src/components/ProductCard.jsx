import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard(props) {
  const { product } = props

  return (
    <div className='card'>
      <Link to={`/products/${product.id}`}>
        <img src={product.img_url} alt={product.name} />
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <p>Made by <Link className='user' to={`/users/${product.user?.id}/products`}>{product.user?.username}</Link></p>
      </Link>
    </div>
  )
}
