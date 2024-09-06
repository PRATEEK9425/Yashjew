
import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/egitbigcaral.jpg"
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const EarnwithEdit = () => {
const {id}=useParams()
const navigate = useNavigate()
  const initialdata={
    Jew_name:"",
weight:"",
Budget:"",
Name:"",
Email:"",
contact:"",
Address:""
  }
const[formdata,setFormdata] =useState(initialdata)

const Getdata=()=>{
  axios.get(`${process.env.React_App_EarnwithEdit_url1}/${id}`)
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

axios.patch(`${process.env.React_App_EarnwithEdit_url2}/${id}`,payload)
.then((res)=>{
console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
navigate("/adminearn&refer")
}
const {Jew_name,weight,Budget,Name,Email,contact,Address} =formdata
  return (
    <div>
      
      <div className='mt-5   '  >
      <span className=' font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            EDIT Refer & Earn
            </span><span className='text-3xl  md:text-4xl lg:text-6xl'  >🧙‍♀️</span>
      <div className='grid mt-10 grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto   '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-[500px] h-[300px]   lg:h-[900px] ' src={bigcarlpic} alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          <span className=' mt-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            Edit Form 
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >🧙</span>
          <form onSubmit={HandleSubmit} className='mt-10' >
          
     <label className='font-bold text-lg text-teal-600 '>Jewellery Name 👨‍🔧</label>
     <br/>
          <input name="Jew_name" defaultValue={Jew_name} onChange={Handlechange}  required  placeholder='Jewellery Name'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Weight 🧞‍♂️</label>
     <br/>
     <input name="weight" defaultValue={weight} onChange={Handlechange}  required  placeholder='Weight'  className={styles.textbox} type="number"  />
     <br/>
     <br/>

     <label className='font-bold text-lg text-teal-600 '>Budget 👨‍🔧</label>
     <br/>
          <input name="Budget" defaultValue={Budget} onChange={Handlechange}  required  placeholder='Budget'  className={styles.textbox} type="number"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Name 🧞‍♂️</label>
     <br/>
     <input name="Name" defaultValue={Name} onChange={Handlechange}  required  placeholder='Name'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Email 🧞‍♂️</label>
     <br/>
     <input name="Email" defaultValue={Email} onChange={Handlechange}  required  placeholder='Email'  className={styles.textbox} type="email"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>contact 🧞‍♂️</label>
     <br/>
     <input name="contact" defaultValue={contact} onChange={Handlechange}  required  placeholder='contact'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Address 🧞‍♂️</label>
     <br/>
     <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address'  className={styles.textbox} type="string"  />
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

export default EarnwithEdit