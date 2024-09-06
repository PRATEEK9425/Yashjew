import React from 'react'
import ReusableCaruselAdmin from '../Admincomponent/ReusableCaruselAdnin'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const SilvercarauselAdmin = () => {
  const navigate = useNavigate()
  return (
    <div>
      <AdminNavbar/>
       <div  className='W-[80%]  grid grid-cols-3  font-serif text-2xl text-orange-600  '  >
          <div>
          <button onClick={()=>{navigate("/admingoldcarusel")}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."   >
          Gold Carusel 💁</button>
           
            </div>
          <div>
          <button onClick={()=>{navigate("/adminsilvercarusel")}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-gray-700 via-orange-700 to-red-500 ..."   >
          Silver Carausel 💁</button>
            
            </div>
          <div>
          <button onClick={()=>{navigate("/admingoldplatingcarusel")}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."   >
          GP CARAUSEL 💁</button>
            
            </div>
        </div> 
      
        <span  className='   font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900'   >
        Silver Carausel Admin
            </span> <span className='text-3xl  md:text-4xl lg:text-6xl' >👨‍🎤</span>


<ReusableCaruselAdmin  url={"silvercarausel"} title={"SILVER-SLIDER"}   />

    </div>
  )
}



export default SilvercarauselAdmin