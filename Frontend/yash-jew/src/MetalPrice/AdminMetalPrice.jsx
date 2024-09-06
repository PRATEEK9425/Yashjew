import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const AdminMetalPrice = () => {

const[price,setPrice] = useState({})

const GetPrice=()=>{
    axios.get(`${process.env.React_App_AdminMetalPrice}`)
    .then((res)=>{
        setPrice(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}

useEffect(()=>{

    GetPrice()
},[price.length])

const navigate = useNavigate()

  return (
    <div>
       <AdminNavbar/> 

    <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"  >
    METAL PRICE
        </span><span className="text-4xl   md:text-6xl lg:text-6xl">  🕵️‍♂️</span>

<div className='w-[70%] grid grid-cols-2 m-auto gap-2 mt-2  '  >
    <div>
        <h1 className='text-2xl font-serif text-orange-500  '  >Gold Price 20k - {price.Gold_Price_20k} ₹ Per 10 gram</h1>
    <button onClick={()=>{navigate(`/adminmetalprice_update/${price._id}`)}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[300px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."  >UPDATE GOLD PRICE</button>
    </div>
    <div>
        <h1 className='text-2xl font-serif text-orange-500  '  >Gold Price 22k - {price.Gold_Price_22k } ₹ Per 10 gram</h1>
    <button onClick={()=>{navigate(`/adminmetalprice_update/${price._id}`)}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[300px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."  >UPDATE GOLD PRICE</button>
    </div>
    <div>
        <h1 className='text-2xl font-serif text-orange-500  '  >Gold Price 24k - {price.Gold_Price_24k} ₹ Per 10 gram</h1>
    <button onClick={()=>{navigate(`/adminmetalprice_update/${price._id}`)}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[300px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."  >UPDATE GOLD PRICE</button>
    </div>
    <div>
        <h1 className='text-2xl font-serif text-gray-600 '   >Silver Price - {price.Silver_Price} ₹ Per kg</h1>
        <button onClick={()=>{navigate(`/adminmetalprice_update/${price._id}`)}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[320px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."   >UPDATE SILVER PRICE</button>
         </div>
</div>

  

   


    </div>
  )
}


export default AdminMetalPrice