import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
// import { getAllCategories } from '../services/categories'

export default function Products(props) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filterByCategory, setFilterByCategory] = useState()
  const { currentUser, products, categories } = props

  useEffect(() => {
    setFilteredProducts(products)
    console.log(filteredProducts)
    // eslint-disable-next-line
  }, [products])

  // useEffect(() => {
  //   if (filterByCategory !== '') {
  //     setFilteredProducts(products.filter((product) => {
  //       if (product.category_id === filterByCategory) {
  //         return product
  //       }
  //       return null
  //     }))
  //   } else {
  //     setFilteredProducts(products)
  //     console.log(filteredProducts)
  //   }
  // }, [filterByCategory, products, categories])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilterByCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(filterByCategory)
  }

  return (
    <div className='main-container'>
      <h2>Products</h2>
      <select
        type="text"
        name="category_id"
        defaultValue=''
        onChange={handleChange}
        placeholder="category"
      >
        <option value='' >All Categories</option>
        {categories.map((category) => {
          return (
            <option value={category.id}>{category.name}</option>
          )
        })}
      </select>
      <div className='container'>

        {filteredProducts.map((product, key) => {
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
