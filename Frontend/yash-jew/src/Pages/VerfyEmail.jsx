import React, { useState } from 'react'
import sendotp from "../Photos/otp.jpg"

import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'


const VerfyEmail = () => {
  const {useremails} = useParams()
  const navigate = useNavigate()


  const initial={useremail:useremails,
    username:"",
    email_OTP :Math.floor(Math.random()*1000+999),
    isAuth :true}
  const[formdata,setFormdata]=useState(initial)


  const HandleOnchange=(e)=>{

    const {name,value} = e.target;
    setFormdata({...formdata,[name]:value})
    
    }

    const Handlesubmit=(e)=>{
      e.preventDefault()
     const payload = formdata

  axios.post(`${process.env.React_App_VerfyEmail}`,payload)
  .then((res)=>{
 
 let Responsefromdb = res.data
 console.log(Responsefromdb);
 if(Responsefromdb==="Otp send Successfully"){
  alert("OTP send Successfully")
navigate(`/otpchecking/${useremail}`)

 }else{
  alert("Invalid Email Address or Otp")
 }
 
  }).catch((err)=>{
    console.log(err);
  })
      setFormdata(initial)
  }
  const { useremail,username}=formdata
  return (
    <div>
      <Navbar/>
   
    <div className='mt-6'>

<span className='text-2xl   md:text-4xl lg:text-6xl'  >🏝️ </span>
      <span className=" h-full mt-10  font-serif text-transparent  text-2xl   md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-300 to-orange-800" >
       Get Your OTP On Email..
      </span>
      <span className='text-2xl   md:text-4xl lg:text-6xl'  >  🏝️</span>


        <div className=' mt-10  w-[70%] m-auto   grid grid-cols-1 md:grid-cols-2 h-[500px]  gap-2  mb-[300px] sm:mb-[500px]  md:mb-[100px] ' >
            {/* div 1 */}
        <div    >
< img src={sendotp} className=' h-[30opx] w-full md:h-[300px] lg:h-[480px] mt-2 rounded-2xl' alt="avatar" />
        </div>
{/* div 2 form */}
        <div >

        <br/>
        <form  onSubmit={Handlesubmit} >

        <label className='text-2xl text-violet-700' >Enter Your Name  </label>
    <br/>
    <br/>
    <input  onChange={HandleOnchange}   name="username" value={username} placeholder='    Username 😆'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="text" required  />
    <br/>
    <br/>


    <label className='text-2xl text-violet-700' >Enter Your Email </label>
    <br/>
    <br/>
    <input  onChange={HandleOnchange}   name="useremail" value={useremail} placeholder='    Email   📧'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="email" required  />
    <br/>
    <br/>

    <input type="submit"    className=" h-7 w-32 rounded-md  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">

</input>
</form>
        </div>

        </div>
    </div>
    </div>
  )
}

export default VerfyEmail