import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import ProductDetails from '../screens/ProductDetails'
import Products from '../screens/Products'
import { deleteProduct, getAllProducts, postProduct, putProduct } from '../services/products'
import { getAllCategories } from '../services/categories'
import CreateProduct from '../screens/CreateProduct'
import EditProduct from '../screens/EditProduct'
import UserProfile from '../screens/UserProfile'
import { getOneUser } from '../services/users'

export default function MainContainer(props) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const history = useHistory()

  const { currentUser } = props

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts()
      setProducts(productList)
      console.log(productList)
      console.log(products)
      console.log(currentUser)
    }
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories()
      setCategories(categoryList)
    }
    fetchCategories()
    // eslint-disable-next-line
  }, [])

  const handleCreate = async (formData) => {
    const productData = await postProduct(formData)
    setProducts((prevState) => [...prevState, productData])
    history.push('/products')
  }

  const handleUpdate = async (id, formData) => {
    const productData = await putProduct(id, formData)
    setProducts((prevState) =>
      prevState.map((product) => {
        return product.id === Number(id) ? productData : product
      })
    )
    history.push('/products');
  }

  const handleDelete = async (id) => {
    await deleteProduct(id)
    setProducts((prevState) => prevState.filter((product) => product.id !== id))
  }

  const getUser = async (id) => {
    const userData = await getOneUser(id)
    return userData
  }

  return (
    <div>
      <Switch>
        <Route path='/users/:id/products'>
          <UserProfile products={products} getUser={getUser} />
        </Route>
        <Route path='/products/:id/edit'>
          <EditProduct products={products} categories={categories} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/products/create'>
          <CreateProduct categories={categories} handleCreate={handleCreate} />
        </Route>
        <Route path='/products/:id'>
          <ProductDetails products={products} handleDelete={handleDelete} />
        </Route>
        <Route path='/products'>
          <Products currentUser={currentUser} products={products} />
        </Route>
      </Switch>
    </div>
  )
}
