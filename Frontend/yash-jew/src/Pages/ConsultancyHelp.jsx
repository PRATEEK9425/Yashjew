import React from "react";
import consultangImg from "../Photos/consultancycartoon.jpg";
import HelpCartoon from "../Photos/Help.png";
import banner1 from "../Photos/backgroundbanner1.jpg";
import banner2 from "../Photos/backgroundbanner2.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const ConsultancyHelp = () => {
const navigate = useNavigate()

const ConsultancyForm =()=>{
  navigate("/consultancyform")
}
  return (
    <div>
      <Navbar/>
      <div className=" ">
        <span className="   font-serif text-transparent   text-4xl   md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
          GOLD CONSULTANCY
        </span>
        <span className="text-4xl   md:text-6xl lg:text-8xl">🧈</span>
      </div>

{/* BANNER1 */}

<div className=" w-full md:w-[90%] m-auto mt-10  rounded-2xl  mb-[120px]    lg:mb-[50px] ">
            <div className="relative">
              <img
                className="w-full h-[620px]  rounded-2xl "
                src={banner1}
                alt=""
              />

              {/* ----------------relative----- */}

              <div className=" border-2 border-red-800  rounded-2xl ml-[5%] absolute h-[600px] mt-[-157%] md:mt-[-80%] lg:mt-[-50%] md:gap-3 bg-gray-500/70 w-[90%] ">
                <div className="grid  grid-cols-1 gap-1 mb-11 lg:grid-cols-2">
                  <div className="">
                    <h1 className=" mt-20  font-extrabold text-transparent   text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-900">
                      Guidance of Gold Like No-one Else...
                    </h1>
                    <br />
                    <p className=" font-bold text-xl md:text-2xl text-white ">
                      Guidence In purity of gold , Guidence In Is shoopkeeper Have
                      valid Hallmarking-d(HU-ID),Guidence In Symbols graved
                      while Hallmarking is done ,Guidence In design and weight of
                      jewellery, Guidence In design That suits you well, with Low
                      Budget, Guidence In Gold Price shopkeeper asking is valid
                      or not , Valid Price Telling to customer of Jewellery
                    </p>
                    <br />

                    <button  onClick={()=>{ConsultancyForm()}}  className=" border-4 hover:border-teal-500 md:hover:text-2xl  md:hover:font-bold  text-xl text-white rounded-xl  h-14 w-[250px]  md:h-16 md:w-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                      SUBMIT NOW 😎
                    </button>
                  </div>

                  <div>
                    <img
                      className=" mt-16 w-full md:mt-[200px] lg:mt-10 h-[400px] rounded-2xl lg:w-[80%] m-auto  "
                      src={banner2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* ----------------relative----- */}
            </div>
          </div>
{/* BANNER1 END  */}


<div className="mt-[500px] md:mt-[600px] lg:mt-[100px] ">
<span className="   font-extrabold text-transparent   text-3xl   md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
          Consultancy @ 300₹ / 15min only...
        </span>
        <span className="text-4xl   md:text-6xl lg:text-6xl">🕵️</span>
</div>

      <div className="   w-full mt-[50px] lg:w-[80%] m-auto lg:mt-[40px]  ">
        {/* grid div */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
          <div className="h-[550px] w-[100%]  ">
            <img
              className=" h-[500px]  w-full md:w-[80%] lg:h-full lg:w-[80%] m-auto  rounded-2xl "
              src={HelpCartoon}
              alt=""
            />
          </div>

          <div className="relative ">
            <img
              className="rounded-2xl  w-full h-[700px]    lg:h-full lg:w-full "
              src={consultangImg}
              alt=""
            />
            {/* absolute div */}
            <div className="   rounded-2xl   ml-[5%] absolute h-[550px] mt-[-170%]  md:mt-[-80%] lg:mt-[-95%] bg-gray-500/70 w-[90%]">
              <h1 className="text-white text-center font-bold text-2xl">
                ☎️ Gold Consultancy At One Click ☎️
              </h1>
              {/* inner text box in image */}
              <div className="text-black font-bold md:text-white">
                <div className="w-[80%] m-auto  mt-[10px] text-base">
                  <ol class="list-disc">
                    <li>Is Your Jewellery Have Hallmatking ? </li>
                    <br />
                    <li>Is Your Hallmarking ON Jewellery is Valid ? </li>
                    <br />
                    <li>What is Correct Symbol for Hallmarking ?</li>
                    <br />
                    <li>
                      You Have Buyed Jewellery From BIS CERTIFIED SELLER ?{" "}
                    </li>
                    <br />
                    <li>
                      Did you Checked your Jewellery At Hallmarking center ?{" "}
                    </li>
                  </ol>
                </div>

                <br />
                <br />
                <h1>
                  Get All Gold Related Help with us at Affordable Price 300₹ /
                  15 min
                </h1>
                <br />
                <br />
                <span className="  text-1xl ">
                  📧 Email us <br /> sonin7211@gmail.com
                </span>
              </div>
              {/* --- inner text box in image End--- */}
            </div>
          </div>
        </div>
        {/* grid div end */}
      </div>

      {/* information div  */}

      <div className="mt-[80px]  w-[85%] m-auto  ">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="   font-extrabold text-transparent   text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-pink-700 to-blue-900">
            YASH JEWELLERS CONSULTANCY SERVICE
          </h1>

          <p className="text-left text-2xl mt-5 font-serif text-orange-700 "  >
            Yash Jewellers Provide consultancy of gold and silver as well, to
            safe guard people from buying impure gold ornaments. We Yash
            jewellers provide help to customer how to buy pure gold onaments ,
            what steps you should take while ensuring gold quality and get best
            deals from your preferred shops , according to goverment rule all
            the ornaments shouls have unuique <span className="text-green-600 font-bold  "  >HALL-MARKING-ID (HU-ID)</span> for
            checking purity of gold ,we will tell you best design and weight for
            particular ornaments . Taking Hallmarking ornaments increase the
            value of jewellery in future as well . Safeguard customers and guide
            them how to deal with shopkeeper to get best deal in your own
            TOWN/CITY .
          </p>
          <br />
         
         

          {/* ----------- */}
        </div>
      </div>

      {/* information div end  */}
    </div>
  );
};

export default ConsultancyHelp;
