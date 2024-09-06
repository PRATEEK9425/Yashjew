import React, { useState } from 'react'
import resetpic from "../Photos/changepassword.jpg"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar';



const ResetFinal = () => {
  const {useremails} = useParams()
  const navigate = useNavigate()
  const initial={email:useremails,password:""}

  const[formdata,setFormdata]=useState(initial)


const HandleOnchange=(e)=>{

const {name,value} = e.target;
setFormdata({...formdata,[name]:value})

}

const {email,password}=formdata
const Handlesubmit=(e)=>{
  e.preventDefault()
 const payload = formdata
 console.log(payload);
axios.patch(`${process.env.React_App_ResetFinal}`,payload)
.then((res)=>{
let result= res.data
console.log(result);

if(result==="Updated successfully"){
alert("Password Updated Successfully")
navigate("/")
}
else{
  alert("Password NOT Updated")
}

}).catch((err)=>{
  alert("Password NOT Updated")
console.log(err);
})

  setFormdata(initial)
}


  return (
    <div>
   <Navbar/>
      <span className='text-xl sm:text-2xl  md:text-4xl lg:text-6xl' > ✍️ </span>
        <span className=" mb-10  font-extrabold text-transparent text-xl sm:text-2xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700">
          Enter Your New Password</span>
          <span className='text-xl sm:text-2xl  md:text-4xl lg:text-6xl' > ✍️</span>
        <div className=" w-[80%] m-auto mt-[50px]  grid  grid-cols-1 gap-2 md:grid-cols-2 h-[500px] md:gap-4 "  >
            
            <div  >
<img src={resetpic} className=' rounded-2xl w-[80%] h-[80%]' alt="" />
            </div>

            <div className='md:mt-[20%] mb-20 md:mb-32 ml-[-50px] sm:ml-0 '  >
<form  onSubmit={Handlesubmit} >
    <label className='text-2xl text-violet-700' >Enter Your Mail  📧</label>
    <br/>
    <br/>
    <input onChange={HandleOnchange}   name="email" value={email} placeholder='    Email  📧'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="text" required  />
    <br/>
    <br/>
    <label className='text-2xl text-violet-700' >Enter Your Password </label>
    <br/>
    <br/>
    <input onChange={HandleOnchange}   name="password" value={password} placeholder='Enter Your Updated Password'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="password"  required />
    <br/>
    <br/>
    <input type="submit"    className=" h-7 w-32 rounded-md  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">

</input>
</form>

</div>
        </div>
    </div>
  )
}



export default ResetFinal