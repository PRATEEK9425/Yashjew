import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Bigcarls = () => {
  const[data,setData]=useState([])

  const Getdata=()=>{
      axios.get(`${process.env.REACT_APP_Bigcarlurl}`)
      .then((res)=>{
          setData(res.data)
      }).catch((err)=>{
          console.log(err);
      })
  }
  
  useEffect(()=>{
  Getdata()
  },[data.length])
   console.log(data);

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        };
        return (
          <div className='md:w-[95%]  w-full lg:w-[85%] m-auto mt-10 '  >
           
            <Slider {...settings}>
              {
                data.length>0 && data.map((item)=>{
                  return(
                    <div  className='relative   '  >
                      <div className='   rounded-2xl'  >
                        <img className='    rounded-2xl  m-auto  w-[99%]  h-[350px] lg:h-[380px] ' src={item.carauselimg} alt="" />
                      

                        <div class=" rounded-2xl ml-[5%] absolute h-[150px] -mt-[70px] bg-gray-500/10 w-[90%]">
                      <h1 className='  text-3xl md:text-5xl  font-serif text-transparent  bg-clip-text bg-gradient-to-r from-white to-white' >{item.Title}</h1>
                      </div>
                      
                      </div>
                    </div>
                  )
                })
              }
             
            </Slider>
          </div>
        )
       
      
}

export default Bigcarls