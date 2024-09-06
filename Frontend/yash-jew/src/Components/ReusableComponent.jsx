import React, { useEffect, useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { Get_ORDERMainfn } from '../Redux/ALLOrderReducer/action'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Pages/Navbar'

const ReusableComponent = () => {

const[gender,setGender] = useState("")
const[goldpurity,setGoldpurity]=useState("")
const orderdata = useSelector(state=>state.AllOrderReducer.Orderdata)
const dispatch = useDispatch()
const {ornamentstype,name}=useParams()



useEffect(()=>{

if(gender.length>0 && goldpurity.length>0 ){
  dispatch(Get_ORDERMainfn(`/${ornamentstype}/${name}/${goldpurity}/${gender}`))
}else if (gender.length>0 ){
  dispatch(Get_ORDERMainfn(`/${ornamentstype}/${name}/${gender}`))
}
else if(goldpurity.length>0){
  dispatch(Get_ORDERMainfn(`/${ornamentstype}/${name}/checkpurity/${goldpurity}`))
}
else{
  dispatch(Get_ORDERMainfn(`/${ornamentstype}/${name}`))
}
},[orderdata.length,dispatch,gender.length,goldpurity.length])

const HandleGenderfn=(gendercat)=>{
setGender(gendercat)

}

const HandlePurity=(e)=>{
  
  setGoldpurity(e.target.value);
  
}

const navigate = useNavigate()

  return (
    <div> 
      <Navbar/>
    <div  className=' w-[97%] m-auto  '  >

<span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
GOLD STORE
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💍</span>


<div  >
  {/* filter div1 */}
<div class=   " bg-gray-300  w-full lg:w-[70%] m-auto  shadow-2xl hover:shadow-emerald-600 rounded-2xl ">
    {/* sort by gender div */}
  
<div>
  <h1 className='text-2xl font-serif text-orange-500  '  >Filter By Gender</h1>
</div>

<div className='grid grid-cols-2'>
<div  onClick={()=>HandleGenderfn("Male")} >
  <span  className='text-xl hover:text-4xl  font-bold  text-purple-700 text-left' >Male</span>
<span className='text-2xl  hover:text-4xl '> 🧑</span>
</div>
<div  onClick={()=>HandleGenderfn("Female")} >
  <span  className='text-xl hover:text-4xl font-bold  text-purple-700 text-left' >Female</span>
  <span className='text-2xl hover:text-4xl '> 👩</span>
</div>
</div>
     {/* sort by gender div end  */}

{/* purity div */}
<br/>
<h1 className='text-2xl font-serif text-orange-500  '>Sort By Gold Purity</h1>

<div  className='grid grid-cols-5 text-sky-700 ' >
<div   >
<input 
                        type="checkbox"
                        value="Gold-14k-585"
                        onChange={HandlePurity}
                      />
                       <br/>
                      <label className='text-sm  lg:text-xl font-serif ' >  GOLD-14K-585</label>
</div>

<div >
<input 
                        type="checkbox"
                        value="Gold-18K-750"
                        onChange={HandlePurity}
                      />
                       <br/>
                      <label className='text-sm  lg:text-xl font-serif ' >  GOLD-18K-750</label>
</div>

<div >
<input 
                        type="checkbox"
                        value="Gold-20k-833"
                        onChange={HandlePurity}
                      />
                       <br/>
                      <label className='text-sm  lg:text-xl font-serif ' >  GOLD-20k-833</label>
</div>


<div >
<input 
                        type="checkbox"
                        value="Gold-22k-916"
                        onChange={HandlePurity}
                      />
                       <br/>
                      <label className='text-sm  lg:text-xl font-serif ' >  GOLD-22k-916</label>
</div>

<div >
<input 
                        type="checkbox"
                        value="Gold-24k-999"
                        onChange={HandlePurity}
                      />
                      <br/>
                      <label className=' text-sm  lg:text-xl font-serif ' >  GOLD-24k-999</label>
</div>
</div>

  </div>



{/* filter div 1 end*/}





  {/* div2 result div */}



  <div class=" col-span-2   mt-10 ">
   
{
orderdata.length>0 ? <div  className='grid  grid-cols-2  lg:grid-cols-3 ' >
  {
  orderdata.length>0 && orderdata.map((Item)=>{
    return(<div  className='hover:shadow-2xl hover:shadow-orange-400 hover:rounded-2xl ' >
      <img  className=' h-[150px]  lg:w-[250px] lg:h-[250px] hover:w-[300px] hover:h-[300px]  rounded-2xl m-auto '   src={`https://yashjewbackend.onrender.com/${Item.GoldImg}`} alt="" />
      <h1 className=' text-sm lg:text-xl font-serif text-zinc-600'  >{Item.Title}</h1>
      <h1  className=' text-sm lg:text-xl font-serif text-zinc-600'  >{Item.Category}</h1>
      <h1 className=' text-sm lg:text-xl font-serif text-zinc-600'  >{Item.Gold_Karat}</h1>
      <button  onClick={()=>{navigate(`/web-order-singleInfo/${ornamentstype}/${Item._id}`)}}  
       className=" font-serif   border-4 hover:border-cyan-700 md:hover:text-xl  md:hover:font-bold  text-xs lg:text-xl text-white rounded-xl  h-10 w-[70%]  md:h-16 md:w-[200px] bg-gradient-to-r from-orange-600 via-amber-400 to-red-400 ..."   >BUY NOW 💁</button>
    </div>   )
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

export default ReusableComponent