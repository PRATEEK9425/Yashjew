import React, { useEffect, useState } from 'react'
import styles from "../styles/Username.module.css"
import axios from 'axios'
import bigcarlpic from "../Photos/egitbigcaral.jpg"
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const BillEditAdmin = () => {
const {id}=useParams()
const navigate = useNavigate()
  const initialdata={
    Jew_url:"",
   CustomerName:"",
   Jewellery_Name:"",
   Jew_weight:"",
   HU_ID:"",
   Ornament_Type:"",
   Rate_Of_Ornaments:"",
   Payable_Amount:"",
   Date_Of_Purchase:"",
   Contact:"",
   Address:""
  }
const[formdata,setFormdata] =useState(initialdata)

const Getdata=()=>{
  axios.get(`${process.env.React_App_BillEditAdmin_url1}/${id}`)
  .then((res)=>{
      setFormdata(res.data)
  }).catch((err)=>{
      console.log(err);
  })
}
useEffect(()=>{
Getdata()

},[id,formdata.length])


const Handlechange=(e)=>{
const {name,value} =e.target 
setFormdata({...formdata,[name]:value})
}

const HandleSubmit=(e)=>{
e.preventDefault()
const payload = formdata

axios.patch(`${process.env.React_App_BillEditAdmin_url2}/${id}`,payload)
.then((res)=>{
console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
setFormdata(initialdata)
navigate("/adminbillshow")
}
const {Jew_url,CustomerName,Jewellery_Name,Jew_weight,HU_ID,Ornament_Type,Rate_Of_Ornaments,Payable_Amount,Date_Of_Purchase,Contact,Address} =formdata
  return (
    <div>
      
      <div className='mt-5   '  >
      <span className=' font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            EDIT BILL DATA
            </span><span className='text-3xl  md:text-4xl lg:text-6xl'  >🧙‍♀️</span>
      <div className=' w-[80%] m-auto   '>
        
        <div className='shadow-2xl shadow-orange-400 rounded-2xl  ' >
          <span className=' mt-20  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  ' >
            Edit Form 
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >🧙</span>
          <form onSubmit={HandleSubmit} className='mt-10' >
          
     <label className='font-bold text-lg text-teal-600 '>Jew url 👨‍🔧</label>
     <br/>
          <input name="Jew_url" defaultValue={Jew_url} onChange={Handlechange}  required  placeholder='Jew url'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Customer Name 🧞‍♂️</label>
     <br/>
     <input name="CustomerName" defaultValue={CustomerName} onChange={Handlechange}  required  placeholder='Customer Name'  className={styles.textbox} type="string"  />
     <br/>
     <br/>

     <label className='font-bold text-lg text-teal-600 '>Jewellery Name 👨‍🔧</label>
     <br/>
          <input name="Jewellery_Name" defaultValue={Jewellery_Name} onChange={Handlechange}  required  placeholder='Jewellery Name'  className={styles.textbox} type="string"  />
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Jew weight 🧞‍♂️</label>
     <br/>
     <input name="Jew_weight" defaultValue={Jew_weight} onChange={Handlechange}  required  placeholder='Jew weight'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>HU ID 🧞‍♂️</label>
     <br/>
     <input name="HU_ID" defaultValue={HU_ID} onChange={Handlechange}  required  placeholder='HU ID'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Ornament Type 🧞‍♂️</label>
     <br/>
     <input name="Ornament_Type" defaultValue={Ornament_Type} onChange={Handlechange}  required  placeholder='Ornament Type'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Rate_Of_Ornaments 🧞‍♂️</label>
     <br/>
     <input name="Rate_Of_Ornaments" defaultValue={Rate_Of_Ornaments} onChange={Handlechange}  required  placeholder='Rate_Of_Ornaments'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Payable Amount 🧞‍♂️</label>
     <br/>
     <input name="Payable_Amount" defaultValue={Payable_Amount} onChange={Handlechange}  required  placeholder='Payable Amount'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Date Of Purchase 🧞‍♂️</label>
     <br/>
     <input name="Date_Of_Purchase" defaultValue={Date_Of_Purchase} onChange={Handlechange}  required  placeholder='Date Of Purchase'  className={styles.textbox} type="date"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Contact 🧞‍♂️</label>
     <br/>
     <input name="Contact" defaultValue={Contact} onChange={Handlechange}  required  placeholder='Contact'  className={styles.textbox} type="number"  />
     <br/>
     <br/>
     <label className='font-bold text-lg text-teal-600 '>Address 🧞‍♂️</label>
     <br/>
     <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address'  className={styles.textbox} type="string"  />
     <br/>
     <br/>
     <input    className={styles.btn}  style={{  fontFamily:"serif",fontSize:"20px",  width:"180px" }}  type="submit" value="SUBMIT CHANGES" />
            
          </form>
        </div>
      </div>
    </div>
    </div>
  
  )
}


export default BillEditAdmin