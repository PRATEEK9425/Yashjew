import React from 'react'

import des1  from "../Homepic/style1.png"
import des2  from "../Homepic/style2.png"
import des3  from "../Homepic/style3.png"
import des4  from "../Homepic/style4.png"
import des5  from "../Homepic/style5.png"
import des6  from "../Homepic/style6.png"
import des7  from "../Homepic/style7.png"
import des8  from "../Homepic/style8.png"
import des9  from "../Homepic/style9.png"
import des10  from "../Homepic/style10.png"
import des11  from "../Homepic/style11.png"
import des12  from "../Homepic/style12.png"

const Goldcomp = () => {

    const Imgdata = [
        {
          id:1,
          imgurl:des1,
          Title:"Ring"
        },
      
        {
          id:2,
          imgurl:des2,
          Title:"Rani-Haar"
        },
        {
          id:3,
          imgurl:des3,
          Title:"Gold-Chain"
        },
        {
          id:4,
          imgurl:des4,
          Title:"Mangal-Sutra"
        },
        {
          id:5,
          imgurl:des5,
          Title:"Gold-Plating"
        },
        {
          id:6,
          imgurl:des6,
          Title:"Tevta"
        },
        {
          id:7,
          imgurl:des7,
          Title:"Necklace"
        },
        {
          id:8,
          imgurl:des8,
          Title:"Hamel"
        },
        {
          id:9,
          imgurl:des9,
          Title:"Bangles"
        },
        {
          id:10,
          imgurl:des10,
          Title:"Ear-Ring"
        },
        {
          id:11,
          imgurl:des11,
          Title:"Rakhadi"
        },
        {
          id:12,
          imgurl:des12,
          Title:"Galsari"
        }
      ]


  return (
    <div>
     
    
    <div  className='relative' >
       <div className="   w-[90%] mt-10   m-auto  grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4  "  >
       {
  Imgdata.length>0 && Imgdata.map((item)=>{
    return( <div  >
      <img   src={item.imgurl} className=" border-3 border-cyan-800 rounded-2xl   w-[300px]  h-[250px]  lg:w-[400px] lg:h-[300px]    shadow-2xl  hover:shadow-yellow-500  "     alt="Error In Loading" />
    
      <div class=" rounded-2xl  absolute h-[50px] -mt-[40px] bg-gray-500/10   ">
                      <h1 className=' ml-8 lg:ml-10 text-2xl md:text-3xl  font-serif text-transparent  bg-clip-text bg-gradient-to-r from-white to-white' > {item.Title} </h1>
                      </div>
    
    </div>)
  })
 }
       </div>
      

    </div>
    </div>
  )
}

export default Goldcomp