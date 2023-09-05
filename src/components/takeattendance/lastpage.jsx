import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../shared/Navbar';

export const Lastpage = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='pt-[4.5rem] p-2'>
         <h2 className='text-2xl'>Take Attendance</h2>
         <hr className='mt-2'></hr>

         <div className='flex flex-col justify-center items-center mt-3'>
          <p className='mb-2'>Your attendance is successful</p>
          <p>Click <Link to={"/home"}><b><i> here </i></b>to go to home</Link></p>
         </div>
        </div>
    </div>
    </>
  )
}
