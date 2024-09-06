import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import axios from "axios"


const Printingpdf = () => {

  const{huid} =useParams()

  const [data,setData]=useState("")
  
  
  const Getdata=()=>{
    axios.get(`${process.env.React_App_BillForm_Printingpdf}/${huid}`)
    .then((res)=>{
    setData(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  
  useEffect(()=>{
  if(data.length==0){
    Getdata()
  }
  },[huid,data.length])

  return (
    <div className="relative" >
<img  className="w-full h-[1120px]    "  src="https://img.freepik.com/free-vector/beautiful-empty-background-with-golden-lines_1017-26504.jpg?w=826"  alt="" />
{/* absolute div */}
<div  className="   rounded-2xl ml-[5%] absolute h-[600px] mt-[-140%] md:mt-[-50%]   lg:mt-[-80%] bg-gray-500/10 w-[90%] "  >
<div className='w-[10%] m-auto'  >

</div>
<h1 className=" w-[80%] m-auto  font-serif text-transparent   text-6xl bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600">
YASH JEWELLERS
        </h1> 
       
<h1 className='font-bold text-transparent   text-1xl bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600'>
  BIS-CERTIFICATE NO- HM/C-8690123924</h1>
  <h1 className='font-bold text-transparent   text-1xl bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600'>
 GSTIN NO - 08BKGPS4117M1ZQ  </h1>
{/* result comp */}

{
      data.length == 0 ? <div  className='w-[80%] m-auto  ' >
        <img  className='m-auto   '  src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif" alt="" />
       <h1 className='text-4xl font-serif text-gray-500'   > Loading...</h1>
        
        </div>

      :
      
<div className='  mt-11 gap-4 w-[80%] m-auto  '>
    <div>
    <img  className='rounded-2xl m-auto w-[400px] h-[400px]'
    src={`https://yashjewbackend.onrender.com/${data.Jew_url}`}   />

    </div>
    <div className='mt-6 text-3xl text-left  text-transparent   bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600'  >
<h1 className='font-serif'  >Customer Name - {data.CustomerName}</h1>
<h1 className='font-serif' >Jewellery Name - {data.Jewellery_Name}  </h1>
<h1 className='font-serif' >Weight in Grams- {data.Jew_weight}  </h1>
<h1 className='font-serif' >Hallmarking Id- {data.HU_ID}  </h1>
<h1 className='font-serif'>Ornament Type - {data.Ornament_Type}</h1>
<h1 className='font-serif'>Rate OF Ornaments - {data.Rate_Of_Ornaments} Per gram </h1>
<h1 className='font-serif'>Payable Amount - {data.Payable_Amount} ₹</h1>
<h1 className='font-serif'>Date of Purchase - {data.Date_Of_Purchase}</h1>

<h1 className='font-serif' >Contact- {data.Contact}  </h1>
<h1 className='font-serif' >Address- {data.Address}  </h1>

    </div>
    </div>
}


{/* result comp */}

<div className='mt-1'>
  <h1 className='font-serif  text-2xl  text-transparent   bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600  ' >
    Address - YASH JEWELLERS,NEAR YASH TOWER,MANDRELLA,DIST-JHUNJHNU,RAJASTHAN
  </h1>
  <span className='text-2xl' >☎️  </span>
  <span className=" w-[65%] m-auto  font-serif text-transparent   text-2xl bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600">
     +91-9772204352,+91-9521514352
        </span>
        <h1 className=' text-right  font-serif  text-2xl  text-transparent   bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-600 '  >© 2016 Yash Jewellers™. All Rights Reserved.</h1>

</div>


</div>

</div>




    
  )
}

export default Printingpdf