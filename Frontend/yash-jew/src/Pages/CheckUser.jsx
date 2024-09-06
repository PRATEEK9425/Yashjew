import React, { useState } from 'react'
import checkuser from "../Photos/checkusercartoon.jpg"
import axios from "axios"

import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const CheckUser = () => {
 
  const navigate = useNavigate()
    const initial={email:""}
    const[formdata,setFormdata]=useState(initial)
 

const HandleOnchange=(e)=>{

const {name,value} = e.target;
setFormdata({...formdata,[name]:value})

}


const Handlesubmit=(e)=>{
    e.preventDefault()
   const payload = formdata
axios.post(`${process.env.React_App_CheckUserurl}`,payload)
.then((res)=>{
let result= res.data
console.log(result);
if(result==="Present"){
navigate(`/login`)
alert("User Already Exist Login Please")
}else{
navigate(`/verifyemail/${email}`)
alert("Verify Your Email Address")
}
}).catch((err)=>{
  console.log(err);
})
    setFormdata(initial)
}
const {email}=formdata



  return (<div>
   <Navbar/>
  <div  className='m-auto w-[80%]  mt-[2%] ' >

       <span className="font-serif text-transparent text-xl sm:text-2xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-orange-900">
        Verify User Email 
         </span>
         <span className='text-xl sm:text-2xl  md:text-4xl lg:text-6xl'  >  📥</span>
       <br/>
       <div className=" mt-[50px]  w-[80%] m-auto  grid  grid-cols-1 gap-2 md:grid-cols-2 h-[500px] md:gap-4  "  >
           {/* div 1 */}
           <div  >
<img  className='rounded-2xl '  src={checkuser} alt="" />
           </div>
           {/* div 2 */}

           {/* Form  */}
           <div   >
<div className='   md:mt-[40%] mb-20 md:mb-32 ml-[-50px] sm:ml-0 '  >
<form  onSubmit={Handlesubmit} >
   <label className='text-2xl text-violet-700' >Enter Your Mail  📧</label>
   <br/>
   <br/>
   <input onChange={HandleOnchange}   name="email" value={email} placeholder='    Email  📧'  className='rounded-md h-9 w-80 border  hover:border-blue-400 '   type="text"   />
   <br/>
   <br/>
   <input type="submit"    className=" h-7 w-32 rounded-md  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">

</input>
</form>
<div className="text-center py-4 ">
<span className='text-gray-500' >Reset Password ? <Link className='text-red-500'   to="/resetcheck1">Reset Password </Link> </span>
</div>
<div className="text-center py-2 ">
<span className='text-gray-500' >Already Register ? <Link className='text-red-500'   to="/login">Login Now  </Link> </span>
</div>
</div>
           </div>
       </div>
   </div>
  </div>
  
  )
}

export default CheckUser