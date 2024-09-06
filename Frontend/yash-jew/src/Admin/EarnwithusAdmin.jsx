import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const EarnwithusAdmin = () => {
  const navigate = useNavigate()
const[data,setData] =useState([])
const Getdata=()=>{
    axios.get(`${process.env.React_App_EarnwithusAdmin_url1}`)
    .then((res)=>{
        setData(res.data)
    }).catch((err)=>{
        console.log(err);
    })

}


  const Editfn=(id)=>{
  navigate(`/adminearn&referedit/${id}`)
  
  }

  const Delfn=(id)=>{

    axios.delete(`${process.env.React_App_EarnwithusAdmin_url2}/${id}`)
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
Refer & Earn Admin Panel
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💸</span>

{/* table */}
<div  className='w-[90%] m-auto mt-5' >
<table className="  w-full rounded-2xl  ">
  <thead>
    <tr className='bg-fuchsia-500 font-serif  text-white border-8 border-sky-600 ' >
    <th className='border-2 border-white font-serif'   >Jewellery Name</th>
      <th  className='border-2 border-white font-serif'>Weight in Grams</th>
      <th className='border-2 border-white font-serif'>Budget</th>
      <th className='border-2 border-white font-serif'>Customer Name</th>
      <th className='border-2 border-white font-serif'>Customer Email</th>
      <th className='border-2 border-white font-serif'>Customer Contact</th>
      <th className='border-2 border-white font-serif'>Address</th>
      
      <th className='border-2 border-white font-serif'>Edit</th>
      <th className='border-2 border-white font-serif'>Delete Entry</th>
    </tr>
  </thead>
  <tbody>
      
      {
        data.length>0 && data.map((item)=>{
          return (<tr className='border-8 border-cyan-800  '   key={item._id} >



            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.Jew_name}</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.weight} gram</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.Budget}</td>
                         <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Name} </td>
<td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Email}</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >+91-{item.contact}</td>
                         <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Address} </td>

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


export default EarnwithusAdmin