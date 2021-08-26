import React, { useEffect, useState } from 'react'

export default function MainContainer(props) {
  const [products, setProducts] = useState([])

  const { currentUser } = props

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllFoods()
      setProducts(productList)
    }
  }, [])

  return (
    <div>
      Main Container
    </div>
  )
}
