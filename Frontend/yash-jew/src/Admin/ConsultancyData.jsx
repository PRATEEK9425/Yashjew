import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
const ConsultancyData = () => {
  const navigate = useNavigate()
const[data,setData] =useState([])
const Getdata=()=>{
    axios.get(`${process.env.React_App_ConsultancyData_url1}`)
    .then((res)=>{
        setData(res.data)
    }).catch((err)=>{
        console.log(err);
    })

}


  const Editfn=(id)=>{
  navigate(`/admin_consultancyEdit_data/${id}`)
  console.log(id);
  }

  const Delfn=(id)=>{

    axios.delete(`${process.env.React_App_ConsultancyData_url2}/${id}`)
        .then((res)=>{
            console.log(res.data)
            Getdata()
        }).catch((err)=>{
            console.log(err);
        })
        
    }

useEffect(()=>{
if(data.length==0){
    Getdata()
}
},[data.length,Delfn])




  return (
    <div>
      <AdminNavbar/>
<span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
CONSULTANCY 
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">☎️</span>

{/* table */}
<div  className='w-[80%] m-auto mt-5' >
<table className="  w-full rounded-2xl  ">
  <thead>
    <tr className='bg-fuchsia-500 font-serif  text-white border-8 border-sky-600 ' >
    <th className='border-2 border-white font-serif'   >Customer Name</th>
      <th  className='border-2 border-white font-serif'>Customer Email</th>
      <th className='border-2 border-white font-serif'>Contact Details</th>
      <th className='border-2 border-white font-serif'>Available Time</th>
      <th className='border-2 border-white font-serif'>Edit</th>
      <th className='border-2 border-white font-serif'>Delete Entry</th>
    </tr>
  </thead>
  <tbody>
      
      {
        data.length>0 && data.map((item)=>{
          return (<tr className='border-8 border-cyan-800  '   key={item._id} >



            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.customer_name}</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.customer_email}</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >+91-{item.customer_Mob_Number}</td>
                         <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Time_Of_avalability} IST</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-red-900 text-lg'  ><button   onClick={(e)=>Editfn(item._id)} className='bg-emerald-400 w-[60px] text-xl hover:text-2xl border-2 border-white rounded-xl text-white hover:bg-teal-950 '>Edit</button></td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-red-900 text-lg'  ><button onClick={(e)=>Delfn(item._id)}  className='bg-red-500 w-full text-xl hover:text-2xl border-2 border-white rounded-xl text-white hover:bg-red-900'>Delete</button></td>
          </tr>)
        })
      }
      
  </tbody>
</table>
</div>
{/* table end */}
    </div>
  )
}

export default ConsultancyData