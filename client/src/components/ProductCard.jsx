import React from 'react'
import { Link } from 'react-router-dom'
// import Products from '../screens/Products'

export default function ProductCard(props) {
  const { products } = props

  return (
    <div>
      {/* <p>{currentUser.email}</p> */}
      {products.map((product, key) => {
        return (
          <div key={key}>
            <Link to={`/products/${product.id}`}>
              <img src={product.img_url} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>{product.user?.username}</p>
              <p>Click to see more</p>
            </Link>

          </div>
        )
      })}
      {/* {currentUser?.id === product.user_id && (
        <div>
          <Link to={`/products/${id}/edit`}><button>Edit</button></Link>
        </div>
      )} */}

    </div>
  )
}
