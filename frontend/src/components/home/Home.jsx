import React from 'react'
import Products from '../products/Products'

const Home = () => {
  return (
    <>
      <div className='p-5'>
        <div>
          <h1 className='font-semibold text-grey-500 text-[35px] text-center'>Products</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
          <div className=''>category</div>
          <div>
            <Products />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home