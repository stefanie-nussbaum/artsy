import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductCard(props) {
  const { currentUser, product } = props
  const { id } = useParams()

  return (
    <div>
      <h2>{product.name}</h2>
      {currentUser?.id === product.user_id && (
        <div>
          <Link to={`/products/${id}/edit`}><button>Edit</button></Link>
        </div>
      )}

    </div>
  )
}
