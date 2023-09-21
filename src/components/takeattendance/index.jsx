import React, { useRef, useState, useEffect } from 'react'
import { Navbar } from '../shared/Navbar'
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios'

export const Takeattendanceindex = () => {
  const history = useNavigate()
  const [indexnumber, setIndexNumber] = useState('')
  const [uniquecode, setUniqueNumber] = useState('')


  async function submit(e) {
  e.preventDefault();

  try {
    const response = await axios.post("https://attendance-backend-gsu3.onrender.com/studentattendance", {
      indexnumber:indexnumber,
      uniquecode:uniquecode
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.data === "created") {
      history('/lastpage');
    } else if (response.data === "notcreated") {
      alert('Class not created');
    }
  } catch (error) {
    console.error('Error creating class:', error);
  }
}




    const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };
  const capture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // Set the canvas dimensions to match the video frame
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the captured image as a data URL
      const imageSrc = canvas.toDataURL("image/jpeg");
      console.log("Captured image:", imageSrc);
    }
  };
  return (
    <>
    <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='pt-[4.5rem] p-2'>
         <h2 className='text-2xl'>Take Attendance</h2>
         <hr className='mt-2'></hr>

         <div className='flex flex-col justify-center items-center mt-3'>
            <div className='w-[350px]'>
            <div className='w-full border h-fit mb-2 text-white bg-gray-600 p-4'>
              <form method='POST'>
            <input 
            onChange={(e)=>{setIndexNumber(e.target.value)}}
            className='h-[35px] w-full border-2 p-6 bg-white text-black placeholder:text-gray mb-6 mt-3' placeholder='enter index number' type='text' required/>
            <input
             onChange={(e)=>{setUniqueNumber(e.target.value)}}
            className='h-[35px] w-full border-2 p-6 bg-white text-black placeholder:text-gray mb-6 mt-3' placeholder='enter unique code' type='text' required/>
            <div>
                <div className="cursor-pointer" onClick={startWebcam}>
                  Start Webcam
                </div>
                <video className="w-[350px] h-fit" ref={videoRef} autoPlay />
                <div onClick={capture} className="cursor-pointer">Capture from Webcam</div>
                <canvas className="w-full h-fit" ref={canvasRef} />
              </div>
            <div className='mt-4'>
                <div className='flex flex-col items-center'>
                    <div className='px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg'>
                <button onClick={submit}>Validate</button>    
                    </div>
                </div>
            </div>
              </form>
        </div>    
            </div>
         </div>
        </div>
    </div>
    </>
  )
}
