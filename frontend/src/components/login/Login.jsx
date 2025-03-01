import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Store} from '../../Store';

const Login = () => {

    const{state, dispatch} = useContext(Store)

    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/v1/login',{
                email,password
            });
            dispatch({type:'LOGIN', payload:res.data});
            localStorage.setItem('user', JSON.stringify(res.data))
            if(res.status === 200){
                navigate('/')
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className='flex justify-center items-center text-center'>
                <div className='mt-[55px]'>
                    <h1 className='font-semibold text-gray-600 text-xl'>Login Here</h1>
                    <div className=''>
                        <form onSubmit={handleSubmit} >
                            
                            <div>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email'
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Enter Your Password'
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                    onChange={(e)=>setPassword(e.target.value)}
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