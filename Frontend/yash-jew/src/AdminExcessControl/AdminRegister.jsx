import {  Link, useNavigate } from 'react-router-dom'
import styles from "../styles/Username.module.css"
import { useState } from 'react'
import loginpic from "../Photos/loginimg.jpg"
import {useParams } from 'react-router-dom';
import axios from 'axios'
import Navbar from '../Pages/Navbar'



const AdminRegister = () => {

  const navigate= useNavigate()
  
  let { useremail } = useParams();

 const initial={
Admin_name:"",
Admin_email:useremail,
Admin_password:"",


 }
  const[formdata,setFormdata]=useState(initial)
    

  const Handlechange=(e)=>{
const {name,value}=e.target;
setFormdata({...formdata,[name]:value})
  }
  const Handlesubmit=(e)=>{
e.preventDefault()
const payload = formdata

axios.post(`${process.env.React_App_AdminRegister}`,payload)
.then((res)=>{

  if(res.data==="Admin Registered Successfully"){
alert(res.data)
navigate("/adminlogin")
  }else{
    alert("Admin data Already exist Login Please")
    navigate("/adminlogin")
  }
})
.catch((err)=>{
  console.log(err);
})

setFormdata(initial)
  }
  const {Admin_name,Admin_password} =formdata
  return (
    <div>
{/* <Navbar/> */}
    <div className="container mx-auto mt-[-100px]  -mb-32  md:-mb-40 ">

      <div className='flex justify-center  items-center h-[1000px] '  >
<div className={styles.glass} >
  <div className='title flex flex-col items-center   ' >
  <h4 className=' mt-[-70px]   md:mt-[-80px] text-cyan-600  text-5xl font-bold' >Admin Registration Form</h4>
<span className='  text-red-900   py-4 text-xl w-full text-center  text-gray-5 '  >
 You Can Add Admin to Give Full Excess To website
  </span>
  </div>

<form className='py-1' onSubmit={Handlesubmit}  >
<div className='profile flex justify-center py-4'   >

  <img src={loginpic} className={styles.profile_img} alt="avatar" />
                 
                  

</div>
<div className='textbox flex flex-col items-center py-4  ' >
<input  required  name="Admin_name" value={Admin_name} onChange={Handlechange} className={styles.textbox}   type="text" placeholder='Admin Name' />
  <br/>
  
  <input  required  name="Admin_email" value={useremail} onChange={Handlechange} className={styles.textbox}   type="email" placeholder='Email' />
  <br/>
  <input  required name="Admin_password" value={Admin_password} onChange={Handlechange} className={styles.textbox}   type="password" placeholder='Password* ' />
  <br/>
  <input type="submit" value='Register'  className={styles.btn} />

</div>

<div className="text-center py-4 ">
<span className='text-gray-500' >Already Register ? <Link className='text-red-500'   to="/adminlogin">Login Now  </Link> </span>
</div>

</form>


</div>
      </div>
    </div>
    
  

    </div>
  )
}


export default AdminRegister