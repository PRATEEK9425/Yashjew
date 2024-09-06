import React from 'react'
import Earn_AboutReusableComp from './EarnAbutReusableComp'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const AdminAbout = () => {
  const navigate = useNavigate()
  return (
    <div>
        <AdminNavbar/>
       <div>
       <span  className='   font-extrabold text-transparent   text-3xl  md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-orange-900'   >
        Admin Earn Update
            </span> <span className='text-3xl  md:text-4xl lg:text-6xl' >👨‍🎤</span>

       </div>
            <button  onClick={()=>{navigate("/earnAdmin")}}  className=" mt-5 font-serif   border-4 hover:border-teal-500 md:hover:text-xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[330px] bg-gradient-to-r from-gray-600 via-cyan-700 to-pink-600 ..."   >
            TO  EARN ADMIN 😎</button>

<Earn_AboutReusableComp url ={"aboutdata"} editpath={"About-Admin"}   />

    </div>
  )
}



export default AdminAbout