import React from 'react'
import ring from "../Photos/Ringimg.png"
import bridalset from "../Photos/Bridalset.jpg"
import earrings from "../Photos/Earrings.jpg"
import bangles from "../Photos/Bangles.jpg"
import Pandelset from "../Photos/Pandelset.jpg"
import Goldchain from "../Photos/Goldchain.jpg"
import { useNavigate } from 'react-router-dom'

const GoldProductList = () => {
  const navigate = useNavigate()
const orderpath=[
  {
    id:1,
    img: ring,
    path:"/admin_goldproduct/G-ring/goldringshow",
    name:"Rings"
  },
  {
    id:2,
    img: bridalset,
    path:"/admin_goldproduct/G-bridalset/goldbridal",
    name:"Bridal Set"
  },
  {
    id:3,
    img: earrings,
    path:"/admin_goldproduct/G-earring/goldearrings",
    name:"Ear Rings"
  },
  {
    id:4,
    img: Pandelset ,
    path:"/admin_goldproduct/G-pandelset/goldpandelset",
    name:"Pandel-Set"
  },
  {
    id:5,
    img: bangles,
    path:"/admin_goldproduct/G-bangles/goldbangles",
    name:"Bangles"
  },
  {
    id:6,
    img: Goldchain,
    path:"/admin_goldproduct/G-chain/goldchain",
    name:"Gold-Chain"
  },
]
  return (
    
      <div>
      <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
      Gold Categories
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💍</span>

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

export default GoldProductList