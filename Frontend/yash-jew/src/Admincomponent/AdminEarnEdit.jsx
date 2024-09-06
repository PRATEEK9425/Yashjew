import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/egitbigcaral.jpg"
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const AdminEarnEdit = () => {
const {id,mainediturl,path}=useParams()

const navigate = useNavigate()
  const initialdata={
    Image_url:"",
   Title:"",
   Description:""
  }
const[formdata,setFormdata] =useState(initialdata)

const Getdata=()=>{
  axios.get(`/${mainediturl}/${id}`)
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
axios.patch(`/${mainediturl}/update/${id}`,payload)
.then((res)=>{
console.log(res.data);
alert("UPDATE SUCCESSFUL")
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
// navigate("/adminbigcarlcreate")
}
const { Image_url,Title,Description} =formdata
  return (
    <div>
      
      <div className='mt-5   '  >
      <span className=' font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            Edit  {path} Data
            </span><span className='text-3xl  md:text-4xl lg:text-4xl'  >🧙‍♀️</span>
      <div className='grid mt-10 grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto gap-10  '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-full h-[300px]   lg:h-[450px] ' src={bigcarlpic} alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          <span className=' mt-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            Edit Form For {path}
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >🧙</span>
          <form onSubmit={HandleSubmit} className='mt-1' >
          
     <label className='font-bold text-lg text-teal-600 '>Image Url 👨‍🔧</label>
     <br/>
          <input name="Image_url" defaultValue={Image_url} onChange={Handlechange}  required  placeholder='Image Url'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Title 🧞‍♂️</label>
     <br/>
     <input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder='Title'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Description 🧞‍♂️</label>
     <br/>
     <input   name="Description" defaultValue={Description} onChange={Handlechange}  className={styles.textbox}  required  placeholder='Description'   type="string"  />
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



export default AdminEarnEdit