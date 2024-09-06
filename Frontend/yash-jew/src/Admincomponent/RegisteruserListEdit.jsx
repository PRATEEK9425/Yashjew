import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const RegisteruserListEdit = () => {

const {id} = useParams()
const navigate = useNavigate()
  const initialdata={
    name:"",
    email:"",
    password:"",
    Mob_number:""
  }
const[formdata,setFormdata] =useState(initialdata)


const Getdata = ()=>{
  axios.get(`/user/${id}`)
  .then((res)=>{
    setFormdata(res.data)
  })
  .catch((err)=>{
    console.log(err);
  })
  }

useEffect(()=>{
  Getdata()
  },[id])




const Handlechange=(e)=>{
const {name,value} =e.target 
setFormdata({...formdata,[name]:value})
}

const HandleSubmit=(e)=>{
e.preventDefault()
const payload = formdata
axios.patch(`${process.env.React_App_RegisteruserListEdit}/${id}`,payload)
.then((res)=>{
  console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
navigate("/admin/register/user/protectedroutes")
}
const {name,email,password,Mob_number} =formdata
  return (
    <div>
     
   
    <div className='mt-20'  >
      <span className='mb-20 mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
       Register User Data
      </span>
      <span className='text-3xl  md:text-4xl lg:text-6xl' >👮‍♀️</span>
      <div className=' mt-16  w-[100%] md:w-[70%] lg:w-[50%] m-auto   '>
       
        <div className='shadow-2xl rounded-2xl shadow-orange-400' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
           Register User Details Edit Form
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          <form onSubmit={HandleSubmit} className='mt-5'  >
          <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Name</label>
  <br/>
          <input name="name" defaultValue={name} onChange={Handlechange}  required  placeholder=' Name🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">EMAIL</label>
  <br/>
     <input name="email" defaultValue={email} onChange={Handlechange}  required  placeholder='Email 👸'  className={styles.textbox} type="text"  />
     <br/>
    
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">PASSWORD</label>
  <br/>
     <input name="password" defaultValue={password} onChange={Handlechange}  required  placeholder='Password 🤴'  className={styles.textbox} type="password"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Mobile Number</label>
  <br/>
     <input name="Mob_number" defaultValue={Mob_number} onChange={Handlechange}  required  placeholder='Mobile Number 👸'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input    className={styles.btn}  style={{fontSize:"30px"}}  type="submit" defaultValue="Submit" />
     <br/>
     <br/>  
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
export default RegisteruserListEdit