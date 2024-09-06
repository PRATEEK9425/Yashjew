import React, { useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import earnpic from "../Photos/Earnpic.jpg"
import Navbar from '../Pages/Navbar'

const Earncomp = () => {
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

const Handlechange=(e)=>{
const {name,value} =e.target 
setFormdata({...formdata,[name]:value})
}

const HandleSubmit=(e)=>{
e.preventDefault()
const payload = formdata

axios.post(`${process.env.React_App_Earnurl}`,payload)
.then((res)=>{
alert("Details Share Successfully Our Team Will contact You soon")
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
}
const { Jew_name,weight,Budget,Name,Email,contact,Address} =formdata
  return (
    <div>
      <Navbar/>
      <div   >
      <span className='mb-20 mt-10  font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
        EARN WITH US
      </span>
      <span className='text-3xl  md:text-4xl lg:text-6xl' >👮‍♀️</span>
      <div className='grid mt-5  grid-cols-1   md:grid-cols-2  lg:grid-cols-2 w-[80%] m-auto   '>
        <div  >
          <img className=' rounded-2xl shadow-2xl shadow-orange-400  lg:w-[90%] h-[300px]   lg:h-[750px] ' src="https://img.freepik.com/free-vector/fired-businessman-with-money-pile_1308-112549.jpg?w=740" alt="" />
        </div>
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
          SUBMIT YOUR'S DETAILS
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>
          <form onSubmit={HandleSubmit} className='mt-5'  >
          <input name="Jew_name" value={Jew_name} onChange={Handlechange}  required  placeholder='Jewellery Name 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input name="weight" value={weight} onChange={Handlechange}  required  placeholder='weight in Gram 👸'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <input name="Budget" value={Budget} onChange={Handlechange}  required  placeholder='Budget 👸'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <input name="Name" value={Name} onChange={Handlechange}  required  placeholder='Your Name 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input name="Email" value={Email} onChange={Handlechange}  required  placeholder='Your Email 🤴'  className={styles.textbox} type="email"  />
     <br/>
     <br/>
     <input name="contact" value={contact} onChange={Handlechange}  required  placeholder='Whatapp Number 🤴'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <input name="Address" value={Address} onChange={Handlechange}  required  placeholder='Address 🤴'  className={styles.textbox} type="string"  />
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

export default Earncomp