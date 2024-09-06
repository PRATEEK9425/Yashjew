import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/egitbigcaral.jpg"
import {  useNavigate, useParams } from 'react-router-dom';



const  MetalPriceEdit = () => {
const {id}=useParams()
const navigate = useNavigate()
  const initialdata={
    Gold_Price_20k:"",
    Gold_Price_22k:"",
    Gold_Price_24k:"",
    Silver_Price:""
  }
const[formdata,setFormdata] =useState(initialdata)

const Getdata=()=>{
  axios.get(`${process.env.React_App_MetalPriceEdit_url1 }/${id}`)
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
axios.patch(`${process.env.React_App_MetalPriceEdit_url2}/${id}`,payload)
.then((res)=>{
console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
navigate("/adminmetalprice_show")
}
const { Gold_Price_20k,Gold_Price_22k,Gold_Price_24k,Silver_Price} =formdata
  return (
    <div>
      
      <div className='mt-5   '  >
      <span className=' font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            EDIT METAL PRICE
            </span><span className='text-3xl  md:text-4xl lg:text-4xl'  >🧙‍♀️</span>
      <div className='grid mt-10 grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto   '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-[90%] h-[300px]   lg:h-[600px] ' src={bigcarlpic} alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          <span className=' mt-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            EDIT FORM FOR METAL PRICE
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >🧙</span>
          <form onSubmit={HandleSubmit} className='mt-10' >
          
     <label className='font-bold text-lg text-teal-600 '>Gold Price 20k 👨‍🔧</label>
     <br/>
          <input name="Gold_Price_20k" defaultValue={Gold_Price_20k} onChange={Handlechange}  required  placeholder='Gold Price 20k'  className={styles.textbox} type="number"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Gold Price 22k 👨‍🔧</label>
     <br/>
          <input name="Gold_Price_22k" defaultValue={Gold_Price_22k} onChange={Handlechange}  required  placeholder='Gold Price 22k'  className={styles.textbox} type="number"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Gold Price 24k 👨‍🔧</label>
     <br/>
          <input name="Gold_Price_24k" defaultValue={Gold_Price_24k} onChange={Handlechange}  required  placeholder='Gold Price 24k'  className={styles.textbox} type="number"  />
     <br/>


     <label className='font-bold text-lg text-teal-600 '>Silver Price 🧞‍♂️</label>
     <br/>
     <input name="Silver_Price" defaultValue={Silver_Price} onChange={Handlechange}  required  placeholder='Silver_Price'  className={styles.textbox} type="number"  />
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





export default MetalPriceEdit