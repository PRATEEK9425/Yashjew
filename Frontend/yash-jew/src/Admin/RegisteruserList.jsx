import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'


const RegisteruserList = () => {

    const navigate=useNavigate()

    const[registeruser,setRegisteruser]=useState([])
    
    const Getadata =()=>{
      axios.get(`${process.env.React_App_RegisteruserList_url1}`)
      .then((res)=>{
        setRegisteruser(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
   
    const Editfn=(id)=>{
navigate(`/admin/register/user/adminregisterlistedit/${id}`)
    }

    
const Delfn=(id)=>{
  
axios.delete(`${process.env.React_App_RegisteruserList_url2}/${id}`)
.then((res)=>{
  console.log(res.data);
})
.catch((err)=>{
  console.log(err);
})
}

    useEffect(()=>{
    Getadata()
    },[registeruser.length])




  return (
    <div>
  <AdminNavbar/>
        <span className=' mt-10  font-serif text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900  '  >
   REGISTER USER YASH JEWELLERS
      </span>
      <span className='text-3xl  md:text-4xl lg:text-6xl' > 🦹‍♀️</span>
<div className='w-[90%] m-auto mt-10 border-8 border-cyan-600  '  >
<table className="  w-full ">
  <thead>
    <tr className='bg-pink-700  text-white border-2 border-white  ' >
    
      <th  className='border-2 border-white '  >Name</th>
      <th  className='border-2 border-white ' >Email</th>
      <th  className='border-2 border-white ' >Password</th>
      <th  className='border-2 border-white ' >Mobile Number</th>
    <th  className='border-2 border-white ' >Edit</th>
      <th  className='border-2 border-white ' >Delete Entry</th>
    </tr>
  </thead>
  <tbody>
      
      {
        registeruser.length>0 && registeruser.map((item)=>{
          return (<tr key={item._id} >
            <td  className='bg-purple-500 font-semibold text-white text-lg' >{item.name}</td>
            <td className='bg-pink-500 font-semibold text-black text-lg'  >{item.email}</td>
            <td className='bg-purple-500 font-semibold text-white text-lg' >{item.password}</td>
            <td className='bg-pink-500 font-semibold text-black text-lg'  >{item.Mob_number}</td>
            <td className='bg-purple-500 font-semibold'  ><button onClick={(e)=>Editfn(item._id)}  className='bg-green-500 w-full text-xl hover:text-2xl text-white hover:bg-green-900'>Edit</button></td>
            <td className='bg-pink-500 font-semibold'  ><button onClick={(e)=>Delfn(item._id)}  className='bg-red-500 w-full text-xl hover:text-2xl text-white hover:bg-red-900'>Delete</button></td>
          </tr>)
        })
      }
      
  </tbody>
</table>
</div>


    </div>
  )
}


export default RegisteruserList