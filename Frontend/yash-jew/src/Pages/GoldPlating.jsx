import React from 'react'
import Silvercarausel from '../Components/Silvercarausel'
import GoldplatingComp from '../Components/GoldplatingComp'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const GoldPlating = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
<span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-gray-400 to-yellow-600">
GOLD PLATING
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">💎</span>

{/* first banner */}
<div className='grid grid-cols-1   lg:grid-cols-2 gap-3 mt-10  w-[95%] m-auto  '  >
<div>
<h1 className="   font-serif text-transparent   text-2xl   md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-gray-400 to-yellow-600" >
  GOLD PLATING ORNAMENTS</h1>
 <Silvercarausel url={"goldplatingcarusel"}/>
</div>

<div>
<h1  className=' font-serif text-transparent   text-2xl   md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-zinc-600 to-red-500  '  >
  OUR GOLD PLATING STORE FOR YOU  </h1>
<h1  className='text-2xl font-bold text-gray-500 ' >
  MAKE YOUR JEWELLERY EXPENSIVE WITH GOLD PLATING </h1>
  <p className='text-3xl font-serif text-emerald-700 text-left '   > 
Yash Jewellers provide an another option of gold plating to customer,
If you don't have enough money to buy gold ornaments don't worry . 
Just visit our outlet/store or give your order via our website 
we take responsiblity to graft your Jewellery same as gold ornaments . 
Gold Plating enhance the jewellery look , and we will deliver a product
as similar to Gold Jewellery . 
<br/>
Budget will be No Longer a Obstacle To make Your's Loved One's Happy .
<br/>

</p>
<h1 className='text-indigo-500 text-2xl'  >बजट सताए गोल्ड प्लेटिंग kaarya . आज ही अभी यश ज्वैलर्स आए..</h1>
<h1 className='text-red-600'  >
  Order Now For Your Loved one's
</h1>
<button onClick={()=>{navigate("/web-orders-GP/GP-ring/goldplatingring")}}  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-gray-500 via-yellow-800 to-yellow-400 ...">
                      ORDER NOW 
                    </button>

</div>
</div>
{/* first banner end */}


<div  className='mt-10' >
<span className="  font-serif text-transparent   text-2xl   md:text-4xl lg:text-7xl bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-600">
GOLD PLATING OUTLET
        </span>
<span  className="text-2xl   md:text-6xl lg:text-6xl" >🛒</span>
</div>


<GoldplatingComp/>


    </div>
  )
}

export default GoldPlating