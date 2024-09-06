
import Logos from "../Photos/Logo.jpeg"

import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div  className='mb-10 bg-gradient-to-r from-teal-500 via-teal-700 to-yellow-300 ...  md:flex items-center justify-between  ' > 
      <nav   >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <img  className="  block md:hidden  lg:block   h-8 w-8  rounded-full "  src={Logos} alt="" />
                  <span className="    block md:invisible lg:visible text-lg   text-white"  >YASH JEWELLERS</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg font-semibold">Home</a>
                  <a href="/gold" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg font-semibold">GOLD</a>
                  <a href="/silver" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg  font-semibold">SILVER</a>
                  <a href="/goldplating" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg  font-semibold">GOLD PLATING</a>
                  <a href="/customorder" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg font-semibold">CUSTOMISE </a>
                  <a href="/consultancy" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg  font-semibold">CONSULTANCY</a>
                  <a href="/earn" className="text-gray-300  hover:text-pink-700 px-3 py-2 rounded-md text-lg  font-semibold"> EARN</a>
                  <a href="/checkemail" className="text-red-700 hover:text-gray-100 hover:bg-green-600   px-3 py-2 rounded-md text-lg  font-semibold">REGISTER NOW</a>
                  
  
                
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">HOME</a>
            <a href="/gold" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">GOLD</a>
            <a href="/silver" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">SILVER</a>
            <a href="/goldplating" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">GOLD PLATING</a>
            <a href="/customorder" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">CUSTOMISE</a>
            <a href="/consultancy" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">CONSULTANCY</a>
            <a href="/earn" className="text-gray-300 hover:bg-emerald-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">EARN</a>
            <a href="/checkemail" className="text-red-700 hover:text-gray-100 hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">REGISTER NOW</a>
          
          
          
          
          </div>
        </div>
      </nav>
      </div>
    );
  };



export default Navbar