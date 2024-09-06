
import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const GPEmailsend = () => {

const {id} = useParams()
const navigate = useNavigate()
  const initialdata={
    
    Title:String,
    Category:String,
    Model_No:String,
    Quantity:Number,
    Name:String,
    Email:String,
    Mobile_Nmb:Number,
    Address:String,
    PinCode:Number,
    Order_No:String,
    Courier_Partner:String

  }
const[formdata,setFormdata] =useState(initialdata)


const Getdata = ()=>{
  axios.get(`${process.env.React_App_GPEmailsend_url1}/${id}`)
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
console.log(payload);
axios.post(`${process.env.React_App_GPEmailsend_url2}`,payload)
.then((res)=>{
  console.log(res.data);
  alert("Order Details SEND To Customer")
})
.catch((err)=>{
  console.log(err);
})



}
const {Title,Category,Model_No,Quantity,Name,Email,Mobile_Nmb,Address,PinCode,Order_No,Courier_Partner} =formdata
 

return (
    <div>
     
   
    <div className='mt-20'  >
      <span className='mb-20 mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
     Gold Plating Email Send
      </span>
      <span className='text-3xl  md:text-4xl lg:text-4xl' >👮‍♀️</span>



      <div className=' w-[15%] ml-[70%]  '  >
        <button  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-stone-500 via-yellow-300 to-orange-500 ..."
         onClick={()=>{navigate("/admin/web-GP-orderList")}}  >
            Gold Plating Orders
            </button>
     </div>



      <div className=' mt-5  w-[100%] md:w-[70%] lg:w-[70%] m-auto   '>
       
        <div className='shadow-2xl rounded-2xl shadow-orange-400' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
          Gold Plating ORDER-INFO VIA EMAIL 
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          <form onSubmit={HandleSubmit} className='mt-5'  >
          <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Jewellery NAME</label>
  <br/>
          <input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Category</label>
  <br/>
     <input name="Category" defaultValue={Category} onChange={Handlechange}  required  placeholder='Category 👸'  className={styles.textbox} type="string"  />
     <br/>
     
     
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Address</label>
  <br/>
     <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Model No</label>
  <br/>
     <input name="Model_No" defaultValue={Model_No} onChange={Handlechange}  required  placeholder='Model No 👸'  className={styles.textbox} type="string"  />
     <br/>
     
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Quantity</label>
  <br/>
     <input name="Quantity" defaultValue={Quantity} onChange={Handlechange}  required  placeholder='Quantity 👸'  className={styles.textbox} type="number"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Name</label>
  <br/>
     <input name="Name" defaultValue={Name} onChange={Handlechange}  required  placeholder='Name 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Estimated Weight</label>
     <br/>
     <input name="Email"defaultValue={Email} onChange={Handlechange}  required  placeholder='Email 👸'  className={styles.textbox} type="email"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Mobile Nmb</label>
  <br/>
     <input name="Mobile_Nmb" defaultValue={Mobile_Nmb} onChange={Handlechange}  required  placeholder='Mobile Nmb 🤴'  className={styles.textbox} type="number"  />
     <br/>
     
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">PinCode</label>
  <br/>
     <input name="PinCode" defaultValue={PinCode} onChange={Handlechange}  required  placeholder='PinCode 🤴'  className={styles.textbox} type="number"  />
     <br/>
     
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Order No</label>
  <br/>
     <input name="Order_No" defaultValue={Order_No} onChange={Handlechange}  required  placeholder='Order No 🤴'  className={styles.textbox} type="string"  />
     <br/>
     
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Courier Partner</label>
  <br/>
     <input name="Courier_Partner" defaultValue={Courier_Partner} onChange={Handlechange}  required  placeholder='Courier Partner 🤴'  className={styles.textbox} type="string"  />
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


export default GPEmailsend