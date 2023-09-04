import React, { useRef } from "react";
import { Navbar } from "../shared/Navbar";
import {Link} from 'react-router-dom'

export const UpdateProfileindex = () => {
  //     const webcamRef = useRef(null);
  //     const capture =() => {
  //         const imageSrc1 = webcamRef.current.getScreenshot();
  //         console.log('Captured image:', imageSrc1);
  //   };
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
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="pt-[4.5rem] p-2">
          <h2 className="text-2xl">Update Profile</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2">
            <form className="flex flex-col justify-center items-center">
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="index number"
                type="text"
                required
              />
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="full name"
                type="text"
                required
              />
              <div>
                {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" mirrored={true}/>
        <div className='cursor-pointer' onClick={capture}>Take picture</div> */}
                <div className="cursor-pointer" onClick={startWebcam}>
                  Start Webcam
                </div>
                <video className="w-[350px] h-fit" ref={videoRef} autoPlay />
                <div onClick={capture}>Capture from Webcam</div>
                <canvas className="w-[350px] h-fit" ref={canvasRef} />
              </div>
              <div className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg">
               <Link to={'/home'}><p>Update Profile</p></Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
