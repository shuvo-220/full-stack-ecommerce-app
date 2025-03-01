import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Store } from '../../Store';

const Navbar = () => {

    const{state, dispatch} = useContext(Store)
    const{user} = state;

    const[open, setOpen] = useState(false)

    const navigate = useNavigate();

    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        localStorage.removeItem('user');
        setOpen(false)
        navigate('/login');
    }

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
                        {
                            user ? <div className='relative'>
                                <img onClick={()=>setOpen(!open)} className='cursor-pointer w-10 h-10 rounded-full' src={`http://localhost:5000/uploads/${user.user.image}`} />
                               
                            </div> :
                            <Link to='/login'>Login</Link>
                        }

                        
                    </div>
                </div>
            </div>

            {
                                    open ? <div className='absolute right-12 top-14'>
                                    <ul className='flex flex-col gap-2 bg-gray-100 py-5 px-3 rounded shadow-md'>
                                        <Link to='/profile' className='text-gray-600'>Profile</Link>
                                        <Link to='/order' className='text-gray-600'>My Order</Link>
                                        <Link onClick={handleLogout}  className='text-gray-600'>Logout</Link>
                                    </ul>
                                </div> : ''
                                }
        </>
    )
}

export default Navbar