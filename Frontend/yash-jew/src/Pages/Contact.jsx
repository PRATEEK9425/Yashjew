import React from 'react'
import contactimg from "../Photos/contact.jpg"
import styles from "../styles/Username.module.css"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`service_29lqz0a`, `template_7tnuk89`, form.current,`Il0MnYXePHtQtVTam` )
      .then((result) => {
          console.log(result.text);
          console.log("Msg SEND sUCCESSFULLY");
          alert("Message Send Successfully")
          
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>
 <Navbar/>
      <span className='text-4xl  lg:text-6xl'  >☎️  </span>
      <span className=" mt-10  font-extrabold text-transparent text-4xl  lg:text-6xl bg-clip-text bg-gradient-to-r from-amber-700 to-violet-500" >
        Contact Us
      </span>
      <span className='text-4xl  lg:text-6xl'  >  📞</span>
      {/* main div */}
      <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] m-auto mt-10 gap-4'  >
        {/*  div 1 */}
        <div className='relative ' >
          <img  className='rounded-2xl' src={contactimg} alt="" />
          {/* absolute div */}
          <div className="   rounded-2xl ml-[5%] absolute h-[350px] mt-[-90%] md:mt-[-80%] lg:mt-[-50%] bg-gray-500/50 w-[90%]">
    <h1 className='text-white text-center font-bold ' >☎️ Contact Us ☎️</h1>
{/* inner text box in image */}
<div className='text-black font-bold md:text-white'  >
<span className= ' text-1xl ' >
  🏠 <br/> Address <br/>  Yash Jewellers <br/> Near Yash Tower,Landmark-Icecream Factory, Mandrella, 
 Dist - Jhunjhnu , Rajasthan ,Pin-333025, India</span>
<br/>
<br/>
  <span className= 'font-extrabold ' >📞 <br/> +91-9772204352 <br/>+91-9521514352  </span>
  <br/>
  
  <span className= 'font-extrabold ' ><span>👨‍⚖️</span> <br/> Narendra Kumar Soni </span>
  <br/>

  <span className= '  text-1xl ' >📧 Email us <br/> sonin7211@gmail.com</span>

</div>
{/* --- inner text box in image End--- */}
  </div>
        </div>
        {/* div 2 */}
<div className='bg-gray-300 rounded-2xl  mt-20 md:mt-[-7%] lg:mt-3 '  >
<h1 className='mt-10  font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-violet-300 to-blue-600'  >Send Your Message </h1> 

{/* form here */}
<div className='mt-10'  >
<form ref={form} onSubmit={sendEmail}>
     
     <input   required  placeholder='Your Name 😊'  className={styles.textbox} type="text" name="user_name" />
     <br/>
     <br/>
    
     <input  required   placeholder='Your Email 📧'  className={styles.textbox} type="email" name="user_email" />
     <br/>
     <br/>
     
     <textarea   required placeholder='Enter Your Message 💬' className={styles.textbox}  name="message" />
     <br/>
     <br/>
     <input className={styles.btn} type="submit" value="Send" />
   </form>
</div>

</div>
      </div>
    </div>
  )
}

export default ContactUs