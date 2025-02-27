import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <>
            <div className='py-[15px] px-[80px] flex items-center justify-between bg-gray-100 text-gray-600'>
                <div className='text-[25px] font-bold'>
                    <Link to='/'>O<span className='text-yellow-500'>Shop</span></Link>
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        <Link to='/cart'>
                            <ShoppingCartIcon />
                        </Link>
                    </div>
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar