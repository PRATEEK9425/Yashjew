import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/egitbigcaral.jpg"
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const ConsultancyEdit = () => {
const {id}=useParams()
const navigate = useNavigate()
  const initialdata={
    customer_name:"",
    customer_email:"",
    customer_Mob_Number:"",
    Time_Of_avalability:""
  }
const[formdata,setFormdata] =useState(initialdata)

const Getdata=()=>{
  axios.get(`/consultancy/${id}`)
  .then((res)=>{
      setFormdata(res.data)
  }).catch((err)=>{
      console.log(err);
  })
}
useEffect(()=>{
Getdata()

},[id,formdata.length])


const Handlechange=(e)=>{
const {name,value} =e.target 
setFormdata({...formdata,[name]:value})
}

const HandleSubmit=(e)=>{
e.preventDefault()
const payload = formdata

axios.patch(`/consultancy/update/${id}`,payload)
.then((res)=>{
console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
// navigate("/adminbigcarlcreate")
}
const {customer_name,customer_email,customer_Mob_Number,Time_Of_avalability} =formdata
  return (
    <div>
      
      <div className='mt-5   '  >
      <span className=' font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            EDIT CONSULTANCY DATA
            </span><span className='text-3xl  md:text-4xl lg:text-6xl'  >🧙‍♀️</span>
      <div className='grid mt-10 grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto   '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-[500px] h-[300px]   lg:h-[550px] ' src={bigcarlpic} alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          <span className=' mt-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            Edit Form 
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >🧙</span>
          <form onSubmit={HandleSubmit} className='mt-10' >
          
     <label className='font-bold text-lg text-teal-600 '>Customer Name 👨‍🔧</label>
     <br/>
          <input name="customer_name" defaultValue={customer_name} onChange={Handlechange}  required  placeholder='Customer Name'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Customer Email 🧞‍♂️</label>
     <br/>
     <input name="customer_email" defaultValue={customer_email} onChange={Handlechange}  required  placeholder='Customer Email'  className={styles.textbox} type="email"  />
     <br/>
     <br/>

     <label className='font-bold text-lg text-teal-600 '>Customer Mob Number 👨‍🔧</label>
     <br/>
          <input name="customer_Mob_Number" defaultValue={customer_Mob_Number} onChange={Handlechange}  required  placeholder='Customer Mob Number'  className={styles.textbox} type="number"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Time OF Avalability 🧞‍♂️</label>
     <br/>
     <input name="Time_Of_avalability" defaultValue={Time_Of_avalability} onChange={Handlechange}  required  placeholder='Time_Of_avalability'  className={styles.textbox} type="date"  />
     <br/>
     <br/>
     <input    className={styles.btn}  style={{  fontFamily:"serif",fontSize:"20px",  width:"180px" }}  type="submit" value="SUBMIT CHANGES" />
            
          </form>
        </div>
      </div>
    </div>
    </div>
  
  )
}
export default ConsultancyEdit