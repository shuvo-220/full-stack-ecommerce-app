import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <>
            <div className='flex justify-center items-center text-center'>
                <div className='mt-[55px]'>
                    <h1 className='font-semibold text-gray-600 text-xl'>Login Here</h1>
                    <div className=''>
                        <form>
                            
                            <div>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email'
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Enter Your Password'
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                />
                            </div>
                           
                           <div className='mt-2 text-gray-500'>
                           <p>Don't have an acoount?<Link className='text-blue-500' to='/signup'>Signup</Link></p>
                           </div>
                            <button className='bg-blue-400 w-full mt-5 py-2 rounded text-white'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login