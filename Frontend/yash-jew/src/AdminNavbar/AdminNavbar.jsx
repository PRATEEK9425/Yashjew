
import Logos from "../Photos/Logo.jpeg"

import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom";


const AdminNavbar = () => {
    let Links =[
        
        {name:"DESIGN ",link:"/adminallupload_design"},
        {name:"UPLOAD DESIGN",link:"/admin/goldupload_design/uploadgolddesign"},
        {name:"ORDERS",link:"/admin/web-GS-orderList"},
        {name:"REGISTER USER",link:"/admin/register/user/protectedroutes"},
        {name:"BILL",link:"/fill_billform"},
        {name:"CONNECT & EARN",link:"/adminearn&refer"},
        {name:"CONSULTANCY",link:"/adminconsultancydata"},
        {name:"SLIDERS",link:"/admingoldcarusel"},
        {name:"EARN & ABOUT",link:"/earnAdmin"},
        {name:"M-Price",link:"/adminmetalprice_show"}
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className={`shadow-md w-full ${open ? 'mb-[500px]' : 'mb-10'}`}  >
           <div className=' bg-gradient-to-r from-pink-600 via-teal-700 to-sky-700 ...  md:flex items-center justify-between  py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
               <img  className="  block md:hidden  lg:block   h-8 w-8  rounded-full "  src={Logos} alt="" />
                <span className="    block md:invisible lg:visible text-lg   text-white"  >ADMIN PANEL</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
          
           <ul className={`   bg-gradient-to-r   from-pink-600 via-teal-700 to-sky-700  ... md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 text-sm hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
               
            </ul>
          
            {/* button */}
           </div>
        </div>
    );
};


export default AdminNavbar