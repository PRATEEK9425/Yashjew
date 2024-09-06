import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FindIDnadDelete, Get_OrderList_Mainfn } from '../Redux/OrderList/action'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const CustomerUploadOrder = () => {

  const  orderlist = useSelector(store=>store.OrderReducer.Data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    
   const Delfn=(id)=>{
    dispatch(FindIDnadDelete(id))
  
   }
  
   const Editfn=(id)=>{
  navigate(`/admingoldorderEdit/${id}`)
   }

const SendmailToCustomer   =(id)=>{
  navigate(`/sendEmailToUser/${id}`)
}

   useEffect(()=>{
    if(orderlist.length===0){
      dispatch(Get_OrderList_Mainfn())
    }
    
    },[dispatch,orderlist.length,Delfn])



  return (
    <div>
<AdminNavbar/>
      <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
CUSTOMISE ORDER LIST
</span><span className="text-4xl   md:text-6xl lg:text-8xl">💍</span>
<div  className='w-[80%] text-2xl grid grid-cols-3 gap-5 m-auto '  >
  <div><button  onClick={()=>navigate("/admin/web-GS-orderList")} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."  >Gold & Silver Orders</button></div>
  <div><button  onClick={()=>navigate("/admin/web-GP-orderList")} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."  >Gold Plating orders</button></div>
  <div><button  onClick={()=>navigate("/customer_upload_order")} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."  >Customise Orders</button></div>
</div>
      <div   className='w-[95%] m-auto mt-10 font-serif ' >
  {/* ----------Table--------- */}
  <table className="  w-full rounded-2xl  ">
  <thead>
    <tr className='bg-fuchsia-500 font-serif  text-white border-8 border-sky-600 ' >
    <th className='border-2 border-white font-serif'   >Order Image</th>
      <th  className='border-2 border-white font-serif'>Jewellery Name</th>
      <th className='border-2 border-white font-serif'>Customer_Name</th>
      <th className='border-2 border-white font-serif'>Address</th>
      <th className='border-2 border-white font-serif'>Pincode</th>
      <th className='border-2 border-white font-serif'>Contact</th>
      <th className='border-2 border-white font-serif'>Email_Address</th>
      <th className='border-2 border-white font-serif'>Send Email</th>
      <th className='border-2 border-white font-serif'>Edit</th>
      <th className='border-2 border-white font-serif'>Delete Entry</th>
    </tr>
  </thead>
  <tbody>
      
      {
        orderlist.length>0 && orderlist.map((item)=>{
          return (<tr className='border-8 border-cyan-800  '   key={item._id} >

<td><img className="h-[150px] w-full rounded-2xl " src={`https://yashjewbackend.onrender.com/${item.GoldImg}`} alt="image description"/></td>
 
             <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Title}</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.Customer_Name}</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Address}</td>
            <td className='bg-purple-500 font-semibold border-2 border-white text-white text-lg' >{item.Pincode}</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-black text-lg'  >{item.Contact} </td>

            <td className='bg-purple-500 font-semibold border-2 border-white text-black text-lg'   >{item.Email_Address}</td>
            <td className='bg-pink-500 font-semibold border-2 border-white text-red-900 text-lg'  ><button onClick={(e)=>SendmailToCustomer(item._id)}   className='bg-blue-600 w-[80px] text-base border-2 border-white rounded-2xl hover:text-2xl text-white hover:bg-teal-950 '>Send Email</button></td>
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

export default CustomerUploadOrder