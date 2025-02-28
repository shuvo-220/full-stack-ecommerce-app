import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[image, setImage] = useState('');

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('image', image);

        try {
            const res = await axios.post('http://localhost:5000/api/v1/register', formData, {
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            });
            if(res.status === 200){
                navigate('/login');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <>
        <div className='flex justify-center items-center text-center'>
                <div className='mt-[55px]'>
                    <h1 className='font-semibold text-gray-600 text-xl'>Registration Form</h1>
                    <div className=''>
                        <form onSubmit={handleSubmit} >
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter Your Name'
                                    onChange={(e)=>setName(e.target.value)}
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email'
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Enter Your Password'
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className='w-full mt-5 py-2 px-2 rounded text-gray-400 border-gray-600 border outline-none'
                                />
                            </div>
                            <div className=''>
                                <input
                                    type='file'
                                    className='mt-5'
                                    onChange={(e)=>setImage(e.target.files[0])}
                                />
                            </div>
                            <div className='mt-2 text-gray-500'>
                            <p>Already have an acoount?<Link className='text-blue-500' to='/login'>Login</Link></p>
                            </div>
                            <button className='bg-blue-400 w-full mt-5 py-2 rounded text-white'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Signup