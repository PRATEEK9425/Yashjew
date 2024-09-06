
import React, { useState } from 'react'
import axios from "axios"
import styles from "../styles/Username.module.css"
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const SearchOrder = () => {


const initial ={
    Mobile_Nmb:""
}

const[formdata,setFormdata] =useState(initial)
const[data,setData] = useState([])
const  {Mobile_Nmb} = formdata

const Handlechange=(e)=>{
const {name,value} = e.target
setFormdata({...formdata,[name]:value})
}
const Handlesubmit=(e)=>{
e.preventDefault()

axios.get(`/generatebill/searchbynmb/${Mobile_Nmb}`)
.then((res)=>{
    setData(res.data)
})
.catch((err)=>{
    console.log(err);
})

}
let total =0
for(let i=0 ;i<data.length;i++){
    total+=(data[i].Payable_Amount);
}

  return (
    <div>
        <AdminNavbar/>
       <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">
ORDER SEARCH
        </span><span className="text-4xl   md:text-6xl lg:text-8xl">📦</span>
<h1 className="   font-serif text-transparent   text-4xl   md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"  > 
    Total Purchase From Yash Jewellers - {total} ₹
    </h1>
<div className='w-[80%] m-auto mt-10'  >
<form onSubmit={Handlesubmit}  >
    <input className={styles.textbox}   name="Mobile_Nmb" value={Mobile_Nmb}  onChange={Handlechange} type="number" placeholder='ENTER CUSTOMER MOBILE NUMBER' />

<input  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."  type="submit" />
</form>
</div>


{
    data.length >1 ? 
    // grater then 1 length
     <div className='grid grid-cols-3 gap-2 mt-10 text-sm font-serif w-[80%] m-auto '  >
{
        data.length >1 && data.map((item)=>{
            return (<div className=' text-transparent   bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700 '  >
                

                <img className='h-[250px] w-[250px] m-auto rounded-2xl shadow-2xl hover:shadow-orange-500  '   src={`https://yashjewbackend.onrender.com/${item.Jew_url}`} alt="" />
                <h1 className='font-serif' >Name - {item.CustomerName}</h1>
                <h1 className='font-serif' > {item.Jewellery_Name}</h1>
                <h1 className='font-serif' >Weight -{item.Jew_weight} gram</h1>
                <h1 className='font-serif' >HUID-NO - {item.HU_ID}</h1>
                <h1 className='font-serif' >TYPE OF METAL -{item.Ornament_Type}</h1>
                <h1 className='font-serif' >Price - {item.Rate_Of_Ornaments} ₹</h1>
                <h1 className='font-serif' >Payable Amount - {item.Payable_Amount} ₹</h1>
                <h1 className='font-serif' >Purchase Date -{item.Date_Of_Purchase}</h1>
                <h1 className='font-serif' >Conatct - {item.Contact}</h1>
                <h1 className='font-serif' >Address - {item.Address}</h1>
            </div>)
        })
       }
     </div> :
     // smaller then 1 length
     <div> 
       {
        data.length == 1 && data.map((item)=>{
            return (<div  className=' mt-10 text-transparent   bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700  w-[25%] m-auto text-xl font-serif ' >
                                 <img className='h-[250px] w-[250px] m-auto rounded-2xl shadow-2xl hover:shadow-orange-500  '   src={`https://yashjewbackend.onrender.com/${item.Jew_url}`} alt="" />
                <h1 className='font-serif' >Name - {item.CustomerName}</h1>
                <h1 className='font-serif' > {item.Jewellery_Name}</h1>
                <h1 className='font-serif' >Weight -{item.Jew_weight} gram</h1>
                <h1 className='font-serif' >HUID-NO - {item.HU_ID}</h1>
                <h1 className='font-serif' >TYPE OF METAL -{item.Ornament_Type}</h1>
                <h1 className='font-serif' >Price - {item.Rate_Of_Ornaments} ₹</h1>
                <h1 className='font-serif' >Payable Amount - {item.Payable_Amount} ₹</h1>
                <h1 className='font-serif' >Purchase Date -{item.Date_Of_Purchase}</h1>
                <h1 className='font-serif' >Conatct - {item.Contact}</h1>
                <h1 className='font-serif' >Address - {item.Address}</h1>
                

            </div>)
        })
       }



     </div>
}
    </div>
  )
}

export default SearchOrder