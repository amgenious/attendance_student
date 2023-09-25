import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    let [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 bg-black flex fixed justify-between items-center p-2'>
        <div className='text-white'>
        <div onClick={()=> setOpen(!open)} className={`text-2xl 2xl:hidden sm:visible text-box_color z-10 absolute ${open ? 'left-64':'left-2'} top-5`}>
       <i className={open ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i> 
    </div>
    <div  className={`z-50 mt-2 2xl:block ${open ? 'flex':'hidden'}`}>
        <ol className='flex'>
            <li className='mr-2'><Link to="/updateprofile">Update Profile</Link></li>
            <li className='mr-2'><Link to="/home">Home</Link></li>
            <li><Link to={"/"}>Logout</Link></li>
        </ol>
    </div>
        </div>
        <div className='text-white'>
            {/* <p>User Name</p> */}
        </div>
    </div>
  )
}
