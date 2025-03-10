import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const AllProduct = () => {

  const[products, setProducts] = useState([])

  const getAllPRoduct=async()=>{
    const {data} = await axios.get('http://localhost:5000/api/v1/products')
    const products = data;
    setProducts(products)
  }

  useEffect(()=>{
    getAllPRoduct();
  },[])


  return (
    <>
      <div className='md:p-10 flex justify-center flex-col'>
        <h1 className='text-[25px] py-5 text-center font-semibold'>Product List</h1>
        <table class="table-auto">
          <thead className=''>
            <tr>
              <th className='md:px-5 text-gray-500'>#ID</th>
              <th className='md:px-5 text-gray-500'>Product Name</th>
              <th className='md:px-5 text-gray-500'>Stock</th>
              <th className='md:px-5 text-gray-500'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product)=>(
                <tr className=''>
                <td className='text-center text-gray-400'>{product._id}</td>
                <td className='text-center text-gray-400'>{product.name}</td>
                <td className='text-center text-gray-400'>{product.stock}</td>
                <td className='flex gap-5 justify-center'>
                  <button >
                    <EditIcon className='text-green-500' />
                  </button>
                  <button>
                    <DeleteIcon className='text-red-500' />
                  </button>
                </td>
              </tr>
              ))
            }
           
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllProduct