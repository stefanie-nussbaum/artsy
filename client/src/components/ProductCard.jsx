import React from 'react'

export default function ProductCard(props) {
  const { product } = props
  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  )
}
