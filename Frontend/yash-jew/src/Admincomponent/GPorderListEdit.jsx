import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "../styles/Username.module.css"

const   GPorderListEdit = () => {

  const {id} = useParams()
  const navigate = useNavigate()
    const initialdata={
        GoldImg:"",
        Title:"",
        Category:"",
        Model_No:"",
        Availability_Type:"",
        Quantity:"",
        Name:"",
        Email:"",
        Mobile_Nmb:"",
        Address:"",
        PinCode:""
    }
  const[formdata,setFormdata] =useState(initialdata)
  
  
  const Getdata = ()=>{
    axios.get(`${process.env.React_App_GPorderListEdit_url1}/${id}`)
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
  
  
  console.log(formdata);
  const Handlechange=(e)=>{
    const {name,value} =e.target 
    setFormdata({...formdata,[name]:value})
    }
    
    const HandleSubmit=(e)=>{
    e.preventDefault()
    const payload = formdata
    axios.patch(`${process.env.React_App_GPorderListEdit_url2}/${id}`,payload)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    setFormdata(initialdata)
    navigate("/admin/web-GP-orderList")
    }

    const{GoldImg,Title,Category,Model_No,Availability_Type,Quantity,Name,Email,Mobile_Nmb,Address,PinCode} =formdata
  return (
    <div>
       <div className='mt-2'  >
      <span className='mb-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
      GOLD PLATING ORDER LIST
      </span>
      <span className='text-3xl  md:text-4xl lg:text-4xl' >👮‍♀️</span>
      <div className=' mt-5  w-[100%] md:w-[70%] lg:w-[70%] m-auto   '>
       
        <div className='shadow-2xl rounded-2xl shadow-orange-400' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
           UPDATE GOLD PLATING ORDER
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          



          <form onSubmit={HandleSubmit} className='mt-5'  >
          <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Image Url</label>
  <br/>
          <input name="GoldImg" defaultValue={GoldImg} onChange={Handlechange}  required  placeholder=' Order Image Url 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Jewellery Title </label>
  <br/>
     <input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder='Title 👸'  className={styles.textbox} type="string"  />

  <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Category</label>
  <br/>
     <input name="Category" defaultValue={Category} onChange={Handlechange}  required  placeholder='Category 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Address</label>
  <br/>
     <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address 👸'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Model No</label>
  <br/>
     <input name="Model_No" defaultValue={Model_No} onChange={Handlechange}  required  placeholder='Model No 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Availability Type</label>
  <br/>
     <input name="Availability_Type" defaultValue={Availability_Type} onChange={Handlechange}  required  placeholder='Availability Type 👸'  className={styles.textbox} type="string"  />
     <br/>
    
     
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Quantity</label>
  <br/>
     <input name="Quantity" defaultValue={Quantity} onChange={Handlechange}  required  placeholder='Quantity 🤴'  className={styles.textbox} type="number"  />
     <br/>
    
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Name</label>
  <br/>
     <input name="Name" defaultValue={Name} onChange={Handlechange}  required  placeholder='Name 🤴'  className={styles.textbox} type="string"  />
     
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Customer Email</label>
  <br/>
     <input name="Email" defaultValue={Email} onChange={Handlechange}  required  placeholder='Customer Email 🤴'  className={styles.textbox} type="email"  />
     <br/>
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Mobile Number</label>
  <br/>
     <input name="Mobile_Nmb" defaultValue={Mobile_Nmb} onChange={Handlechange}  required  placeholder='Mobile Number 🤴'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">PINCODE</label>
  <br/>
     <input name="PinCode" defaultValue={PinCode} onChange={Handlechange}  required  placeholder='Pincode 🤴'  className={styles.textbox} type="number"  />
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



export default GPorderListEdit