import React, { useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import consultancycar from "../Photos/consultancyfinal.jpg"
import Navbar from '../Pages/Navbar'

const ConsultancyForm = () => {
    const initialdata={
        customer_name:"",
        customer_email:"",
        customer_Mob_Number:"",
        Time_Of_avalability:""
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
    axios.post(`${process.env.REACT_APP_Consultancy}`,payload)
    .then((res)=>{
    console.log(res.data);
    alert("WE WILL CONATCT YOU ON GIVE TIME")
    })
    .catch((err)=>{
      console.log(err);
    })
    setFormdata(initialdata)
    }
    const {customer_name,customer_email,customer_Mob_Number,Time_Of_avalability} =formdata
      return (
        <div>
         <Navbar/> 
     <div   >
          <span className='mb-20 mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
            Jewellery Consultancy Form...
          </span>
          <span className='text-3xl  md:text-4xl lg:text-4xl' >👮‍♀️</span>
          <div className='grid mt-5  grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto   '>
            <div  >
              <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-[500px] h-[300px]   lg:h-[500px] ' src={consultancycar} alt="" />
            </div>
            <div className='shadow-2xl shadow-orange-400' >
              <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-900  ' >
                 Connect With us..
                </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
              <form onSubmit={HandleSubmit} className='mt-5'  >
              <input name="customer_name" value={customer_name} onChange={Handlechange}  required  placeholder=' Your Name 🤴'  className={styles.textbox} type="string"  />
         <br/>
         <br/>
         <input name="customer_email" value={customer_email} onChange={Handlechange}  required  placeholder='Your Email 👸'  className={styles.textbox} type="email"  />
         <br/>
         <br/>
         <input name="customer_Mob_Number" value={customer_Mob_Number} onChange={Handlechange}  required  placeholder='Mobile Number 🤴'  className={styles.textbox} type="string"  />
         <br/>
         
         <label className='text-xl font-serif text-orange-400'   htmlFor="">Time of Availability</label>
         <br/>
         <input name="Time_Of_avalability" value={Time_Of_avalability} onChange={Handlechange}  required  placeholder='Time Of Availability 👸'  className={styles.textbox} type="time"  />
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

export default ConsultancyForm