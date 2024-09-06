import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "../styles/Username.module.css"
import Navbar from '../Pages/Navbar'

const GPfinalorder = () => {

    const {id,ornamentstype} = useParams()
    const navigate = useNavigate()
      const initialdata={
        GoldImg:"",
        Title:"",
        Category:"",
        Model_No:"",
        Availability_Type:"",
        Quantity:"",
        Name:"",
        Email:"",
        Mobile_Nmb:"",
        Address:"",
        PinCode:""
      }
    const[formdata,setFormdata] =useState({initialdata})
    
    
    const Getdata = ()=>{
      axios.get(`/${ornamentstype}/${id}`)
      .then((res)=>{
        setFormdata(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
      }
    
    useEffect(()=>{
      Getdata()
      },[id])
    

      const Handlechange=(e)=>{
        const {name,value} =e.target 
        setFormdata({...formdata,[name]:value})
        }
        
        const HandleSubmit=(e)=>{
        e.preventDefault()
        const payload = formdata
        console.log(payload);
        axios.post(`${process.env.React_App_GPfinalorder_url}`,payload)
        .then((res)=>{
          console.log(res.data);
          alert("Order Placed Successfully")
        })
        .catch((err)=>{
          console.log(err);
        })
        navigate("/goldplating")
        
        }


const { GoldImg,Title,Category,Model_No,Availability_Type,Quantity,Name,Email,Mobile_Nmb,Address,PinCode} =formdata
  

return (
    <div>
<Navbar/>
{/* main div */}

{
      formdata.length == 0 ? <div  className='w-[80%] m-auto  ' >
        <img  className='m-auto   '  src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif" alt="" />
       <h1 className='text-4xl font-serif text-gray-500'   > Loading...</h1>
        
        </div>

      :
      <div  className='grid  grid-cols-1  lg:grid-cols-2 gap-2'  >
        {/* div1  */}
      <div  >
        <img className='m-auto rounded-2xl  h-[400px] w-[400px]  hover:w-[80%] hover:h-[80%] '  src={`https://yashjewbackend.onrender.com/${formdata.GoldImg}`} alt="" />
        <h1 className='text-5xl mt-14 font-serif text-transparent    bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700   '  >{formdata.Title}</h1>
      <span className='text-3xl font-mono text-red-400  ' >Gender -  {formdata.Category=="Male" ? <span> {formdata.Category}  🦸‍♂️ </span>  : <span>{formdata.Category}  🦸‍♀️</span>} </span>
      <div className='grid grid-cols-2 gap-5  font-serif text-transparent    bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-700  '  >
<div>Model-NO     {formdata.Model_No}</div>
<div>Availability   <span className='text-green-800' >{formdata.Availability_Type} </span> </div>
      </div>

      
      </div>
       {/* div1 end */}

       {/* form div2 */}
    <div   >
<form  >
  {/* className='invisible' */}
<div  className='visibility: hidden' >
<input name="GoldImg" defaultValue={GoldImg} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />
<input name="Title" defaultValue={Title} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />
<input name="Category" defaultValue={Category} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />
<input name="Model_No" defaultValue={Model_No} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />
<input name=" Availability_Type" defaultValue={ Availability_Type} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="string"  />

</div>

<div>
<label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Quantity</label>
  <br/>
          <input name="Quantity" defaultValue={Quantity} onChange={Handlechange}  required  placeholder=' Title 🤴'  className={styles.textbox} type="number"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Your Name</label>
  <br/>
          <input name="Name" defaultValue={Name} onChange={Handlechange}  required  placeholder='Your Name 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Email</label>
  <br/>
          <input name="Email" defaultValue={Email} onChange={Handlechange}  required  placeholder='Email 🤴'  className={styles.textbox} type="email"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Contact Number </label>
  <br/>
          <input name="Mobile_Nmb" defaultValue={Mobile_Nmb} onChange={Handlechange}  required  placeholder='Contact Number 🤴'  className={styles.textbox} type="number"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">Address </label>
  <br/>
          <input name="Address" defaultValue={Address} onChange={Handlechange}  required  placeholder='Address 🤴'  className={styles.textbox} type="string"  />
     <br/>
     <label className='text-xl font-bold text-fuchsia-600 '  htmlFor="">PinCode </label>
  <br/>
          <input name="PinCode" defaultValue={PinCode} onChange={Handlechange}  required  placeholder='PinCode 🤴'  className={styles.textbox} type="number"  />
     <br/>
</div>
<br/>
{/* <input      type="submit" defaultValue="ORDER NOW" /> */}
</form>
      <button  onClick={HandleSubmit }  className=" font-serif mt-4  border-4 hover:border-cyan-700 md:hover:text-xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[200px]  md:h-16 md:w-[200px] bg-gradient-to-r from-orange-600 via-amber-400 to-red-400 ..."  >ORDER NOW 💁</button>
    </div>
     {/* form div2 end */}
  </div>
     }
        {/* main div */}


    </div>
  )
}



export default GPfinalorder