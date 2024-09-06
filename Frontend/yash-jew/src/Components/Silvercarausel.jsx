import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Slider from "react-slick";
const Silvercarausel = ({url}) => {
  const[data,setData]=useState([])

  const Getdata=()=>{
      axios.get(`/${url}`)
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
          <div className='w-[80%]  m-auto mt-10 '  >
           
            <Slider {...settings}>
              {
                data.length>0 && data.map((item)=>{
                  return(
                    <div  className='relative'  >
                      <div className='   rounded-2xl'  >
                        <img className='  rounded-2xl  m-auto  w-full  h-[350px] lg:h-[450px] lg:w-[100%] ' src={item.carauselimg} alt="" />
                      

                        <div class=" rounded-2xl ml-[5%] absolute h-[100px] -mt-[60px] bg-gray-500/50 w-[90%]">
                      <h1 className='  text-3xl md:text-5xl  font-serif text-white ' >{item.Title}</h1>
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

export default Silvercarausel

