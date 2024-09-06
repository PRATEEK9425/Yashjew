import React, { useState } from 'react'
import resetpic from "../Photos/resetpic1.jpg"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Resetcheck1 = () => {
  const navigate = useNavigate()
  const initial={email:""}
  const[formdata,setFormdata]=useState(initial)


const HandleOnchange=(e)=>{

const {name,value} = e.target;
setFormdata({...formdata,[name]:value})

}

const {email}=formdata
const Handlesubmit=(e)=>{
  e.preventDefault()
 const payload = formdata
axios.post(`${process.env.React_App_Resetcheck1}`,payload)
.then((res)=>{
let result= res.data
console.log(result);
if(result==="Present"){
alert("User PRESENT GET OTP ON E-MAIL")
navigate(`/resetcheck2/${email}`)
}else{
  alert("User EMAIL NOT PRESENT")
}
}).catch((err)=>{
  alert("User EMAIL NOT PRESENT ")
console.log(err);
})

  setFormdata(initial)
}


  return (
    <div>
    <Navbar/>
        <span className=" mb-10  font-serif text-transparent text-xl sm:text-2xl  md:text-4xl lg:text-6xl  bg-clip-text bg-gradient-to-r from-pink-400 to-purple-900">
          Verify Your Email To Reset</span>

        <div className="  mt-[50px]  w-[70%] m-auto  grid  grid-cols-1 gap-2 md:grid-cols-2 h-[500px] md:gap-4 "  >
            
            <div  >
<img src={resetpic} className='h-[400px] w-[400px] rounded-2xl' alt="" />
            </div>

            <div className='md:mt-[40%] mb-20 md:mb-32 ml-[-50px] sm:ml-0 '  >
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

</div>
        </div>
    </div>
  )
}

export default Resetcheck1