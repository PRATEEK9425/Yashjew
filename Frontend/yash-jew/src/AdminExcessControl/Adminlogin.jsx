import {  useLocation, useNavigate } from 'react-router-dom'

import styles from "../styles/Username.module.css"
import { useState } from 'react'
import Loginlogo from "../Photos/Newpasspic.jpg"

import Navbar from '../Pages/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { LoginMainFn } from '../Redux/AdminLoginReducer/action'

const  Adminlogin = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const token = useSelector(state=>state.AdminLoginReducer.token)
    const AdminAuthcheck = useSelector(store=>store.AdminLoginReducer.isAuth)
console.log(AdminAuthcheck,token);

 const initial={
  Admin_email:"",
  Admin_password:""
 }

  const[formdata,setFormdata]=useState(initial)
    const userpath = location.state?.name || "/"
  
    const Handlechange=(e)=>{
const {name,value}=e.target;
setFormdata({...formdata,[name]:value})
  }
  const Handlesubmit=(e)=>{
e.preventDefault(userpath)

const payload = formdata
dispatch(LoginMainFn(payload)).then((res)=>{
  if(!token && !AdminAuthcheck){
    alert("Login success")
    navigate(userpath)
  }else{
    alert("Wrong credentials")
  }
 setFormdata(initial)
})


}

  const {Admin_email,Admin_password} =formdata




  return (
    <div>
      {/* <Navbar/> */}
<div className="container mx-auto mt-[-50px]  -mb-32  md:-mb-40 lg:mb-[10px]  ">
    
    <div className='flex justify-center items-center h-[650px] '  >
<div className={styles.glass}  >
<div className='title flex flex-col items-center' >
<h4 className=' mt-[-70px]   md:mt-[-80px] text-cyan-600  text-5xl font-bold' > Admin  Login  </h4>
<span className='  text-cyan-900   py-4 text-xl w-full text-center  text-gray-5 '  >
Admin Login to Verify...🔐
</span>
</div>

<form className='py-1' onSubmit={Handlesubmit}  >
<div className='profile flex justify-center py-4'   >

<img src={Loginlogo} className={styles.profile_img} alt="avatar" />
               
                

</div>
<div className='textbox flex flex-col items-center py-4  ' >

<input  name="Admin_email" value={Admin_email} onChange={Handlechange} className={styles.textbox}   type="email" placeholder='Email*'  />
<br/>

<input required name="Admin_password" value={Admin_password} onChange={Handlechange} className={styles.textbox}   type="password" placeholder='Password* ' />
<br/>
<input required type="submit" value='Login Now'  className={styles.btn} />

</div>
</form>


</div>
    </div>
  </div>
    </div>
    
  )

}

export default Adminlogin