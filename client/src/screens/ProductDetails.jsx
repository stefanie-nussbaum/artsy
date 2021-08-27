import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOneProduct } from '../services/products'

export default function ProductDetails(props) {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const { currentUser } = props

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getOneProduct(id)
      setProduct(productData)
    }
    fetchProduct()
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <div>
        <img src={product?.img_url} alt={product?.name} />
      </div>
      <h2>{product?.name}</h2>
      {currentUser?.id === product?.user_id && (
        <Link to={`/products/${product?.id}/edit`}>Edit</Link>
      )}
      <h3>${product?.price}</h3>
      <Link to={`/users/${product?.user_id}/products`}>{product?.user.username}</Link>
      <p>{product?.description}</p>
    </div>
  )
}
