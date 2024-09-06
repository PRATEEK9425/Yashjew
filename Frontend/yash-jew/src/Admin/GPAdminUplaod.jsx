import axios from 'axios'
import React, { useState } from 'react'
import goldadminpic from "../Photos/GPadmin.jpeg"
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const GPAdminUplaod = () => {

const[paths,setPaths]=useState("")
const[modelno,setModelno]=useState("")

const UrlsetPathfn=(value)=>{
setPaths(value)
}
const Modelsetfn=(value)=>{
    setModelno(value)
}

// UPLAOD LOGIC FORM HERE



const [GoldImg, setGoldImg] = useState()
const [Title, setTitle] = useState("")
const[Category,setCategory]=useState("")
const[Model_No,setModel_No]=useState("")
const[Availability_Type,setAvailability_Type]=useState("")
const[Quantity,setQuantity]=useState("")



const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
formData.append("GoldImg", GoldImg)
formData.append("Title", Title)
formData.append("Category",Category)
formData.append("Model_No", modelno+"-"+ Model_No)
formData.append("Availability_Type",Availability_Type)
formData.append("Quantity",Quantity)


// console.log(formData);
const result = await axios.post(`/${paths}`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
console.log(result.data)

alert(`Design Uploaded Successfully`)

  }

const navigate = useNavigate()

  return (
    <div>
      <AdminNavbar/>
    <div  className='W-[80%] mb-5  grid grid-cols-3  font-serif text-2xl text-orange-600  '  >
          <div>
          <button onClick={()=>{navigate("/admin/goldupload_design/uploadgolddesign")}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[70%]  md:h-16 md:w-[300px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."   >
          Gold Design Upload💁</button>
           
            </div>
          <div>
          <button onClick={()=>{navigate("/admin/silverupload_design/uploadsilverdesign")}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[300px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-gray-700 via-orange-700 to-red-500 ..."   >
          Silver Design Upload💁</button>
            
            </div>
          <div>
          <button onClick={()=>{navigate("/adminGPUpload")}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[300px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."   >
          GP  Design Upload 💁</button>
            
            </div>
        </div>
       <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-green-500 to-violet-700">
       GOLD PLATING SECTION UPLOAD
        </span><span className="text-4xl   md:text-6xl lg:text-6xl">📦</span>

       {/* main path and model div */}
    <div  className='w-[40%]  grid grid-cols-2 gap-2 m-auto  ' >
        
      <div>
      <label  className='text-lg font-bold text-orange-500'  for="Jew"> Jewellery Category</label>
<br/>
<br/>
<select className=' h-[40px] w-[260px] rounded-xl text-lg font-bold
 text-blue-600 '  id="Jew"  onChange={(e)=>UrlsetPathfn(e.target.value)}  >
<option value="">JEWELLERY TYPE</option>
  <option value="GP-ring/goldplatingringorder">GP-RING</option>
  <option value="GP-bangles/goldbanglesorder">GP-BANGLES</option>
  <option value="GP-chain/goldchainorder">GP-CHAIN</option>
  <option value="GP-earring/goldearringsorder">GP-EARRING</option>
  <option value="GP-necklace/goldplatingnecklace">GP-NECKLACE</option>
  <option value="GP-kada/goldplatingkadaorder">GP-KADA</option>
  <option value="GP-ankalet/goldplatingankaletorder">GP-ANKALET</option>
  <option value="GP-Toering/goldplatingtoeringorder">GP-TOERING</option>
  <option value="GP-Hamel/goldplatinghamelorder">GP-HAMEL</option>
</select>
        </div> 

        <div>
        <label className='text-lg font-bold text-orange-500' for="Mno"> Jewellery Model</label>
<br/>
<br/>
<select className=' h-[40px] rounded-xl w-[260px] text-lg font-bold text-blue-600 '  id="Mno"  onChange={(e)=>Modelsetfn(e.target.value)}  >
<option >Model No</option>
<option value="YJ-GPR">GP-RING</option>
  <option value="YJ-GPB">GP-BANGLES</option>
  <option value="YJ-GPC">GP-CHAIN</option>
  <option value="YJ-GPE">GP-EARRING</option>
  <option value="YJ-GPN">GP-NECKLACE</option>
  <option value="YJ-GPK">GP-KADA</option>
  <option value="YJ-GPA">GP-ANKALET</option>
  <option value="YJ-GPT">GP-TOERING</option>
  <option value="YJ-GPH">GP-HAMEL</option>
</select>
        </div>
</div>  

 {/* main path and model div */}

{/* post form logic */}
<div className='mt-10  w-[80%] m-auto grid grid-cols-2 gap-2 shadow-2xl shadow-yellow-500 rounded-2xl '  >
    {/* div 1 */}
<div>
<img  className='rounded-2xl m-auto' src={goldadminpic } alt="" />
</div>

{/* form */}
{/* div 2 */}
<div>
<form onSubmit={submit}>
              <label class="block mb-2 text-2xl  lg:text-3xl font-serif border-2 h-[50px] lg:w-[90%]  border-yellow-500 w-full rounded-2xl m-auto text-red-900 dark:text-white" for="file_input">CLICK TO UPLOAD FILE 📂</label>
<input   filename={GoldImg} onChange={e => setGoldImg(e.target.files[0])} type="file" accept="image/*"  class="required className='text-2xl  text-center  h-[50px] lg:w-[90%]   w-full   border-2 border-yellow-500  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
              
          {/* <input  required   className=   ' border-2 border-white'   filename={GoldImg} onChange={e => setGoldImg(e.target.files[0])} type="file" accept="image/*" ></input> */}
       
          <br/>
          <input required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e => setTitle(e.target.value)} type="text" placeholder='Jewellery Name 🧞💍'></input>
          <br/>
          <br/>
          {/* <input required  className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setCategory(e.target.value)} type="text" placeholder='Customer Name 🤠'></input>
           */}
           <select className='  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
             onChange={e =>  setCategory(e.target.value)}  >
<option >Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  
</select>
          <br/>
          <br/>
          <input required   className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '
            onChange={e =>  setModel_No(e.target.value)} type="text" placeholder='Model No 🏛️'></input>
          <br/>
          <br/>
          {/* <input  required className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 '  
          onChange={e =>  setAvailability_Type(e.target.value)} type="number" placeholder='Pincode 🧞‍♀️'></input>
           */}
           <select className='  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
             onChange={e =>  setAvailability_Type(e.target.value)}  >
<option >Availability</option>
  <option value="IN-STOCK">IN-STOCK</option>
  <option value="ON-ORDER">ON-ORDER</option>
  
</select>
          <br/>
          <br/>
          <input required   className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setQuantity(e.target.value)} type="number" placeholder='ORDER Quantity ☎️'></input>
          <br/>
          <br/>
          {/* <input  required  className=   '  text-2xl font-serif text-center  h-[50px] lg:w-[90%]   w-full rounded-2xl  border-2 border-yellow-500 ' 
           onChange={e =>  setGold_Karat(e.target.value)} type="email" placeholder='Email 📩'></input>
           */}
         
          <button className='  rounded-2xl h-[70px]   w-[70%] lg:w-[50%]   border-4 border-teal-600 hover:border-indigo-400 text-4xl bg-amber-400  hover:bg-green-800 text-white font-serif '  type="submit">Submit 😎</button>
          <br/>
          <br/>
        </form>
</div>
{/* form end */}
</div>
{/* post form logic end */}



    </div>
  )
}



export default GPAdminUplaod