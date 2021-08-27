import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Products from '../screens/Products'

export default function ProductCard(props) {
  const { currentUser, products } = props
  const { id } = useParams()

  return (
    <div>
      <p>{currentUser.email}</p>
      {products.map((product) => {
        <div key={product.id}>
          <h2>{product.name}</h2>

        </div>
      })}
      {/* {currentUser?.id === product.user_id && (
        <div>
          <Link to={`/products/${id}/edit`}><button>Edit</button></Link>
        </div>
      )} */}

    </div>
  )
}
