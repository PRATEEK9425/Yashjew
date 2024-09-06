import React, { useEffect, useState } from 'react'
import axios from "axios"
const Metalprice = () => {

const[price,setPrice] = useState({})

const GetPrice=()=>{
    axios.get(`${process.env.React_App_Metalprice}`)
    .then((res)=>{
        setPrice(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}

useEffect(()=>{

    GetPrice()
},[price.length])


  return (
    <div>
        

    <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"  >
    METAL PRICE
        </span><span className="text-4xl   md:text-6xl lg:text-6xl">  🕵️‍♂️</span>

<div className='w-[70%] grid grid-cols-2 m-auto gap-2 mt-2  '  >
    <div><h1 className='text-2xl font-serif text-orange-500  '  >Gold Price 20k - {price.Gold_Price_20k} ₹ Per 10 gram</h1></div>
    <div><h1 className='text-2xl font-serif text-orange-500  '  >Gold Price 22k  - {price.Gold_Price_22k} ₹ Per 10 gram</h1></div>
    <div><h1 className='text-2xl font-serif text-orange-500  '  >Gold Price  24k    - {price.Gold_Price_24k} ₹ Per 10 gram</h1></div>
    <div><h1 className='text-2xl font-serif text-gray-600 '   >Silver Price - {price.Silver_Price} ₹ Per kg</h1> </div>
</div>

  
   


    </div>
  )
}

export default Metalprice