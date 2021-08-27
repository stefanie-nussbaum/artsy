import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import ProductDetails from '../screens/ProductDetails'
import Products from '../screens/Products'
import { getAllProducts, postProduct } from '../services/products'
import CreateProduct from '../screens/CreateProduct'
import EditProduct from '../screens/EditProduct'

export default function MainContainer(props) {
  const [products, setProducts] = useState([])
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

  const handleCreate = async (formData) => {
    const productData = await postProduct(formData);
    setProducts((prevState) => [...prevState, productData]);
    history.push('/products');
  }

  return (
    <div>
      Main Container
      <Switch>
        <Route path='products/:id/edit'>
          <EditProduct />
        </Route>
        <Route path='products/create'>
          <CreateProduct handleCreate={handleCreate} />
        </Route>
        <Route path='/products/:id'>
          <ProductDetails products={products} />
        </Route>
        <Route path='/products'>
          <Products currentUser={currentUser} products={products} />
        </Route>
      </Switch>
    </div>
  )
}
