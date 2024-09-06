import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CaruselReusableAdminFormCreate from './CaruselReusableAdminForm'




const ReusableCaruselAdmin = ({url,title}) => {
    const[data,setData]=useState([])
const navigate = useNavigate()
  const Getdata=()=>{
      axios.get(`/${url}`)
      .then((res)=>{
          setData(res.data)
      }).catch((err)=>{
          console.log(err);
      })
  }
  const Delfn=(id)=>{
    
    axios.delete(`/${url}/remove/${id}`)
      .then((res)=>{
        console.log(res.data)
        Getdata()
        
      }).catch((err)=>{
          console.log(err);
      })
  
   }
   const Editfn =(id)=>{
navigate(`/editcaruseladmin/${id}/${url}/${title}`)
   }

  useEffect(()=>{
    if(data.length==0){
      Getdata()
    }


  },[data.length])
  
  return (
    <div>
      
      <div className='shadow-2xl shadow-green-400 '>
      
<div  className='    mt-10 w-[90%] grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto  '  >
    {
        data.length>0 && data.map((item)=>{
            return (<div className='shadow-2xl shadow-green-400   rounded-2xl'  >
<img className='rounded-2xl h-[300px] w-full ' src={item.carauselimg} alt="" />
<h1>{item.Title}</h1>
<button onClick={(e)=>Editfn(item._id)}  className='bg-violet-600 rounded-md  text-white font-bold text-lg border-2 w-[100px] border-orange-500 ' >Edit</button>
<button onClick={(e)=>Delfn(item._id)}  className='bg-red-700 rounded-md ml-5  text-white font-bold text-lg border-2 w-[100px] border-orange-500 ' >Delete</button>
            </div>)
        })
    }
</div>

<CaruselReusableAdminFormCreate  createlink={url} titles={title} />

    </div>
      </div>
   
  )
}

export default ReusableCaruselAdmin