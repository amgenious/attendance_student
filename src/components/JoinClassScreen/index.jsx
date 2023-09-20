import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import { Navbar } from '../shared/Navbar'

export const JoinClassindex = () => {

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
         <h2 className='text-2xl'>Join Class</h2>
         <hr className='mt-2'></hr>

         <div className='flex flex-col justify-center items-center mt-3'>
            <h1 className='text-3xl text-center'> List of Classes</h1>
            <input className='w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3' placeholder='search class' type='text' required/>
            <div className='w-[350px]'>
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
            <div className='mt-4'>
                <div className='flex flex-col items-center'>
                    <div className='px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg'>
                <small>Join Class</small>    
                    </div>
                </div>
            </div>
        </div>    
                 ))
                 )}

            </div>
         </div>
        </div>
    </div>
    </>
  )
}
