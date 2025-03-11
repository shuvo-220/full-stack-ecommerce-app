import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append('name', name)
    productData.append('desc', desc)
    productData.append('price', price)
    productData.append('quantity', quantity)
    productData.append('category', category)
    productData.append('image', image)
    const token = localStorage.getItem('token')
    console.log(token)
    try {
      const res = await axios.post('http://localhost:5000/api/v1/createProduct', productData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${token}`, 
        },
        withCredentials: true,
      })
      // if(res.status === 200){
      //   navigate('/allProduct')
      // }
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='flex justify-center items-center mx-auto shadow-md p-10 rounded bg-gray-50'>
        <div className=''>
          <h1 className='font-semibold text-center text-[25px]'>Add Product</h1>

          <form onSubmit={handleSubmit}>

            <div>
              <input
                type='input'
                placeholder='Product Name'
                className='py-1 px-2 outline-none rounded border border-gray-400 w-[300px] mt-5 text-gray-500'
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type='input'
                placeholder='Product Description'
                className='py-1 px-2 outline-none rounded border border-gray-400 w-[300px] mt-5 text-gray-500'
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div>
              <input
                type='Number'
                placeholder='Product Price'
                className='py-1 px-2 outline-none rounded border border-gray-400 w-[300px] mt-5 text-gray-500'
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <input
                type='Number'
                placeholder='Quantity'
                className='py-1 px-2 outline-none rounded border border-gray-400 w-[300px] mt-5 text-gray-500'
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div>
              <input
                type='input'
                placeholder='Product Category'
                className='py-1 px-2 outline-none rounded border border-gray-400 w-[300px] mt-5 text-gray-500'
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div>
              <input
                type='file'
                className='mt-5'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button className='mt-5 bg-blue-500 py-1 px-4 text-white rounded'>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct