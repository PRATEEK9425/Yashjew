import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { BilldataMainFn, Billdata_FindByIdandDel } from '../Redux/BillReducer/action'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const BillAllAdmin = () => {

  const  orderlist = useSelector(store=>store.BillReducer.Data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    
   const Delfn=(id)=>{
    dispatch(Billdata_FindByIdandDel(id))
    dispatch(BilldataMainFn())
  
   }
  
   const Editfn=(id)=>{
  navigate(`/billedit/${id}`)
   }



   useEffect(()=>{
    if(orderlist.length==0){
      dispatch(BilldataMainFn())
    }
    
    },[dispatch,orderlist.length])



  return (
    <div>
      <AdminNavbar/>
      <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
Total Bill Genrated List
</span><span className="text-4xl   md:text-6xl lg:text-6xl"> 📋</span>



      <div   className='w-full m-auto mt-10 font-serif ' >
<h1 className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-red-500 to-amber-400"  >
  Total Bill Generated - {orderlist.length}
</h1>


  {/* ----------Table--------- */}
  <table className="  w-full rounded-2xl mt-5 ">
  <thead>
    <tr className='bg-fuchsia-500 font-serif  text-white border-8 border-sky-600 ' >
    <th className='border-2 border-white font-serif w-[100px]  '   > Image</th>
      <th  className='border-2 border-white font-serif'>C_Name</th>
      <th className='border-2 border-white font-serif'>Jew_Name</th>
      <th className='border-2 border-white font-serif'>weight</th>
      <th className='border-2 border-white font-serif'>HU_ID</th>
      <th className='border-2 border-white font-serif'>Ornament_Type</th>
      <th className='border-2 border-white font-serif'>R.O Jew</th>
      <th className='border-2 border-white font-serif'>Paid_Amount</th>
      <th className='border-2 border-white font-serif'>Date of Purchase</th>
      <th className='border-2 border-white font-serif'>Contact</th>
      <th className='border-2 border-white font-serif'>Address</th>
      <th className='border-2 border-white font-serif'>Edit</th>
      <th className='border-2 border-white font-serif'>Delete </th>
    </tr>
  </thead>
  <tbody>
      
      {
        orderlist.length>0 && orderlist.map((item)=>{
          return (<tr className='border-8 border-cyan-800  '   key={item._id} >

<td  className='w-[350px]' ><img class="h-[150px]  rounded-2xl w-[300px]  " src={`https://yashjewbackend.onrender.com/${item.Jew_url}`} alt="image description"/></td>
             <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.CustomerName}</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.Jewellery_Name}</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Jew_weight} gram</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-black text-lg'   >{item.HU_ID}</td>
             <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Ornament_Type}</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.Rate_Of_Ornaments} ₹</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Payable_Amount} ₹ </td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Date_Of_Purchase} </td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-black text-lg'   >{item.Contact} </td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Address} </td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-red-900 text-lg'  ><button   onClick={(e)=>Editfn(item._id)} className='bg-emerald-400 w-[60px] text-xl hover:text-2xl border-2 border-white rounded-xl text-white hover:bg-teal-950 '>Edit</button></td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-red-900 text-lg'  ><button onClick={(e)=>Delfn(item._id)}  className='bg-red-500 w-full text-xl hover:text-2xl border-2 border-white rounded-xl text-white hover:bg-red-900'>Delete</button></td>
          </tr>)
        })
      }
      
  </tbody>
</table>
   {/* ----------Table--------- */}
</div>
    </div>
  )
}





export default BillAllAdmin