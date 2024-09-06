import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'


const GolOrderEmailSend = () => {

const {id} = useParams()
const navigate = useNavigate()
  const initialdata={
    Title:"",
    Customer_Name:"",
    Address:"",
    Contact:"",
    Email_Address:"",
    Model_Number:"",
    Estimated_Weight:"",
    Estimated_Price:"",
    GoldPrice_Today:""
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
  },[id])




const Handlechange=(e)=>{
const {name,value} =e.target 
setFormdata({...formdata,[name]:value})
}

const HandleSubmit=(e)=>{
e.preventDefault()
const payload = formdata
console.log(payload);
axios.post(`${process.env.React_App_GolOrderEmailSend}`,payload)
.then((res)=>{
  console.log(res.data);
  alert("Email send To Customer")
})
.catch((err)=>{
  console.log(err);
})

navigate("/customer_upload_order")
}
const {Title,Customer_Name, Address, Contact, Email_Address, Model_Number, Estimated_Weight, Estimated_Price,GoldPrice_Today} =formdata
  console.log(formdata);

return (
    <div>
     <AdminNavbar/>
    <div className='mt-20'  >
      <span className='mb-20 mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
     Send Email To Customer For Gold Enquiry
      </span>
      <span className='text-3xl  md:text-4xl lg:text-4xl' >👮‍♀️</span>
      <div className=' mt-5  w-[100%] md:w-[70%] lg:w-[70%] m-auto   '>
       
        <div className='shadow-2xl rounded-2xl shadow-orange-400' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
           Update Gold Enquiry
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          <form onSubmit={HandleSubmit} className='mt-5'  >
          <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Jewellery NAME</label>
  <br/>
          <input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Customer_Name</label>
  <br/>
     <input name="Customer_Name" defaultValue={Customer_Name} onChange={Handlechange}  required  placeholder='Customer Name 👸'  className={styles.textbox} type="string"  />
     <br/>
     
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Address</label>
  <br/>
     <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Contact</label>
  <br/>
     <input name="Contact" defaultValue={Contact} onChange={Handlechange}  required  placeholder='Contact 👸'  className={styles.textbox} type="number"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Email Address</label>
  <br/>
     <input name="Email_Address" defaultValue ={Email_Address} onChange={Handlechange}  required  placeholder='Email Address 🤴'  className={styles.textbox} type="email"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Model Number</label>
  <br/>
     <input name="Model_Number" defaultValue={Model_Number} onChange={Handlechange}  required  placeholder='Model Number 👸'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">JEstimated Weight</label>
  <br/>
     <input name="Estimated_Weight" defaultValue={Estimated_Weight} onChange={Handlechange}  required  placeholder='Estimated Weight 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Estimated Weight</label>
     <br/>
     <input name="Estimated_Price"defaultValue={Estimated_Price} onChange={Handlechange}  required  placeholder='Estimated Price 👸'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">GoldPrice Today</label>
  <br/>
     <input name="GoldPrice_Today" defaultValue={GoldPrice_Today} onChange={Handlechange}  required  placeholder='GoldPrice Today 🤴'  className={styles.textbox} type="string"  />
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

export default GolOrderEmailSend