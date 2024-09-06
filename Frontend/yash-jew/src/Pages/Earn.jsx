import React from 'react'
import earn1 from "../Photos/Earn1.jpg"
import earn2 from "../Photos/Earn2.jpg"
import Aboutcomp from '../Components/Aboutcomp'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Earn = () => {

const navigate = useNavigate()

const Enqform=()=>{
  navigate("/earnform")
}

  return (
    <div   > 
      <Navbar/>
<span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-700 to-yellow-600">
CONNECT & EARN
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💰</span>


<div className=" w-full md:w-[90%]  m-auto mt-10  rounded-2xl  mb-[120px] md:mb-[100px]  lg:mb-[50px] ">
            <div className="relative">
              <img
                className="w-full h-[620px]  rounded-2xl "
                src={earn2}
                alt=""
              />

              {/* ----------------relative----- */}

              <div className="   rounded-2xl ml-[5%] absolute h-[600px] md:h-[750px]  lg:h-[600px] mt-[-157%] md:mt-[-92%]   lg:mt-[-50%] bg-gray-500/70 w-[90%] ">
                <div className="grid  grid-cols-1  md:grid-cols-2">
                  <div className="">
                    <h1 className=" mt-20  font-extrabold text-transparent   text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-900">
                      CONNECT WITH US AND EARN...
                    </h1>
                    <br />
                    <p className=" font-bold text-xl md:text-2xl text-white ">
                      Yash Jewellers provide an outstanding opportunity to earn 
                      from us . If your friends ,family or anyone whose is 
                           planning to craft a jewellery for their loved one's . 
                      Just Refer Yash jewellers and get gurantee 10% cash back on 
                      jewellery making charges . 
                      Minimum order weight should be more or equal to 150 grams ,
                      then only person is eligible to Avail oFFer . 
                    </p>
                    <br />
<h1  className='text-xl text-red-600'  >Hurry Avail Exciting Offer Just For You</h1>
                    <button  onClick={Enqform}  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                      SUBMIT NOW 😎
                    </button>
                  </div>

                  <div>
                    <img
                      className="  mt-16 lg:mt-10 h-[400px] rounded-2xl w-full md:w-[80%]  lg:w-[80%] m-auto  "
                      src={earn1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* ----------------relative----- */}
            </div>
          </div>

{/* second banner */}
<div className=' mt-[480px]  md:mt-[250px] lg:mt-[50px]  ' >
<span className="   font-serif text-transparent   text-2xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-600">
OVERVIEW TO EARN
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💰</span>

<Aboutcomp  url={"connect_earn"} />
</div>
{/* second banner */}
    </div>
  )
}

export default Earn