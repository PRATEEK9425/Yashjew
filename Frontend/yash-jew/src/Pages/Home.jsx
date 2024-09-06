import React from 'react'
import bannerfirst from "../Photos/banner1.jpg";
import banner2 from "../Photos/banner2.jpg";

import Goldcomp from '../Components/Goldcomp';
import Bigcarls from '../Components/Bigcarl';
import Metalprice from '../MetalPrice/Metalprice';
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar';
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
       <Navbar/> 
{/* --------------heading------ */}
    <h1 className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700"  >
YASH JEWELLERS
        </h1>
    
{/* --------------heading end  ------ */}

<div className=" w-full md:w-[80%] m-auto mt-10  rounded-2xl  mb-[120px] md:mb-[100px]  lg:mb-[100px] " >
    <div className="relative"  >
        <img  className="w-full h-[620px]  rounded-2xl "  src={bannerfirst}  alt="" />
    
    {/* ----------------relative----- */}
    
    <div className="   rounded-2xl ml-[5%] absolute h-[600px] mt-[-157%] md:mt-[-97%]   lg:mt-[-50%] bg-gray-500/10 w-[90%] "  >


<div  className="grid  grid-cols-1  md:grid-cols-2" >
    
    <div className="" >
        <h1 className=" mt-20  font-serif text-transparent   text-xl md:text-4xl  lg:text-6xl bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-900" >
      YASH JEWELLERS
        </h1>
        <br />
        <p className=" font-bold text-xl md:text-2xl text-white ">
        ज्वैलरी का चयन करते समय, सपनों को हकीकत में बदलने का आनंद लें।
        AAJ HI ABHI YASH JEWELLERS AAYE...
        </p>
<br/>

<button  onClick={()=>{navigate("/gold")}} className=' border-4 hover:border-[#000719] md:hover:text-2xl text-xl text-white rounded-xl  h-14 w-[220px]  md:h-16 md:w-[180px] bg-gradient-to-r from-teal-500 via-teal-700 to-yellow-300 ...'>Order Now 😎</button>
    </div>
    
    <div  >
<img  className="mt-10  rounded-2xl h-[70%] w-[70%] m-auto  "  src={banner2} alt="" />
    </div>
</div>


    </div>
{/* ----------------relative----- */}
    </div>
</div>

 {/* heding2 */}

 
 <Metalprice/>
    <h1 className=" mt-10  font-serif text-transparent   text-2xl   md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-700">
WHAT WE DESIGN IN OUR STORE
        </h1>
  
    

 {/* heding2 end */}

<Bigcarls/>


<div className='mt-10'  >
<h1 className="   font-serif text-transparent   text-2xl   md:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-emerald-600 to-pink-700">
OUR OUTLOOK DESIGN
        </h1>

<Goldcomp/>

</div>



    </div>
  )
}

export default Home