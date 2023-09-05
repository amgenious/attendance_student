import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    let [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 bg-black flex fixed justify-between items-center p-2'>
        <div className='text-white'>
        <div onClick={()=> setOpen(!open)} className={`text-2xl 2xl:hidden sm:visible text-box_color z-10 absolute ${open ? 'left-52':'left-2'} top-5`}>
       <i className={open ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i> 
    </div>
    <div  className={`z-50 mt-2 2xl:block ${open ? 'flex':'hidden'}`}>
        <ol className='flex'>
            <li className='mr-4'><Link to="/updateprofile">Update Profile</Link></li>
            <li className='mr-4'><Link to="/home">Home</Link></li>
            <li><a href="#">Logout</a></li>
        </ol>
    </div>
        </div>
        <div className='text-white'>
            <p>User Name</p>
        </div>
    </div>
  )
}