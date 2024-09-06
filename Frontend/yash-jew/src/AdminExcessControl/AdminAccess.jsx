import {  useNavigate } from 'react-router-dom'

import styles from "../styles/Username.module.css"
import { useState } from 'react'
import Loginlogo from "../Photos/adminaccesspic.jpg"

import Navbar from '../Pages/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { AdminaccessMainfn } from '../Redux/AdminExcessReducer/action'


const  AdminAccess = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
 

 const token = useSelector(state=>state.AdminAccessReducer.token )
 const AdminAuthcheck = useSelector(store=>store.AdminAccessReducer.isAuth)

 const initial={
  Admin_Accessemail:"",
    Admin_Accesspassword:""

 }

  const[formdata,setFormdata]=useState(initial)
    
  
    const Handlechange=(e)=>{
const {name,value}=e.target;
setFormdata({...formdata,[name]:value})
  }
  const Handlesubmit=(e)=>{
e.preventDefault()

const payload = formdata
console.log(payload);
dispatch(AdminaccessMainfn(payload)).then((res)=>{
  if(!token && !AdminAuthcheck){
    alert("Access Granted")
    navigate("/adminotpgen")
  }else{
    alert("Wrong credentials")
  }
 setFormdata(initial)
})


}

  const {Admin_Accessemail,Admin_Accesspassword} =formdata




  return (
    <div>
      {/* <Navbar/> */}
<div className="container mx-auto mt-[-50px]  -mb-32  md:-mb-40 lg:mb-[10px]  ">
    
    <div className='flex justify-center items-center h-[750px] '  >
<div className={styles.glass}  >
<div className='title flex flex-col items-center' >
<h4 className=' mt-[-70px]   md:mt-[-80px] text-cyan-600 text-3xl lg:text-5xl font-bold' >Admin Credentials</h4>
<span className='  text-cyan-900   py-4 text-xl w-full text-center  text-gray-5 '  >
Admin Authentification...🔐
</span>
</div>

<form className='py-1' onSubmit={Handlesubmit}  >
<div className='profile flex justify-center py-4'   >

<img src={Loginlogo} className={styles.profile_img} alt="avatar" />
               
                

</div>
<div className='textbox flex flex-col items-center py-4  ' >

<input  name="Admin_Accessemail" value={Admin_Accessemail} onChange={Handlechange} className={styles.textbox}   type="email" placeholder='Email'  required />
<br/>

<input  name="Admin_Accesspassword" value={Admin_Accesspassword} onChange={Handlechange} className={styles.textbox}   type="password" placeholder='Password ' required />
<br/>
<input  type="submit" value='Submit'  className={styles.btn} />
<br/>
<br/>
</div>
</form>
</div>
    </div>
  </div>
    </div>
    
  )

}

export default AdminAccess