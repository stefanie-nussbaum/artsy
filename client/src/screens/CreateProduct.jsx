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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h3>Create a New Product</h3>
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
            name="category_id"
            defaultValue=""
            onChange={handleChange}
            placeholder="category"
          >
            <option value='' disabled >Category</option>
            {categories.map((category) => {
              return (
                <option value={category.id}>{category.name}</option>
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
  )
}
