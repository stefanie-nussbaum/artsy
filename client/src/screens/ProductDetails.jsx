import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
// import { getOneCategory } from '../services/categories'
import { getOneProduct } from '../services/products'

export default function ProductDetails(props) {
  const [product, setProduct] = useState()
  // const [category, setCategory] = useState()
  const { id } = useParams()
  const { currentUser, handleDelete } = props
  const history = useHistory()

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const productData = products.filter((product) => {
  //       if (product?.id === id) {
  //         return product
  //       }
  //       return null
  //     })
  //     setProduct(productData)
  //   }
  //   fetchProduct()
  //   //eslint-disable-next-line
  // }, [id])

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getOneProduct(id)
      setProduct(productData)
    }
    fetchProduct()
    //eslint-disable-next-line
  }, [id])

  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     const categoryData = await getOneCategory(id)
  //     setCategory(categoryData)
  //   }
  //   fetchCategory()
  //   //eslint-disable-next-line
  // }, [id])

  const deleteProduct = async () => {
    await handleDelete(id)
    history.push('/products')
  }

  return (
    <div className='main-container'>
      <div className='container'>
        <div>
          <img className='detail-img' src={product?.img_url} alt={product?.name} />
        </div>
        <div classname='details'>
          <h2>{product?.name}</h2>

          <h3>${product?.price}</h3>
          <p>Category: {product?.category.name}</p>
          <p>Made by <Link className='user' to={`/users/${product?.user_id}/products`}>{product?.user.username}</Link></p>
          <p>{product?.description}</p>
          {currentUser?.id === product?.user.id && (
            <div>
              <Link to={`/products/${product?.id}/edit`}><button>Edit</button></Link>
              <button onClick={deleteProduct}>Delete</button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
