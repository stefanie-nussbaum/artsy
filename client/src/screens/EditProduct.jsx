import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getOneProduct } from '../services/products'

export default function EditProduct(props) {
  // const [product, setProduct] = useState()
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    price: 0,
    description: '',
    category_id: '',
  })
  const { handleUpdate, categories, products } = props
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const productItem = products.find((product) => product.id === Number(id));
      // setProduct(productItem)
      setFormData({
        name: productItem?.name,
        img_url: productItem?.img_url,
        price: productItem?.price,
        description: productItem?.description,
        category_id: productItem?.category_id
      })
    }
    if (products.length) {
      prefillFormData()
    }
  }, [products, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='main-container'>
      <div className='container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
          }}
          className='container'
        >
          <h3>Update Product</h3>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Category:
            <select
              type="text"
              name="category"
              defaultValue={formData.category_id}
              onChange={handleChange}
              placeholder="category"
              className='category'
            >
              {/* <option value='' disabled >Category</option> */}
              {categories.map((category, key) => {
                if (formData?.category_id === category?.id) {
                  return (
                    <option key={key} value={category?.id} selected>{category.name}</option>
                  )
                }
                return (
                  <option key={key} value={category.id}>{category.name}</option>
                )
              })}
            </select>
          </label>
          <br />
          <label>
            Image URL:
            <input
              type='text'
              name='img_url'
              value={formData.img_url}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type='text'
              name='price'
              value={formData.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              type='text'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
