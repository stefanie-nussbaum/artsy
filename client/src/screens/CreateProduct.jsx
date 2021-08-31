import React, { useState } from 'react'

export default function CreateProduct(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    price: 0,
    description: '',
    category_id: '',
  })
  const { handleCreate, categories } = props

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
            handleCreate(formData);
          }}
          className='container'
        >
          <h3>Create a New Product</h3>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
            />
          </label>
          <br />
          <label>
            Category:
            <select
              type="text"
              name="category_id"
              defaultValue=""
              onChange={handleChange}
              placeholder="category"
              className='category'
            >
              <option value='' disabled >Category</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>{category.name}</option>
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
              placeholder='Image URL'
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
              placeholder='Price'
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
              placeholder='Description'
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
