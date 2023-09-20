import React, {useState} from 'react'
import axios from "axios"
import { Link  , useNavigate} from 'react-router-dom'

export const LoginScreenindex = () => {
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("https://attendance-backend-gsu3.onrender.com/studentlogin",{
               email,password
            })
            .then(res =>{
                if(res.data="exist"){
                    history('/home')
                }
                else if(res.data="notexist"){
                    alert("Wrong Credentials")
                }
                else if(res.data="notexisted"){
                    alert("Not signed up yet")
                    history('/signup')
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }



  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-evenly text-center  p-4'>
            <h1 className='text-3xl font-bold mb-5'>LOGIN</h1>
            <div>
                <form className='flex flex-col' method='POST'>
                    <input onChange={(e)=>{setEmail(e.target.value)}}  className='w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6' placeholder='email' type='email' required/>
                    <div className='flex relative'>
                    <input 
                    type={passwordVisible ? 'text' : 'password'}
                    onChange={(e)=>{setPassword(e.target.value)}} className='w-[350px] h-[35px] border-2 text-white p-6 bg-gray-600 placeholder:text-gray mb-6' placeholder='password' required/>
                    <p className='absolute right-2 top-3 text-white' onClick={togglePasswordVisibility} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        {passwordVisible ? <i className="fa-solid fa-eye"> </i> : <i className="fa-solid fa-eye-slash"></i>}
                    </p>
                    </div>
                    <button onClick={submit} className='bg-black text-white px-12 py-4 border-2 hover:border-black hover:text-black hover:bg-white mb-5'>LOGIN</button>
                </form>
            </div>
            <div>
                <p><Link to={"/signup"}><i>Signup</i></Link></p>
            </div>
        </div>
    </div>
    </>
  )
}
