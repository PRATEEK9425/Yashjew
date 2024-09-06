
import { Link, useNavigate } from 'react-router-dom'

import styles from "../styles/Username.module.css"
import { useState } from 'react'
import Loginlogo from "../Photos/Newpasspic.jpg"
import axios from 'axios'
import Navbar from './Navbar'





const Login = () => {
const navigate=useNavigate()

 const initial={
email:"",
password:"",
 }

  const[formdata,setFormdata]=useState(initial)
    
  const Handlechange=(e)=>{
const {name,value}=e.target;
setFormdata({...formdata,[name]:value})
  }
  const Handlesubmit=(e)=>{
e.preventDefault()

const payload = formdata
axios.post(`${process.env.React_App_Login_url}`,payload)
.then((res)=>{
  let Msg = res.data.msg 
  let token = res.data.token 
  console.log(res.data);
  if(Msg.length>0 && token.length>0){
    alert("Login Successfull")

    
    navigate("/")
  }
  else {
   alert("Wrong Credentials🔐")
  }
})
.catch((err)=>{
  alert("Wrong Credentials")
  console.log(err);
})
}

  const {email,password} =formdata




  return (
    <div>
    <Navbar/>
<div className="container mx-auto mt-[-100px]  -mb-32  md:-mb-40 ">
    
    <div className='flex justify-center items-center h-[850px] '  >
<div className={styles.glass}  >
<div className='title flex flex-col items-center' >
<h4 className=' mt-[-70px]   md:mt-[-80px] text-cyan-600  text-5xl font-bold' >Login  </h4>
<span className='  text-cyan-900   py-4 text-xl w-2/3 text-center  text-gray-5 '  >
Login to Verify...🔐
</span>
</div>

<form className='py-1' onSubmit={Handlesubmit}  >
<div className='profile flex justify-center py-4'   >

<img src={Loginlogo} className={styles.profile_img} alt="avatar" />
               
                

</div>
<div className='textbox flex flex-col items-center py-4  ' >

<input  name="email" value={email} onChange={Handlechange} className={styles.textbox}   type="email" placeholder='Email*'  />
<br/>

<input required name="password" value={password} onChange={Handlechange} className={styles.textbox}   type="password" placeholder='Password* ' />
<br/>
<input required type="submit" value='Login Now'  className={styles.btn} />

</div>

<div className="text-center py-4 ">
<span className='text-gray-500' >Reset Password ? <Link className='text-red-500'   to="/resetcheck1">Reset Password </Link> </span>
</div>

</form>


</div>
    </div>
  </div>
    </div>
    
  )

}
export default Login