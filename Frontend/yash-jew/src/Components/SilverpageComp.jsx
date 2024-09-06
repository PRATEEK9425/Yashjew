import React from 'react'
import { useNavigate } from 'react-router-dom'
import silverring from "../Photos/silverring.png"
import silverbangles from "../Photos/silverfemalekada.jpg"
import silverchain from "../Photos/silverchain.jpg"
import silvermalekada from "../Photos/silverkada.jpg"
import silverearring from "../Photos/silverearing.jpg"
import silverneckalce from "../Photos/silverankalet.jpg"
import silver_ankalet from "../Photos/silverankalet.jpg"
import silver_toering from "../Photos/silvertoering.jpg"
import silver_tevta from "../Photos/tevta.jpg"

const SilverpageComp = () => {
    const navigate = useNavigate()
    const orderpath=[
        {
          id:1,
          img: silverring,
          path:"/web-orders-silver/S-ring/silverringshow",
          name:"SILVER RING"
        },
        {
          id:2,
          img: silverbangles,
          path:"/web-orders-silver/S-bangles/silverbangles",
          name:"SILVER BANGLES"
        },
        {
          id:3,
          img: silverchain,
          path:"/web-orders-silver/S-chain/silverchain",
          name:"SILVER CHAIN"
        },
        {
          id:4,
          img: silvermalekada ,
          path:"/web-orders-silver/S-kada/silverkada",
          name:"SILVER MALE KADA"
        },
        {
          id:5,
          img: silverearring,
          path:"/web-orders-silver/S-earring/silverearring",
          name:"SILVER EAR RING"
        },
        {
          id:6,
          img: silverneckalce ,
          path:"/web-orders-silver/S-necklace/silvernecklace",
          name:"SILVER NECKLACE"
        },
        {
            id:7,
            img: silver_ankalet ,
            path:"/web-orders-silver/S-ankalet/silverankalet",
            name:"SILVER ANKALET"
          },
          {
            id:8,
            img: silver_toering ,
            path:"/web-orders-silver/S-toering/silvertoe-ring",
            name:"SILVER TOE RING"
          },
          {
            id:9,
            img: silver_tevta,
            path:"/web-orders-silver/S-tevta/silvertevta",
            name:"SILVER TEVTA & Hamel"
          }
      ]
  return (
    <div>
     
        <div  className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 mt-14 w-[80%] m-auto  ' >
  {
    orderpath.length>0 && orderpath.map((item)=>{
      return(<div  key={item.id}   >
        <img  className='   h-[200px] w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px]  m-auto rounded-2xl shadow-2xl shadow-gray-800 '   src={item.img} alt="" />
      <h1 className='  text-2xl  lg:text-3xl font-serif text-center text-cyan-900 '  >{item.name}</h1>
      <button onClick={()=>{navigate(item.path)}} className=" font-serif md:hover:font-bold  text-sm md:text-2xl border-4  h-[50px] w-[95%]  md:h-16 md:w-[250px] hover:border-teal-500 md:hover:text-2xl   text-white rounded-xl    bg-gradient-to-r from-red-500 via-slate-700 to-gray-500 ..."   >BUY NOW 💁</button>
      </div>)
    })
  }
</div>
    </div>
  )
}

export default SilverpageComp