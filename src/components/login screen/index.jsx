import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreenindex = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-evenly text-center  p-4'>
            <h1 className='text-3xl font-bold mb-5'>LOGIN</h1>
            <div>
                <form className='flex flex-col'>
                    <input className='w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6' placeholder='email' type='email' required/>
                    <input className='w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6' placeholder='password' type='password' required/>
                    <Link to={"/home"}><button className='bg-black text-white px-12 py-4 border-2 hover:border-black hover:text-black hover:bg-white mb-5'>LOGIN</button></Link>
                </form>
            </div>
            <div>
                <p><Link to={"/signup"}><i>Signup</i></Link></p>
            </div>
        </div>
    </div>
    </>
  )
}
