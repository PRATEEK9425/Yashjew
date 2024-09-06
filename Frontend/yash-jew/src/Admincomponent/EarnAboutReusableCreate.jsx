import React, { useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/bigcarl.jpg"

const EarnAboutReusableCreate = ({mainurl}) => {
  
  const initialdata={
    Image_url:"",
   Title:"",
   Description:""
  }
const[formdata,setFormdata] =useState(initialdata)

const Handlechange=(e)=>{
const {name,value} =e.target 
setFormdata({...formdata,[name]:value})
}

const HandleSubmit=(e)=>{
e.preventDefault()
const payload = formdata
console.log(payload);
axios.post(`/${mainurl}/create`,payload)
.then((res)=>{
console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
}
const {Image_url,Title,Description} =formdata
  return (
    <div>
   
 <div className='mt-20'  >
      <span className='mb-20 mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
       UPDATE FORM 
      </span>
      <span className='text-3xl  md:text-4xl lg:text-4xl' >👮‍♀️</span>
      <div className='grid mt-5  grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto   '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-[400px] h-[300px]   lg:h-[400px] ' src={bigcarlpic} alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-2xl lg:text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
           UPDATE Data FROM THIS FORM
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          <form onSubmit={HandleSubmit} className='mt-5'  >
          <input name="Image_url" value={Image_url} onChange={Handlechange}  required  placeholder='Image Url 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input name="Title" value={Title} onChange={Handlechange}  required  placeholder='Title 👸'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input name="Description" value={Description} onChange={Handlechange}  required  placeholder='Description 👸'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input    className={styles.btn}  style={{fontSize:"30px"}}  type="submit" value="Submit" />
            
          </form>
        </div>
      </div>
    </div>
    </div>
   
  )
}


export default EarnAboutReusableCreate