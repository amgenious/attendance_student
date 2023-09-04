import React, { useRef } from 'react'
import { Navbar } from '../shared/Navbar'
import { Link } from 'react-router-dom';

export const Takeattendanceindex = () => {
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
            <p>Class Name :</p>
            <p>Level :</p>
            <p>Course Name :</p>
            <p>Lecturer's Name :</p>
            <input className='h-[35px] w-full border-2 p-6 bg-white text-white placeholder:text-gray mb-6 mt-3' placeholder='enter unique code' type='text' required/>
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
                <button><Link to={'/lastpage'}>Validate</Link></button>    
                    </div>
                </div>
            </div>
        </div>    
            </div>
         </div>
        </div>
    </div>
    </>
  )
}
