
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import React, { useState } from 'react'
import avatar from "../Photos/avatar.jpg"
import AdminNavbar from "../AdminNavbar/AdminNavbar";



const  BillForm = () => {

const navigate=useNavigate()

  const [ Jew_url,setJew_url] = useState()
    const [CustomerName, setCustomerName] = useState("")
  const[Jewellery_Name,setJewellery_Name]=useState("")
const[Jew_weight,setJew_weight]=useState("")
const[HU_ID,setHU_ID]=useState("")

const[  Ornament_Type,setOrnament_Type]=useState("")
const[Rate_Of_Ornaments,setRate_Of_Ornaments]=useState("")
const[Payable_Amount,setPayable_Amount]=useState("")
const[ Date_Of_Purchase,setDate_Of_Purchase]=useState("")

const[Contact,setContact]=useState("")
const[Address,setAddress]=useState("")

    const submit = async event => {
      event.preventDefault()
  
      const formData = new FormData()
  formData.append("Jew_url",  Jew_url)
  formData.append("CustomerName", CustomerName)
  formData.append("Jewellery_Name",Jewellery_Name)
  formData.append("Jew_weight",Jew_weight)
  formData.append("HU_ID",HU_ID)
  formData.append("Ornament_Type", Ornament_Type)
  formData.append("Rate_Of_Ornaments",Rate_Of_Ornaments)
  formData.append("Payable_Amount",Payable_Amount)
  formData.append("Date_Of_Purchase",Date_Of_Purchase)
  formData.append("Contact",Contact)
  formData.append("Address",Address)



// console.log(formData);
  const result = await axios.post(`${process.env.React_App_BillForm}`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
  let Huid_No =result.data.HU_ID_No
navigate(`/billingcustomer/${Huid_No}`)
  alert("Wait Generating Your Bill" )
console.log(result.data);
    }

const ToAllbillfn=()=>{
  navigate("/adminbillshow")
}

  return (
    <div  >
      <AdminNavbar/>
      <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-slate-600 to-yellow-600">
GENRATE CUSTOMER BILL
        </span><span className="text-4xl   md:text-6xl lg:text-6xl">💍</span>
      
            <div className='mt-5 w-[80%] m-auto   '  > 
              {/* div1 */}
             
              <span className=' mt-10  font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-gray-600 to-yellow-500  ' >
             PDF BILL TO CUSTOMER
            </span>
            <span className='text-3xl  md:text-4xl lg:text-4xl' >💂‍♂️</span>

              <div  className='shadow-2xl shadow-orange-400 rounded-3xl w-[75%] m-auto  '  >
         
            <button  onClick={()=>{navigate("/adminordersearch")}}  className=" font-serif   border-4 hover:border-teal-500 md:hover:text-xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[330px] bg-gradient-to-r from-gray-600 via-cyan-700 to-pink-600 ..."   >SEARCH BILL BY NUMBER 😎</button>
            <button  onClick={ToAllbillfn}  className=" font-serif   border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-gray-600 via-cyan-700 to-pink-600 ..."   >ALL BILLS 😎</button>

<br/>
<br/>
              <form onSubmit={submit}>
              <label class="block mb-2 text-3xl font-serif border-2 h-[50px] lg:w-[90%]  border-yellow-500 w-full rounded-2xl m-auto text-red-900 dark:text-white" for="file_input">CLICK TO UPLOAD FILE 📂</label>
<input   filename={ Jew_url} onChange={e => setJew_url(e.target.files[0])} type="file" accept="image/*"  class="required className='text-2xl  text-center  h-[50px] lg:w-[90%]   w-full   border-2 border-yellow-500  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input"/>
              
          {/* <input  required   className=   ' border-2 border-white'   filename={ Jew_url} onChange={e => set Jew_url(e.target.files[0])} type="file" accept="image/*" ></input> */}
       
          <br/>
          <input required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  
          onChange={e => setCustomerName(e.target.value)} type="text" placeholder='Customer Name 🧞💍'></input>
          <br/>
          <br/>
          <input required  className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e => setJewellery_Name(e.target.value)} type="text" placeholder='Jewellery Name 🤠'></input>
          <br/>
          <br/>
          <input required   className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '
            onChange={e =>  setJew_weight(e.target.value)} type="number" placeholder='Weight in Grams 🏛️'></input>
          <br/>
          <br/>
          <input  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setHU_ID(e.target.value)} type="text" placeholder='HU-ID NO. 🧞‍♀️'></input>
          <br/>
          <br/>

          <select  onChange={e =>  setOrnament_Type(e.target.value)}  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' >
  <option value="someOption">TYPE OF JEWELLERY</option>
  <option value="Gold">Gold </option>
  <option value="Silver">Silver</option>
  <option value="Gold-Plated">Gold-Plated</option>
</select>
<br/>
          <br/>
          <input  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setRate_Of_Ornaments(e.target.value)} type="number" placeholder='Rate Of Metal On Purchase Date 🧞‍♀️'></input>
          <br/>
          <br/>

          <input  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setPayable_Amount(e.target.value)} type="number" placeholder='Total Amount 🧞‍♀️'></input>
          <br/>
          <br/>
<label className="text-red-600 font-serif">Purchase Date</label>
<br/>
          
          <input  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setDate_Of_Purchase(e.target.value)} type="date" placeholder='Purchase Date 🧞‍♀️'></input>
          <br/>
          <br/>

          <input required   className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setContact(e.target.value)} type="number" placeholder='Mobile Number ☎️'></input>
          <br/>
          <br/>
          <input  required  className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '
           onChange={e =>  setAddress(e.target.value)} type="text" placeholder='ADDRESS 📩'></input>
          <br/>
          <br/>
          <button className=" font-serif   border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-gray-600 via-cyan-700 to-pink-600 ..."   type="submit">Generate Bill 😎</button>
          <br/>
          <br/>
        </form>
              </div>

            </div>
            
            
             
    </div>
  )
}

export default BillForm