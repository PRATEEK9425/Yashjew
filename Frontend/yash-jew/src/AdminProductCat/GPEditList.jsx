import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/goldeditadmin.jpeg"
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const  GPEditList= () => {

const {cat,id} = useParams()
const navigate = useNavigate()
  const initialdata={
    GoldImg:"",
Title:"",
Category:"",
Model_No:"",
Availability_Type:"",
Quantity:"",

  }
const[formdata,setFormdata] =useState(initialdata)

const Getdata=()=>{
  axios.get(`/${cat}/${id}`)
  .then((res)=>{
      setFormdata(res.data)
  }).catch((err)=>{
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
console.log(payload);
axios.patch(`/${cat}/update/${id}`,payload)
.then((res)=>{
console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)

}
const {GoldImg,Title,Category,Model_No,Availability_Type,Quantity} =formdata
  return (
    <div>
      
      <div className='mt-5   '  >
      <span className=' font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            Edit  Product Data
            </span><span className='text-3xl  md:text-4xl lg:text-4xl'  >🧙‍♀️</span>
      <div className='grid mt-10 grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto gap-5 '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-full h-[300px]   lg:h-[730px] ' src={bigcarlpic} alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          
          <form onSubmit={HandleSubmit}  >
          
     <label className='font-bold text-lg text-teal-600 '>Image Url 👨‍🔧</label>
     <br/>
          <input name="GoldImg" defaultValue={GoldImg} onChange={Handlechange}  required  placeholder='Image Url'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Title 🧞‍♂️</label>
     <br/>
     <input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder='Title'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Category 🧞‍♂️</label>
     <br/>
     <input name="Category" defaultValue={Category} onChange={Handlechange}  required  placeholder='Category'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Model_No 🧞‍♂️</label>
     <br/>
     <input name="Model_No" defaultValue={Model_No} onChange={Handlechange}  required  placeholder='Model_No'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Availability Type 🧞‍♂️</label>
     <br/>
     <input name="Availability_Type" defaultValue={Availability_Type} onChange={Handlechange}  required  placeholder='Availability Type'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Quantity 🧞‍♂️</label>
     <br/>
     <input name="Quantity" defaultValue={Quantity} onChange={Handlechange}  required  placeholder='Quantity'  className={styles.textbox} type="string"  />
     <br/>
     
     
     <br/>
     <input    className={styles.btn}  style={{  fontFamily:"monospace",fontSize:"20px",  width:"170px" }}  type="submit" value="Submit Changes" />
            
          </form>
        </div>
      </div>
    </div>
    </div>
  
  )
}




export default GPEditList