
import React, { useState } from 'react'
import sendotp from "../Photos/admin2pic.jpg"
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
import axios from 'axios'

const AdminEmailverify  = () => {
  const navigate = useNavigate()
 
 const {useremail} = useParams()

  const initial={
    Admin_email_verify:useremail,
    email_OTP :""
  
    }
  const[formdata,setFormdata]=useState(initial)


  const HandleOnchange=(e)=>{

    const {name,value} = e.target;
    setFormdata({...formdata,[name]:value})
    
    }

    const Handlesubmit=(e)=>{
      e.preventDefault()

      // -------------converting otpstring to number-------
    const {email_OTP,Admin_email_verify} = formdata
     let OTP_tO_nUMBER =  Number(email_OTP)
     const payload={
      email_OTP:OTP_tO_nUMBER,
      Admin_email_verify:Admin_email_verify
     }
    
    //  ---------converting otpstring to number----------
    
  axios.post(`${process.env.React_App_AdminEmailverify_url1}`,payload)
  .then((res)=>{
 
let ValidUser = res.data.msg 
let UserID = res.data.uSERiD
if(ValidUser==="Admin Email verified" && UserID.length>0){
  navigate(`/adminregister/${useremail}`)
}
console.log(res.data.uSERiD);
 DeleteEntryfn(res.data.uSERiD)
  }).catch((err)=>{
    
    console.log(err);
  })
      setFormdata(initial)

  }
  
const DeleteEntryfn=(id)=>{
 let UserId = id
 
axios.delete(`${process.env.React_App_AdminEmailverify_url2}/${UserId}`)
.then((res)=>{
  console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
}

  const {email_OTP}=formdata
  
  return (
    <div>
      <Navbar  />
 <div className='mt-6'>
 <span className='text-2xl  md:text-3xl  lg:text-6xl' >🕵️ </span>
      <span className=" h-full mt-10 mb-14 font-extrabold text-transparent text-2xl  md:text-3xl  lg:text-6xl bg-clip-text bg-gradient-to-r from-red-500 to-red-900" >
        Verify Your OTP From Admin
      </span> <span className='text-2xl  md:text-3xl  lg:text-6xl' > 🕵️‍♀️</span>

        <div className=' w-[70%] m-auto mt-10   grid grid-cols-1 md:grid-cols-2 h-[500px]  gap-4  mb-[300px] sm:mb-[500px]  md:mb-[100px] ' >
            {/* div 1 */}
        <div    >
< img src={sendotp} className='rounded-lg  md:h-[300px] lg:h-[400px]  ' alt="avatar" />
        </div>
{/* div 2 form */}
        <div>
        <h1 className='text-center font-semibold... font-bold text-red-700 text-2xl '>
            ENTER OTP RECEIVED ON ADMIN MAIL </h1>
        <br/>
        <form  onSubmit={Handlesubmit} >

    <label className='text-2xl text-violet-700' >Enter Your Email  📧</label>
    <br/>
    <br/>
    <input onChange={HandleOnchange}   name="Admin_email_verify" value={useremail} placeholder='    Email 📧'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="email" required  />
    <br/>
    <br/>
    <label className='text-2xl text-violet-700' >Collect OTP From Admin 🤫</label>
    <br/>
    <br/>
    <input onChange={HandleOnchange}   name="email_OTP" value={email_OTP} placeholder='    OTP  🤫'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="number" required  />
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
export default AdminEmailverify