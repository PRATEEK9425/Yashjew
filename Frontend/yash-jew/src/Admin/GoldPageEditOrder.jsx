import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "../styles/Username.module.css"
import AdminNavbar from '../AdminNavbar/AdminNavbar'
const GoldPageEditOrder = () => {

  const {id} = useParams()
  const navigate = useNavigate()
    const initialdata={
      GoldImg:"",
   Title:"",
   Customer_Name:"",
   Address:"",
   Pincode:"",
   Contact:"",
   Email_Address:""
    }
  const[formdata,setFormdata] =useState(initialdata)
  
  
  const Getdata = ()=>{
    axios.get(`/gold/${id}`)
    .then((res)=>{
      setFormdata(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    }
  
  useEffect(()=>{
  
      Getdata()
    
    

    },[id,formdata.length])
  
  
  console.log(formdata);
  const Handlechange=(e)=>{
    const {name,value} =e.target 
    setFormdata({...formdata,[name]:value})
    }
    
    const HandleSubmit=(e)=>{
    e.preventDefault()
    const payload = formdata
    axios.patch(`http://localhost:3500/gold/update/${id}`,payload)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    setFormdata(initialdata)
    navigate("/customer_upload_order")
    }

    const {GoldImg,Title,Customer_Name,Address,Pincode,Contact,Email_Address} =formdata
  return (
    <div>
      <AdminNavbar/>
       <div className='mt-2'  >
      <span className='mb-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
       CUSTOMISE ORDER LIST
      </span>
      <span className='text-3xl  md:text-4xl lg:text-4xl' >👮‍♀️</span>
      <div className=' mt-5  w-[100%] md:w-[70%] lg:w-[70%] m-auto   '>
       
        <div className='shadow-2xl rounded-2xl shadow-orange-400' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
           UPDATE CUSTOMISE ORDER
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          
          <form onSubmit={HandleSubmit} className='mt-5'  >
          <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Image Url</label>
  <br/>
          <input name="GoldImg" defaultValue={GoldImg} onChange={Handlechange}  required  placeholder=' Order Image Url 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Jewellery Title By Customer</label>
  <br/>
     <input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder='Job Title 👸'  className={styles.textbox} type="string"  />

  <br/>

     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Customer Name</label>
  <br/>
     <input name="Customer_Name" defaultValue={Customer_Name} onChange={Handlechange}  required  placeholder='Customer Name 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Address</label>
  <br/>
     <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address 👸'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Pincode</label>
  <br/>
     <input name="Pincode" defaultValue={Pincode} onChange={Handlechange}  required  placeholder='Pincode 🤴'  className={styles.textbox} type="number"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Contact</label>
  <br/>
     <input name="Contact" defaultValue={Contact} onChange={Handlechange}  required  placeholder='Contact 👸'  className={styles.textbox} type="number"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Email_Address</label>
  <br/>
     <input name="Email_Address" defaultValue={Email_Address} onChange={Handlechange}  required  placeholder='Email_Address 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
    

     <input    className={styles.btn}  style={{fontSize:"30px"}}  type="submit" defaultValue="Submit" />
            
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GoldPageEditOrder