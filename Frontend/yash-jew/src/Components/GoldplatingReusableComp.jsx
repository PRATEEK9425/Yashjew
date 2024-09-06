import React, { useEffect, useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { Get_ORDERMainfn } from '../Redux/ALLOrderReducer/action'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Pages/Navbar'

const GoldplatingReusableComp = () => {

const[gender,setGender] = useState("")

const orderdata = useSelector(state=>state.AllOrderReducer.Orderdata)
const dispatch = useDispatch()
const {ornamentstype,name}=useParams()



useEffect(()=>{


 if (gender.length>0 ){
  dispatch(Get_ORDERMainfn(`/${ornamentstype}/${name}/${gender}`))
}

else{
  dispatch(Get_ORDERMainfn(`/${ornamentstype}/${name}`))
}
},[orderdata.length,dispatch,gender.length])

const HandleGenderfn=(gendercat)=>{
setGender(gendercat)

}



const navigate = useNavigate()

  return (
    <div>
      <Navbar/>
   
    <div  className=' w-[97%] m-auto  '  >
<div  className='mt-10' >
<span className="  font-serif text-transparent   text-4xl   md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-gray-600 to-amber-500">
GOLD PLATING OUTLET
        </span>
<span  className="text-4xl   md:text-6xl lg:text-6xl" >🛒</span>
</div>

<div class=" gap-10 mt-10  ">
  {/* filter div1 */}
<div class=   " bg-gray-300    w-[95%] m-auto h-[20%] shadow-2xl shadow-red-900 rounded-2xl ">
    {/* sort by gender div */}
  
<div>
  <h1 className='text-2xl font-serif text-orange-500  '  >Filter By Gender</h1>
</div>

<div className=' grid grid-cols-2 '>
<div  onClick={()=>HandleGenderfn("Male")} >
  <span  className='text-xl font-bold  text-purple-700 text-left' >Male</span>
<span className='text-2xl '> 🧑</span>
</div>
<div  onClick={()=>HandleGenderfn("Female")} >
  <span  className='text-xl font-bold  text-purple-700 text-left' >Female</span>
  <span className='text-2xl '> 👩</span>
</div>
</div>

     {/* sort by gender div end  */}

{/* purity div */}
<br/>

  </div>



{/* filter div 1 end*/}

  {/* div2 result div */}



  <div class=" w-[80%] mt-16 m-auto ">
   
{
orderdata.length>0 ? <div  className='grid   md:grid-cols-2 lg:grid-cols-3 gap-2' >
  {
  orderdata.length>0 && orderdata.map((Item)=>{
    return(<div  className='hover:shadow-2xl hover:shadow-yellow-500 hover:rounded-2xl ' >
      <img  className=' h-[160px] w-[250px] lg:h-[250px] hover:w-[300px] hover:h-[300px]  rounded-2xl m-auto '   src={`https://yashjewbackend.onrender.com/${Item.GoldImg}`} alt="" />
      <h1 className='  text-base lg:text-xl font-serif text-zinc-600'  >{Item.Title}</h1>
      <h1  className='  text-base lg:text-xl font-serif text-zinc-600'  >{Item.Category}</h1>

      <button  onClick={()=>{navigate(`/web-order-GPsingleInfo/${ornamentstype}/${Item._id}`)}}   className=" font-serif   border-4 hover:border-cyan-700 md:hover:text-xl  md:hover:font-bold text-sm lg:text-xl text-white rounded-xl  h-12 w-[130px]  md:h-16 md:w-[200px] bg-gradient-to-r from-orange-600 via-amber-400 to-red-400 ..."   >BUY NOW 💁</button>
    </div>)
  })
}
</div>
:
<div>
  
<h1 className='  text-3xl lg:text-6xl font-serif text-red-700'  >
    Bringing Your Data Please Wait....</h1>
  <br/>
<img  className=' h-[70%]  w-full  lg:w-[80%] m-auto rounded-2xl ' src="https://media-s3-us-east-1.ceros.com/ceros-marketing/images/2019/04/15/65d791197c0b11cf818b98a7ef113b8f/fausto-montanari4.gif" alt="" />


</div>
}
    
  </div>
  {/* div2 result div end */}
</div>

    </div>
    </div>
  )
}



export default GoldplatingReusableComp