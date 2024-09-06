import React, { useState } from 'react'
import sendotp from "../Photos/adminpic1.jpg"

import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../Pages/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { OtpMainFn } from '../Redux/OtpReducer/action'

const AdminEmail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth= useSelector(state=>state.OtpReducer.isAuth)
  const Validotp = useSelector(state=>state.OtpReducer.Data)

  const initial={
    Admin_email_verify:"",
    Username:"",
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
dispatch(OtpMainFn(payload)).then((res)=>{
  if( !isAuth && !Validotp ){
    alert("OTP send Successfully To Main Admin Contact Admin")
     navigate(`/adminotpverify/${Admin_email_verify}`)
  }else{
    alert("Try Again")
  }
})
     setFormdata(initial)
  }


  const {  Admin_email_verify,Username}=formdata
  return (
    <div >
{/* <Navbar/> */}
<span className=' text-2xl   md:text-4xl lg:text-6xl'  >👨‍✈️  </span>
      <span className=" h-full mt-10  font-extrabold text-transparent  text-2xl   md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-800" >
     Admin Genrated OTP On Email
      </span>
       <span className=' text-2xl   md:text-4xl lg:text-6xl'  >  👨‍✈️</span>



        <div className=' mt-10  w-[70%] m-auto   grid grid-cols-1 md:grid-cols-2 h-[500px]  gap-2  mb-[300px] sm:mb-[500px]  md:mb-[100px] ' >
            {/* div 1 */}
        <div    >
< img src={sendotp} className='   h-[30opx] w-[80%] m-auto md:h-[300px] lg:h-[400px] mt-2 rounded-2xl' alt="avatar" />
        </div>
{/* div 2 form */}
        <div >

        <br/>
        <form  onSubmit={Handlesubmit} >

        <label className='text-2xl text-violet-700' >Enter Your Name  </label>
    <br/>
    <br/>
    <input  onChange={HandleOnchange}   name="Username" value={Username} placeholder='    Username 😆'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="text" required  />
    <br/>
    <br/>


    <label className='text-2xl text-violet-700' >Enter Your Email </label>
    <br/>
    <br/>
    <input  onChange={HandleOnchange}   name="Admin_email_verify" value={ Admin_email_verify} placeholder='    Email   📧'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="email" required  />
    <br/>
    <br/>

    <input type="submit"    className=" h-7 w-32 rounded-md  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">

</input>
</form>
<div className="text-center py-2 ">
<span className='text-gray-500' >Already Register ? <Link className='text-red-500'   to="/adminlogin">Login Now  </Link> </span>
</div>
        </div>
      
        </div>
    </div>
  )
}

export default AdminEmail
