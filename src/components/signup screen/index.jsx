import React from 'react'
import { Link } from 'react-router-dom'

export const SignupScreenindex = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-evenly text-center  p-4'>
            <h1 className='text-3xl font-bold mb-5'>SIGNUP</h1>
            <div>
                <form className='flex flex-col'>
                    <input className='w-[350px] h-[35px] border-2 text-white p-6 bg-gray-600 placeholder:text-gray mb-6' placeholder='username' type='text' required/>
                    <input className='w-[350px] h-[35px] border-2 text-white p-6 bg-gray-600 placeholder:text-gray mb-6' placeholder='email' type='email' required/>
                    <input className='w-[350px] h-[35px] border-2 text-white p-6 bg-gray-600 placeholder:text-gray mb-6' placeholder='password' type='password' required/>
                    <Link to={"/login"}><button className='bg-black text-white px-12 py-4 border-2 hover:border-black hover:text-black hover:bg-white mb-5'>SIGN UP</button></Link>
                </form>
            </div>
            <div>
                <p><Link to={"/login"}><i>Login</i></Link></p>
            </div>
        </div>
    </div>
    </>
  )
}
