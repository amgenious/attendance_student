import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navbar } from '../shared/Navbar'
import { Link } from 'react-router-dom'

export const HomeScreenindex = () => {
  const [isLoading, setIsLoading] = useState();
  const [klass, setKlass] = useState([])

  useEffect(() => {
    axios.get("https://attendance-backend-gsu3.onrender.com/classes")
    .then(response => setKlass(response.data))
    .catch(err => console.log(err))
       setTimeout(() => {
            setIsLoading(false);
          }, 2000); // Set the desired loading time in milliseconds
    },[])


  return (
    <>
    <div className='flex flex-col h-screen'>
       <Navbar />
       <div className='pt-[4.5rem] p-2'>
        <div className='px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg'>
            <Link to={'/joinclass'}>Join Class</Link>
        </div>
        <hr className='mt-2'></hr>
       </div>
       <div className='flex justify-center'>
       <div className='w-[350px]'>
       <h1 className='text-3xl text-center'> Classes Joined</h1>
       {
        isLoading ? (
          <p style={{ color: "black" }}>Loading...</p>
        ) : (
          klass.map((item) =>(
         <div key={item._id} className='w-full border h-fit mb-2 text-white bg-gray-600 p-4'>
            <p>Class Name : {item.classname}</p>
            <p>Level : {item.level}</p>
            <p>Course Name : {item.coursename}</p>
            <p>Lecturer's Name : {item.lecturername}</p>
            <div className='flex justify-center mt-4'>
                <div className='flex flex-col text-center'>
                <i className="fa-solid fa-clipboard-user"></i>
                <Link to="/takeattendance"><small>Take <br></br> Attendance</small></Link>    
                </div>
            </div>
        </div>
         ))
         )}

       </div>
       </div>
    </div>
    </>
  )
}
