import React from 'react'
import { Link } from 'react-router-dom'

export const StartScreenindex = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-evenly text-center  p-4'>
            <h1 className='text-3xl'>Attendance System</h1>
            <h1 className='text-2xl mb-10'>Student's Dashboard</h1>

            <Link to={"/login"}><button className='bg-black text-white px-12 py-4 border-2 hover:border-black hover:text-black hover:bg-white mb-5'>LOGIN</button></Link>
            <Link to={"/signup"}><button className='bg-black text-white px-12 py-4 border-2 hover:border-black hover:text-black hover:bg-white'>SIGN UP</button></Link>
        </div>
    </div>
    </>
  )
}
