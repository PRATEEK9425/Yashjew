import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import Navbar from '../Pages/Navbar'

const SilverSingleCard = () => {
const navigate= useNavigate()
const{id,ornamentstype} =useParams()

const [data,setData]=useState("")


const Getdata=()=>{
  axios.get(`/${ornamentstype}/${id}`)
  .then((res)=>{
  setData(res.data)
  })
  .catch((err)=>{
    console.log(err);
  })
}


useEffect(()=>{
if(data.length==0){
  Getdata()
}
},[id,data.length])


  return (
    <div>
<Navbar/>
   
    <div  className='w-[80%] m-auto   '  >
      {/* main div */}

     {
      data.length == 0 ? <div  className='w-[80%] m-auto  ' >
        <img  className='m-auto   '  src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif" alt="" />
       <h1 className='text-4xl font-serif text-gray-500'   > Loading...</h1>
        
        </div>

      :
      <div  className='grid grid-cols-1   lg:grid-cols-2 gap-2'  >
        
      <div  >
        <img className='m-auto rounded-2xl  w-[70%] h-[100%] hover:w-[150%] hover-h-[150%] '  src={`https://yashjewbackend.onrender.com/${data.GoldImg}`} alt="" />
      </div>
    <div   >
      <h1 className=' text-2xl lg:text-5xl mt-14 font-serif text-transparent    bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700   '  >{data.Title}</h1>
      <span className=' text-2xl  lg:text-3xl font-mono text-red-400  ' >Gender -  {data.Category=="Male" ? <span> {data.Category}  🦸‍♂️ </span>  : <span>{data.Category}  🦸‍♀️</span>} </span>
      <div className='grid grid-cols-2 gap-5  font-serif text-transparent    bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700  '  >
<div>Model-NO     {data.Model_No}</div>
<div>Availability   <span className='text-green-800' >{data.Availability_Type} </span> </div>
      </div>
      <h1 className='text-3xl  font-serif text-transparent    bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700   '  >Purity - {data.Gold_Karat}</h1>
      <button onClick={()=>navigate(`/Web-place-order/${ornamentstype}/${data._id}`)}   className=" font-serif mt-4  border-4 hover:border-cyan-700 md:hover:text-xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[200px]  md:h-16 md:w-[200px] bg-gradient-to-r from-orange-600 via-amber-400 to-red-400 ..."   >ORDER NOW 💁</button>
    </div>
    
  </div>
     }
        {/* main div */}
     
    </div>
    </div>
  )
}



export default SilverSingleCard