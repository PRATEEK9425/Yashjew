import React from 'react'
import Goldpagecarusel from '../Components/Goldsliderpageslider'
import goldsmith from "../Photos/Goldsmith.jpg"

import ring from "../Photos/Ringimg.png"
import bridalset from "../Photos/Bridalset.jpg"
import earrings from "../Photos/Earrings.jpg"
import bangles from "../Photos/Bangles.jpg"
import Pandelset from "../Photos/Pandelset.jpg"
import Goldchain from "../Photos/Goldchain.jpg"
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Gold = () => {
const navigate = useNavigate()
const orderpath=[
  {
    id:1,
    img: ring,
    path:"/web-orders/G-ring/goldringshow",
    name:"Rings"
  },
  {
    id:2,
    img: bridalset,
    path:"/web-orders/G-bridalset/goldbridal",
    name:"Bridal Set"
  },
  {
    id:3,
    img: earrings,
    path:"/web-orders/G-earring/goldearrings",
    name:"Ear Rings"
  },
  {
    id:4,
    img: Pandelset ,
    path:"/web-orders/G-pandelset/goldpandelset",
    name:"Pandel-Set"
  },
  {
    id:5,
    img: bangles,
    path:"/web-orders/G-bangles/goldbangles",
    name:"Bangles"
  },
  {
    id:6,
    img: Goldchain,
    path:"/web-orders/G-chain/goldchain",
    name:"Gold-Chain"
  },
]


  return (
    <div>
<Navbar/>
<span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"  >
GOLD STORE
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💍</span>



{/* banner 1 */}
<div className='grid grid-cols-1  lg:grid-cols-2 gap-2 mt-5'  >
  <div    >
<p className=' font-serif text-transparent   text-2xl   md:text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700  '  >
  OUR POPULAR COLLECTION OF</p>
  
<br/>
<h1 className='text-3xl font-bold text-fuchsia-500 '  >
  UNIQUE ORNAMENTS CRAFTED FOR YOU 
</h1>
<br/>
<p  className='text-3xl font-serif text-teal-600  '  >
  Our Gold Ornaments are crafted by experinced 
  workers , with zero error and unique design 
  . we focus on Quality Assurance ,Design Variety ,
  Trust and Reputation,Customization Options,
  Certification and Guarantee,Price and Discounts,
  Customer Service ,Convenience...
</p>

<h1 className='text-red-600'  >
  Order Now For Your Loved one's
</h1>
<button onClick={()=>{navigate("/web-orders/G-ring/goldringshow")}}  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-orange-600 via-yellow-300 to-teal-700 ...">
                      ORDER NOW 
                    </button>
  </div>
  <div  >
    <Goldpagecarusel/>
  </div>
</div>
{/* banner 1 end*/}



<h1 className="  mt-14 font-serif text-transparent   text-2xl   md:text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
YASH JEWELLERS WE CRAFT WHAT YOUR LOVE ONE DESIRE
        </h1>

{/* banner2 */}
<div  className='grid  grid-cols-1  lg:grid-cols-2  md:grid-cols-2   gap-2 mt-10  w-[70%] m-auto  '  >
   {/* div1 */}
  <div   >
<img  className='rounded-2xl h-[300px] w-[400px] m-auto shadow-lg shadow-yellow-500'   src={goldsmith} alt="" />
  </div>
  {/* div2 */}
  <div  className='rounded-2xl shadow-lg shadow-emerald-500 bg-gray-300  '  >
<h1 className="   font-serif text-transparent   text-2xl   md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-600"   >
  ABOUT OUR ORNAMENTS</h1>
  <br/>
<p className='text-gray-700 text-xl  font-mono '  >
  Our Gold ornaments will always have Hallmarking-ID , 
  our gold have different metal purity , like Gold 14K/585,
  Gold 18K/750,Gold 20K/833,Gold 22K/916,Gold 24K/999 .
</p>
  </div>
</div>
{/* banner2 end*/}

<div  className='mt-14' >
<span className="  font-serif text-transparent   text-3xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-600">
PLACE YOUR ORDER NOW
        </span>
<span  className="text-4xl   md:text-6xl lg:text-6xl" >🛒</span>
</div>


<div  className='grid  grid-cols-2 gap-2  lg:grid-cols-3 md:gap-3  lg:gap-5 mt-14 w-[80%] m-auto  ' >
  {
    orderpath.length>0 && orderpath.map((item)=>{
      return(<div  key={item.id}   >
        <img  className='   h-[200px] w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px]  m-auto rounded-2xl shadow-2xl shadow-gray-800 '   src={item.img} alt="" />
      <h1 className=' text-base  md:text-2xl lg:text-3xl font-serif text-center text-cyan-900 '  >{item.name}</h1>
      <button onClick={()=>{navigate(item.path)}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[60%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl  bg-gradient-to-r from-orange-600 via-cyan-700 to-pink-600 ..."   >BUY NOW 💁</button>
      </div>)
    })
  }
</div>

    </div>
  )
}

export default Gold