import React from 'react'
import Silvercarausel from '../Components/Silvercarausel'
import goldsmith from "../Photos/silverjew.jpg"
import SilverpageComp from '../Components/SilverpageComp'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Silver = () => {
const navigate = useNavigate()
const silverdata=[
  {
    id:1,
    imgurl:"https://img.freepik.com/free-photo/female-sales-person-jewelry-shop_1303-30676.jpg?w=740&t=st=1711547639~exp=1711548239~hmac=8860d96408340fe6dc50b92ea2dfced4b5221fee77d61b5b8d29af6b89e8cd66",
    Title:"SELECT YOUR DESIGN",
    Des:"Choose Your unique Design For Your Loved One's . We Promise To deliver Orignal Ornaments"
  },
  {
    id:2,
    imgurl:"https://img.freepik.com/free-photo/cute-pretty-young-woman-smartphone-cafe_346278-194.jpg?w=740&t=st=1711547754~exp=1711548354~hmac=711094915d7936709b76332591889aa02f51faf9cc336f58da41e3e286590e13",
    Title:"PLACE YOUR ORDER",
    Des:"Don't behind in clicking , we deliver assure smiles , happiness to your Loved one's"
  },
  {
    id:3,
    imgurl:"https://img.freepik.com/free-photo/young-man-helping-his-girlfriend-with-fitting-necklace-je_7502-7600.jpg?w=740&t=st=1711547671~exp=1711548271~hmac=caabd597a5d7ec86f3f6337784e8d8dc3bc0e1bca037818be4c62009654f7de4",
    Title:"HAPPINESS DELIVER",
    Des:"Our work will definately bring bundles of happiness to your's loved ones "
  },
]

  return (
    <div >
      <Navbar/>
      <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-600">
SILVER STORE
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💍</span>


{/* first banner */}
<div  className='mt-10 grid grid-cols-1 gap-1   lg:grid-cols-2  lg:gap-6 w-full lg:w-[90%] m-auto' >
  
  {/* div1  */}
  <div   >
<h1  className=' font-serif text-transparent   text-2xl   md:text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-zinc-600 to-red-500  '  >
  OUR SILVER STORE FOR YOU  </h1>
<h1  className='text-3xl font-bold text-orange-400 ' >
  ONLY FOR YOUR'S LOVED ONES</h1>
<p className=' text-xl
   lg:text-3xl font-serif text-emerald-700    lg:text-left '   > 
Yash Jewellers is the place where your loved one find
the destiney for silver Jewellery , Our jewellery have 
Unmatched Versatility,Enduring Quality, Affordability. 
Indulge in the allure of silver and elevate your style 
with our exquisite ornaments. Visit Yash Jewellers
 today and discover a world of elegance, sophistication,
  and unparalleled craftsmanship. Your journey to timeless
   beauty begins here.
</p>
<h1 className='text-red-600'  >
  Order Now For Your Loved one's
</h1>
<button onClick={()=>{navigate("/web-orders-silver/S-bangles/silverbangles")}}  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-gray-500 via-gray-800 to-teal-700 ...">
                      ORDER NOW 
                    </button>
</div>
{/* div1 end */}

  <div  >
    <Silvercarausel url ={"silvercarausel"}   />
  </div>
</div>

{/* first banner end*/}
<div  className='mt-14' >
<span className=" ml-6 font-serif text-transparent   text-3xl   md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-600">
QUALITY WE DELIVER
        </span>
<span  className="text-3xl   md:text-6xl lg:text-6xl" >⚱️</span>
</div>
{/* second banner 2 */}
<div  className='grid  grid-cols-1 lg:grid-cols-2 gap-2 mt-10  w-[70%] m-auto  '  >
   {/* div1 */}
  <div   >
<img  className='rounded-2xl h-[300px] w-[400px] m-auto shadow-lg shadow-red-950'   src={goldsmith} alt="" />
  </div>
  {/* div2 */}
  <div  className='rounded-2xl shadow-lg shadow-red-950 bg-red-100   '  >
<h1 className="   font-serif text-transparent   text-2xl   md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-red-800"   >
  Our Silver Jewellery  </h1>
  <br/>
<p className='text-gray-700 text-xl  font-mono '  >
 Yash  Jewellers have a wide range of silver jewellery for your loved
 one's .We have silver variety in jewellery such as Silver-800,
 Silver-925,Silver-958,Silver-999 .
 Order Now For Your Loved One's and see the precious smile
 on there faces.
</p>
  </div>
</div>
{/* second banner 2  end*/}


{/* banner 3 */}
<h1 className="  mt-14 font-serif text-transparent   text-2xl   md:text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-red-700 to-emerald-700">
THREE STEPS TO MAKE YOUR'S LOVED ONE'S HAPPY
        </h1>
        <div  className='mt-5' >
<span className="  font-serif text-transparent   text-3xl   md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-600">
PLACE YOUR ORDER NOW
        </span>
<span  className="text-4xl   md:text-6xl lg:text-6xl" >🛒</span>
</div>
<div  className='grid grid-cols-3 gap-2  w-full lg:w-[95%] mt-10  m-auto' >
  
  {
    silverdata.length>0 && silverdata.map((item)=>{
      return(<div  className=' hover:rounded-2xl  hover:shadow-2xl hover:shadow-gray-600' >
        <img   className='rounded-full'  src={item.imgurl} alt="" />
        <h1 className='  text-sm lg:text-2xl font-serif text-red-600 '  >{item.Title}</h1>
      <p className='text-gray-700 font-serif  text-sm lg:text-lg '  >{item.Des}</p>
      </div>)
    })
  }
</div>
{/* banner 3 end*/}

{/* banner 4 */}
<div  className='mt-5' >
<span className="  font-serif text-transparent   text-3xl   md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-600">
OUR SILVER OUTLET
        </span>
<span  className="text-4xl   md:text-6xl lg:text-6xl" >🛒</span>
</div>
<SilverpageComp/>
{/* banner 4 */}

    </div>
  )
}

export default Silver