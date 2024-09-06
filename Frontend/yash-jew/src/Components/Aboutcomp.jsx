import React, { useEffect, useState } from 'react'
import axios from "axios"


const Aboutcomp = ({url}) => {

  const[data,setData]=useState([])
const Getdatafn=()=>{
  axios.get(`/${url}`)
  .then((res)=>{
setData(res.data)
  })
  .catch((err)=>{
console.log(err);
  })
}
useEffect(()=>{
Getdatafn()
},[data.length])
console.log(data);
  return (
    <div>

<div className='w-[90%] grid  grid-cols-2 lg:grid-cols-3 gap-4  m-auto ' >
  {
data.length>0 && data.map((item)=>{
  return ( <div className='bg-white rounded-2xl hover:shadow-2xl hover:bg-orange-200 hover:shadow-teal-600  ' >
    <img  className='rounded-full h-[100px] w-[100px] m-auto  '   src={item.Image_url} alt="error" />
  <h1 className=' text-sm  lg:text-2xl font-bold '  >{item.Title}</h1>
  <p className=' text-sm  lg:text-xl font-mono '  >{item.Description}</p>
  
  </div> )
})
  }
</div>

        
    </div>
  )
}

export default Aboutcomp