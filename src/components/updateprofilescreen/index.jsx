import React, { useState } from "react";
import { Navbar } from "../shared/Navbar";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

export const UpdateProfileindex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const history = useNavigate()
  const [indexnumber, setIndexNumber] = useState('')
  const [fullname, setFullName] = useState('')
  const [picture, setPicture] = useState('')


  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("https://attendance-backend-gsu3.onrender.com/profile",{
            indexnumber,fullname,picture
        })
        .then(res =>{
            if(res.data="created"){
                history('/home')
            }
            else if(res.data="exist"){
                alert("cannot update profile")
            }
        })
    }
    catch(e){
        console.log(e)
    }
}


  function guardarArchivo(e) {
    var file = e.target.files[0]; //the file
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbxdWO-4oHwr2lCUyCAKbBrwOwajff34XH9QUjabE0wmX7Yfy_3BikuI-_9XnCNqsjqK/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          setData(a);
        })
        .catch((e) => console.log(e));
        setTimeout(() => {
          setIsLoading(false);
        }, 2000); 
    };
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="pt-[4.5rem] p-2">
          <h2 className="text-2xl">Update Profile</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2 flex flex-col">
            <div>
              <div>
                <label>Upload Image One</label>
                <input type="file" accept="png/jpeg"  />
              </div>
              <div>
                <label>Upload Image Two</label>
                <input type="file" accept="png/jpeg"  />
              </div>
              <div>
                <label>Upload Image Three</label>
                <input
                  type="file"
                  accept="png/jpeg"
                  id="customFile"
                  onChange={(e) => guardarArchivo(e)}
                />
              </div>
              <div>
                <p>Copy the id below</p>

                <p>
                  {
                    isLoading ? (
                      <p><b>Generating image id ...</b></p>
                    ) :
                  JSON.stringify(data.id)
                  }
                  </p>
              </div>
            </div>

            <form
              className="flex flex-col justify-center items-center"
              method="POST"
            >
              <input
              onChange={(e)=>{setIndexNumber(e.target.value)}}
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="index number"
                type="text"
                required
              />
              <input
              onChange={(e)=>{setFullName(e.target.value)}}
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="full name"
                type="text"
                required
              />
              <input
              onChange={(e)=>{setPicture(e.target.value)}}
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="image id"
                type="text"
                required
              />
              <div></div>
              <div className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg">
                  <p onClick={submit}>Update Profile</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
