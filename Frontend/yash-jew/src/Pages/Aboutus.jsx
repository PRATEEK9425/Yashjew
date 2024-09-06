import React from 'react'
import { useNavigate } from "react-router-dom";

import ownerpic from "../Photos/owner.png"
import Aboutcomp from '../Components/Aboutcomp';
import Navbar from './Navbar';
const Aboutus = () => {
    const navigate = useNavigate()
    const UserRegisterCourse=()=>{
      navigate("/gold")
      }
  return (
    <div>
      <Navbar/>
        <div className="    mt-10 grid  grid-cols-1 md:grid-cols-2 gap-3 ">
        {/* div 1  */}
        <div className=" lg:h-[600px]  ">
          <img
            className=" rounded-2xl  m-auto h-[450px] w-full  lg:w-[90%]"
            src={ownerpic}
            alt=""
          />
          <h1 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-orange-400 to-green-800" >
            Narendra Soni , Director Yash Jewellers</h1>
        </div>
        {/* div 2 */}
        <div className=" h-[600px]  ">
          <span  className=" text-3xl md:text-3xl  lg:text-6xl" >💍 </span>
          <span className="font-extrabold text-transparent   text-3xl md:text-3xl  lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-orange-900" >
          Yash Jewellers
          </span>
          <span  className=" text-3xl md:text-3xl  lg:text-6xl" > 🧈 </span>
<br/>

          <p className="  mt-5 text-left text-sm lg:text-lg text-sky-700">
          <span className="text-pink-700">Narendra Kumar Soni (Director Yash Jewellers)</span>
           laid the mile stone of Yash Jewellers in 2000 , with motive of providing 
           excellent quality and design of Gold Ornaments to customer . 
           <br/>
           our store is affilated with <span className="text-pink-700">BIS-CERTIFICATE</span>
           which safe guard customer from impurity in gold and silver . our make ornamenst
           will always have    <span className="text-pink-700">Hallmarking-Id(HU-ID)</span> 
           which safeguard customer from any fraud and ensure excellent quality of 
           gold and silver to customer according to governmnet . Hallmarking of ornaments 
           help in checking impurity of gold and ornaments having HU-ID its future 
           sale will have no effect and customer get good return of jewellery . 
           <br/>
           Yash Jewellery is symbol for Purity and Honesty, kindly visit our store or give
           order online . You can also use our consultancy service regarding gold,silver 
           or any design , you have best choice to choose Yash jewellers as your helping 
           hand in crafting your love a master Piece.
          </p>
          <button onClick={UserRegisterCourse}  className=' border-4 hover:border-teal-500 hover:text-2xl text-xl text-white rounded-xl h-16 w-[180px] hover:h-20 hover:w-[200px] hover:font-bold   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>ORDER Now 😎</button>
        </div>
      </div>
{/* second banner */}
<div>
    
{/* records */}
<div className=" mt-[40px] md:mt-[30px]  lg:mt-1">
        <span  className="   font-extrabold text-transparent   text-xl md:text-6xl  lg:text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-purple-900" >
            Trusted Since 2000
            </span> <span className="text-xl md:text-8xl"  >🤵</span>
        <div  className=" bg-white rounded-2xl   w-full md:w-[50%] m-auto  " >
    <h1 className="   font-extrabold text-transparent   text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-orange-500 to-green-900">
        Order Delivered By Yash Jewellers</h1>

<div  className="grid  grid-cols-3  md:grid-cols-3" >
    <div>
        <span className="text-xl  font-extrabold text-transparent    md:text-xl bg-clip-text bg-gradient-to-r from-orange-500 to-green-900   " >Gold Order </span> 
        <span>👨‍🎓</span>
        <br/>
        <h1 className="text-xl  font-extrabold text-transparent    md:text-xl bg-clip-text bg-gradient-to-r from-violet-500 to-green-900   "   >8,000+</h1>
    </div>
    <div>
        <span className="text-xl  font-extrabold text-transparent    md:text-xl bg-clip-text bg-gradient-to-r from-orange-500 to-green-900   " >Silver Order</span> 
        <span>👨‍🎓</span>
        <br/>
        <h1 className="text-xl  font-extrabold text-transparent    md:text-xl bg-clip-text bg-gradient-to-r from-violet-500 to-green-900   "   >20,000+</h1>
    </div>
    <div>
        <span className="text-xl  font-extrabold text-transparent    md:text-xl bg-clip-text bg-gradient-to-r from-orange-500 to-green-900   " >Customer Satisfaction </span> 
        <span>👨‍🎓</span>
        <br/>
        <h1  className="text-xl  font-extrabold text-transparent    md:text-xl bg-clip-text bg-gradient-to-r from-violet-500 to-green-900   "   >100%</h1>
    </div>
</div>

</div>

      </div>
{/* records end */}
<div className='mt-5'   >
        <h1 className='text-4xl font-bold'  >We do things Differently...</h1>
        <br/>
        <p className='text-xl font-mono'  >We Focus on Quality and Purity, we Focus on what customer
            <br/>
            demand to us ,What's most important to them ,We take pride in this
        </p>
    </div>

</div>
{/* second banner */}


{/* Third banner */}
<Aboutcomp  url={"aboutdata"} />
    </div>
  )
}

export default Aboutus