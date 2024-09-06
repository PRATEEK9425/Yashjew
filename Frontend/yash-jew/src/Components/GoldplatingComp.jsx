import React from 'react'
import { useNavigate } from 'react-router-dom'
import GPring from "../Photos/GPring.jpg"
import GPbangles from "../Photos/GPbangles.jpg"
import GPchain from "../Photos/GPchain.jpg"
import GPmalekada from "../Photos/GPmalekada.jpg"
import GPearring from "../Photos/GPearring.jpg"
import GPnecklace from "../Photos/GPnecklace.jpg"
import GPankalet from "../Photos/GPankalet.jpg"
import GPtoe from "../Photos/GPtoe.jpeg"
import GPhamel from "../Photos/GPhamel.jpg"
import Navbar from '../Pages/Navbar'

const GoldplatingComp = () => {
    const navigate = useNavigate()
    const orderpath=[
        {
          id:1,
          img: GPring,
          path:"/web-orders-GP/GP-ring/goldplatingring",
          name:"GOLD-PLATED RING"
        },
        {
          id:2,
          img: GPbangles,
          path:"/web-orders-GP/GP-bangles/gpbangles",
          name:"GOLD-PLATED BANGLES"
        },
        {
          id:3,
          img: GPchain,
          path:"/web-orders-GP/GP-chain/goldplatingchain",
          name:"GOLD-PLATED CHAIN"
        },
        {
          id:4,
          img: GPmalekada ,
          path:"/web-orders-GP/GP-kada/goldplatingkada",
          name:"GOLD-PLATED KADA"
        },
        {
          id:5,
          img: GPearring,
          path:"/web-orders-GP/GP-earring/goldplatingearring",
          name:"GOLD-PLATED EARRING"
        },
        {
          id:6,
          img: GPnecklace ,
          path:"/web-orders-GP/GP-necklace/goldplatingnecklace",
          name:"GOLD-PLATED NECKLACE"
        },
        {
            id:7,
            img: GPankalet ,
            path:"/web-orders-GP/GP-ankalet/goldplatingankalet",
            name:"GOLD-PLATED ANKALET"
          },
          {
            id:8,
            img: GPtoe ,
            path:"/web-orders-GP/GP-Toering/goldplatingtoering",
            name:"GOLD-PLATED TOE-RING"
          },
          {
            id:9,
            img: GPhamel ,
            path:"/web-orders-GP/GP-Hamel/goldplatinghamel",
            name:"GP HAMMEL & TEVTA"
          }
      ]
  return (
    <div>
   
        <div  className='grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-5 mt-14 w-[80%] m-auto  ' >
  {
    orderpath.length>0 && orderpath.map((item)=>{
      return(<div  key={item.id}   >
        <img  className='  w-[250px] h-[200px]   lg:w-[300px] lg:h-[300px]  m-auto rounded-2xl shadow-2xl shadow-gray-800 '   src={item.img} alt="" />
      <h1 className='  text-xl    lg:text-2xl font-serif text-center text-cyan-900 '  >{item.name}</h1>
      <button onClick={()=>{navigate(item.path)}} 
      className=" font-serif   border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-base lg:text-xl text-white rounded-xl  w-[80%] h-12 md:w-[60%]   lg:h-14   md:h-16 lg:w-[250px] bg-gradient-to-r from-red-500 via-slate-700 to-gray-500 ..."   >BUY NOW 💁</button>
      </div>)
    })
  }
</div>
    </div>
  )
}

export default GoldplatingComp