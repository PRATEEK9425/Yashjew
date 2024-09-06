import axios from 'axios'
import React, { useState } from 'react'
import avatar from "../Photos/avatar.jpg"
import Navbar from './Navbar'



const Customorder = () => {
  const [GoldImg, setGoldImg] = useState()
    const [Title, setTitle] = useState("")
  const[Customer_Name,setCustomer_Name]=useState("")
const[Address,setAddress]=useState("")
const[Pincode,setPincode]=useState("")
const[Contact,setContact]=useState("")
const[Email_Address,setEmail_Address]=useState("")

    const submit = async event => {
      event.preventDefault()
  
      const formData = new FormData()
  formData.append("GoldImg", GoldImg)
  formData.append("Title", Title)
  formData.append("Customer_Name",Customer_Name)
  formData.append("Address",Address)
  formData.append("Pincode",Pincode)
  formData.append("Contact",Contact)
  formData.append("Email_Address",Email_Address)

// console.log(formData);
  const result = await axios.post(`${process.env.React_App_Customorder_url}`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
  console.log(result.data)

  alert("Order Placed Our Team WILL Contact You For Further Enquiry ")
    }
    
  return (
    <div   >
      <Navbar/>
      <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-green-500 to-violet-700">
UPLOAD YOUR ORDER
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">📦</span>

            
            <div className='grid mt-5  grid-cols-1 gap-1   lg:gap-3  md:grid-cols-2  lg:grid-cols-2  w-full  lg:w-[80%] m-auto  '  > 
              {/* div1 */}
              <div>
                <img className=' rounded-2xl shadow-2xl shadow-orange-400  w-[500px] h-[300px]  m-auto  md:h-[600px]  lg:h-[600px] '  src={avatar } alt="" />
              </div>
              {/* div2 */}


              <div  className='shadow-2xl shadow-orange-400 rounded-3xl md:h-[600px] md:w-[350px] md:gap-4 lg:h-[600px] lg:w-[550px] w-full  '  >
              <span className=' mt-10  font-serif text-transparent   text-2xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500  ' >
             UPLOAD YOUR DESIGN
            </span><span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>

<br/>
<br/>
              <form onSubmit={submit}>
              <label class="block mb-2 text-2xl  lg:text-3xl font-serif border-2 h-[50px] lg:w-[90%]  border-yellow-500 w-full rounded-2xl m-auto text-red-900 dark:text-white" for="file_input">CLICK TO UPLOAD FILE 📂</label>
<input   filename={GoldImg} onChange={e => setGoldImg(e.target.files[0])} type="file" accept="image/*"  class="required className='text-2xl  text-center  h-[50px] lg:w-[90%]   w-full   border-2 border-yellow-500  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
              
          {/* <input  required   className=   ' border-2 border-white'   filename={GoldImg} onChange={e => setGoldImg(e.target.files[0])} type="file" accept="image/*" ></input> */}
       
          <br/>
          <input required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  onChange={e => setTitle(e.target.value)} type="text" placeholder='Jewellery Name 🧞💍'></input>
          <br/>
          <br/>
          <input required  className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  onChange={e =>  setCustomer_Name(e.target.value)} type="text" placeholder='Customer Name 🤠'></input>
          <br/>
          <br/>
          <input required   className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  onChange={e =>  setAddress(e.target.value)} type="text" placeholder='Address 🏛️'></input>
          <br/>
          <br/>
          <input  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  onChange={e =>  setPincode(e.target.value)} type="number" placeholder='Pincode 🧞‍♀️'></input>
          <br/>
          <br/>
          <input required   className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  onChange={e =>  setContact(e.target.value)} type="number" placeholder='Mobile Number ☎️'></input>
          <br/>
          <br/>
          <input  required  className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  onChange={e =>  setEmail_Address(e.target.value)} type="email" placeholder='Email 📩'></input>
          <br/>
          <br/>
          <button className='  rounded-2xl h-[50px]  w-[70%] lg:w-[50%]   border-4 border-teal-600 hover:border-indigo-400 text-2xl bg-teal-700  hover:bg-red-500 text-white font-serif '  type="submit">Submit 😎</button>
          <br/>
          <br/>
        </form>
              </div>

            </div>
            
            
             
    </div>
  )
}

export default Customorder