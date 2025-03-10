import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import {NavLink} from 'react-router-dom'
import AddProduct from '../addProduct/AddProduct';

const AdminProfile = () => {

  const menu = [
    {
      path:'/addproduct',
      name:'Add Product',
      icon:<AddBoxIcon />
    },
    {
      path:'/allproduct',
      name:'All Products',
      icon:<InventoryIcon />
    },
    {
      path:'/allorder',
      name:'Order',
      icon:<BookmarkBorderIcon />
    },
    {
      path:'/users',
      name:'Users',
      icon:<GroupIcon />
    },
  ]

  return (
    <>
      <div className='p-5 flex gap-5'>
          <div className=' shadow-md'>
            {
              menu.map((item)=>(
                <div className='flex m-4 w-[150px]'>
                  <NavLink to={item.path} className={({isActive})=>isActive ? 'font-semibold text-gray-700' : 'font-semibold text-gray-500'}><span className='mr-2'>{item.icon}</span>{item.name}</NavLink>
                </div>
              ))
            }
          </div>

          {/* product */}
          <div className='p-5 mx-auto'>
            <AddProduct />
          </div>
      </div>
    </>
  )
}

export default AdminProfile