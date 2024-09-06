
import { Link, useNavigate } from 'react-router-dom'

import styles from "../styles/Username.module.css"
import { useState } from 'react'
import loginpic from "../Photos/loginimg.jpg"
import {useSelector} from "react-redux"


import {useParams } from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar'



const Register = () => {
  const UserRegistercheck = useSelector(store=>store.RegisterReducer.data)
  const navigate= useNavigate()
  
  let { useremail } = useParams();

 const initial={
name:"",
email:useremail,
password:"",
Mob_number:""

 }
  const[formdata,setFormdata]=useState(initial)
    

  const Handlechange=(e)=>{
const {name,value}=e.target;
setFormdata({...formdata,[name]:value})
  }
  const Handlesubmit=(e)=>{
e.preventDefault()
const payload = formdata
axios.post(`${process.env.React_App_Register_url}`,payload)
.then((res)=>{
  
  let status = res.data
  if(status==="Present"){
alert("User Already Exist Please Login ")
navigate("/login")
  }else{
    alert("Registered Successfully")
    navigate("/login")
  }
})
.catch((err)=>{
  console.log(err);
})



// setFormdata(initial)
  }
  const {name,password,Mob_number} =formdata
  return (
    <div>
<Navbar/>
    <div className="container mx-auto mt-[-100px]  -mb-32  md:-mb-40 ">

      <div className='flex justify-center  items-center h-[1000px] '  >
<div className={styles.glass} >
  <div className='title flex flex-col items-center   ' >
  <h4 className=' mt-[-70px]   md:mt-[-80px] text-cyan-600  text-5xl font-bold' >Register</h4>
<span className='  text-cyan-900   py-4 text-xl w-2/3 text-center  text-gray-5 '  >
  Register To use All Facilities
  </span>
  </div>

<form className='py-1' onSubmit={Handlesubmit}  >
<div className='profile flex justify-center py-4'   >

  <img src={loginpic} className={styles.profile_img} alt="avatar" />
                 
                  

</div>
<div className='textbox flex flex-col items-center py-4  ' >
<input  required  name="name" value={name} onChange={Handlechange} className={styles.textbox}   type="text" placeholder='Username*' />
  <br/>
  
  <input  required  name="Mob_number" value={Mob_number} onChange={Handlechange} className={styles.textbox}   type="number" placeholder='Mobile Number*' />
  <br/>
  <input  required name="password" value={password} onChange={Handlechange} className={styles.textbox}   type="password" placeholder='Password* ' />
  <br/>
  <input type="submit" value='Register'  className={styles.btn} />

</div>

<div className="text-center py-4 ">
<span className='text-gray-500' >Already Register ? <Link className='text-red-500'   to="/login">Login Now  </Link> </span>
</div>

</form>


</div>
      </div>
    </div>
    {
  UserRegistercheck==="User Registered" ?
  <div className='font-bold mt-20 md:ml-[1080px] rounded-lg  text-xl text-center m-auto  bg-green-800  w-[250px] text-white border '  >

    Registration Successful..!!
    </div>
  : 
<div className=' font-bold mt-20 md:ml-[1080px] rounded-lg  text-xl text-center m-auto  bg-red-800  w-[250px] text-white border '  >

Please Fill Details..

</div>
}
  

    </div>
  )
}

export default  Register