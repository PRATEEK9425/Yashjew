import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const GPlistshowAdmin = () => {
    const {cat,jewtypes} = useParams()
    const[data,setData]=useState([])

const navigate = useNavigate()

  const Getdata=()=>{
      axios.get(`/${cat}/${jewtypes}`)
      .then((res)=>{
          setData(res.data)
      }).catch((err)=>{
          console.log(err);
      })
  }
  const Delfn=(id)=>{
    let url = `/${cat}/remove/${id}`
   
   axios.delete(url)
   .then((res)=>{
    console.log(res.data);
    Getdata()
   })
   .catch((err)=>{
    console.log(err);
   })
  
   }
   const Editfn =(id)=>{
navigate(`/admin_GPproductEdit/${id}/${cat}`)
   }

  useEffect(()=>{

if(data.length==0){
  Getdata()
}

  },[data.length])
  
  return (
    <div>
      
      <div className='shadow-2xl shadow-green-400 '>
        <span  className='   font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900'   >
            GOLD PLATED LIST 
            </span> <span className='text-3xl  md:text-4xl lg:text-6xl' >👨‍🎤</span>

<div  className='    mt-10 w-[90%] grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto  '  >
    {
        data.length>0 && data.map((item)=>{
            return (<div className='shadow-2xl shadow-green-400   rounded-2xl'  >
<img className='rounded-2xl w-full  h-[300px]  ' src={`https://yashjewbackend.onrender.com/${item.GoldImg}`} alt="" />
<h1>{item.Title}</h1>
<h1>{item.Category}</h1>
<h1>{item.Model_No}</h1>
<h1>{item.Availability_Type}</h1>
<h1>{item.Quantity}</h1>
<button onClick={(e)=>Editfn(item._id)}  className='bg-violet-600 rounded-md  text-white font-bold text-lg border-2 w-[100px] border-orange-500 ' >Edit</button>
<button onClick={(e)=>Delfn(item._id)}  className='bg-red-700 rounded-md ml-5  text-white font-bold text-lg border-2 w-[100px] border-orange-500 ' >Delete</button>
            </div>)
        })
    }
</div>



    </div>
      </div>
   
  )
}


export default GPlistshowAdmin