import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../screens/Products'
import { getAllProducts } from '../services/products'

export default function MainContainer(props) {
  const [products, setProducts] = useState([])

  const { currentUser } = props

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts()
      setProducts(productList)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      Main Container
      <Switch>
        <Route path='/products'>
          <Products products={products} />
        </Route>
      </Switch>
    </div>
  )
}
