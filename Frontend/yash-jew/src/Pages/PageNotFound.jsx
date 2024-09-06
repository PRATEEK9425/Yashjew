import React from 'react'
import Navbar from './Navbar'
import pagenotfoundpic from "../Photos/pagenotfoundpic.jpg"   
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {
const navigate = useNavigate()

const Handlenav=()=>{
    navigate("/")
}

  return (
    <div>
       
        <div className='w-[80%]  m-auto '  >
       
        <div className='mt-2'  >
        <span className=" h-full   font-extrabold text-transparent  text-5xl   md:text-6xl lg:text-9xl bg-clip-text bg-gradient-to-r from-violet-300 to-violet-800" >
     404
      </span>
      <h1 className="  font-extrabold text-transparent  text-3xl   md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-green-500 to-violet-800"  >OOPS! Page Not Found </h1>
        
        <img  className='m-auto mt-5 rounded-2xl'  src={pagenotfoundpic} alt="" />
        
        <h1 className=" h-full mt-10  font-extrabold text-transparent text-center text-2xl   bg-clip-text bg-gradient-to-r from-pink-500 to-violet-800"  >OOPS ! The page you are looking for Does not exist or might have been moved or deleted</h1>
        
        <button onClick={Handlenav}  className=' text-2xl  border-8 hover:border-red-700  font-bold text-white   bg-red-500 h-[70px] w-[150px] rounded-2xl'  >Home</button>
        </div>


    </div>
    </div>
  )
}

export default PageNotFound