import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home';
import Gold from '../Pages/Gold';
import Silver from '../Pages/Silver';
import GoldPlating from '../Pages/GoldPlating';
import Customorder from '../Pages/Customorder';
import ConsultancyHelp from '../Pages/ConsultancyHelp';
import GoldPageEditOrder from '../Admin/GoldPageEditOrder';
import GolOrderEmailSend from '../Admin/GolOrderEmailSend';
import ConsultancyForm from '../Components/ConsultancyForm';
import CheckUser from "../Pages/CheckUser"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import VerfyEmail from '../Pages/VerfyEmail';
import OTPcheck from '../Pages/OTPcheck';
import Resetcheck1 from '../Pages/Resetcheck1';
import Resetcheck2 from '../Pages/Resetcheck2';
import Resetcheck3 from '../Pages/Resetcheck3';
import ResetFinal from '../Pages/ResetFinal';
import ResetFinalAuthProtector from '../Authentification/ResetAuthFinal';
import ContactUs from '../Pages/Contact';
import Aboutus from '../Pages/Aboutus';
import SingleOrder from '../Components/SingleOrder';
import FinalOrderEntry from '../Components/FinalOrderEntry';
import ReusableComponent from '../Components/ReusableComponent';
import SilverReusablecomp from '../Components/SilverReusablecomp';
import SilverSingleCard from '../Components/SilverSingleCard';
import GoldplatingReusableComp from '../Components/GoldplatingReusableComp';
import GPsinglecard from '../Components/GPsinglecard';
import GPfinalorder from '../Components/GPfinalorder';
import Earn from '../Pages/Earn';
import Earncomp from '../Components/Earncomp';
import { CustomerBill } from '../Printbill/Bill';
import BillForm from '../Printbill/BillForm';
import SearchOrder from '../Admin/SearchOrder';
import CustomerUploadOrder from '../Admin/GoldPageUpload';

import ConsultancyData from '../Admin/ConsultancyData';
import ConsultancyEdit from '../Admincomponent/ConsultancyEdit';
import EarnwithusAdmin from '../Admin/EarnwithusAdmin';
import EarnwithEdit from '../Admincomponent/EarnwithEdit';
import PageNotFound from '../Pages/PageNotFound';
import GoldAdmin from '../Admin/GoldAdmin';
import GoldProductList from '../Admincomponent/GoldProductList';
import GoldListshow from '../AdminProductCat/GoldListshow';
import GoldListEdit from '../AdminProductCat/GoldListEdit';
import { SilverAdmin } from '../Admin/SilverAdmin';
import SilverProductList from '../Admincomponent/SilverProductList';
import GPAdminUplaod from '../Admin/GPAdminUplaod';
import GPAdminList from '../Admin/GPAdminList';
import GPlistshowAdmin from '../AdminProductCat/GPlistshowAdmin';
import GPEditList from '../AdminProductCat/GPEditList';
import GSOrdershow from '../Admin/GSOrdershow';
import GSEditorder from '../Admincomponent/GSEditorder';
import GSEmailsend from '../Admincomponent/GSEmailsend';
import GPAllorderList from '../Admin/GPAllorderList';
import GPorderListEdit from '../Admincomponent/GPorderListEdit';
import GPEmailsend from '../Admincomponent/GPEmailsend';
import AdminEarn from '../Admin/AdminEarn';
import AdminEarnEdit from '../Admincomponent/AdminEarnEdit';
import AdminAbout from '../Admin/AdminAbout';
import GoldCaruselAdmin from '../Admin/GoldCaruselAdmin';

import  CaruselEditReusable  from "../Admincomponent/CaruselEditReusable"
import SilvercarauselAdmin from '../Admin/Silvercarausel';
import GPCarauselAdmin from '../Admin/GPCarauselAdmin';
import BillAllAdmin from '../Admin/BillAllAdmin';
import BillEditAdmin from '../Admincomponent/BillEditAdmin';
import RegisteruserList from '../Admin/RegisteruserList';
import RegisteruserListEdit from '../Admincomponent/RegisteruserListEdit';

import AdminAccess from '../AdminExcessControl/AdminAccess';
import AdminEmail from '../AdminExcessControl/AdminEmail';
import AdminEmailverify from '../AdminExcessControl/AdminEmailverify';
import AdminRegister from "../AdminExcessControl/AdminRegister"
import Adminlogin from "../AdminExcessControl/Adminlogin"
import AdminAccessCheck from "../Authentification/AdminAccessCheck"
import OTPAuthenticate from "../Authentification/OTPAuthenticate"
import UploaddesignAll from '../Admincomponent/UploaddesignAll';
import Metalprice from '../MetalPrice/Metalprice';
import AdminMetalPrice from '../MetalPrice/AdminMetalPrice';
import MetalPriceEdit from '../MetalPrice/MetalPriceEdit';
import YsPolicy from '../Policy/YsPolicy';
import TermandConditions from '../Policy/TermandConditions';

const Approuting = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={  <PageNotFound/>   }  />

        <Route path="/earn" element={<Earn/>} />
        <Route path="/earnform" element={<Earncomp/>} />

        <Route path="/customorder" element={<Customorder/>} />
        <Route path="/consultancy" element={<ConsultancyHelp/>}/>
        {/* <Route path="/sample" element={<Goldbanner />} /> */}
        <Route path="/consultancyform" element={<ConsultancyForm />} />

        
        <Route path="/gold" element={<Gold/>} />
        <Route path="/web-orders/:ornamentstype/:name" element={<ReusableComponent/>} />
        <Route path="/web-order-singleInfo/:ornamentstype/:id" element={<SingleOrder/>} />
        
        
        <Route path="/silver" element={<Silver/>} />
<Route path="/web-orders-silver/:ornamentstype/:name" element={<SilverReusablecomp/>} />
 <Route path="/web-order-SilversingleInfo/:ornamentstype/:id" element={<SilverSingleCard/>} />
 <Route path="/Web-place-order/:ornamentstype/:id" element={ <FinalOrderEntry/>  } />
 
 <Route path="/goldplating" element={<GoldPlating/>} />
 <Route path="/web-orders-GP/:ornamentstype/:name" element={<GoldplatingReusableComp/>} />
 <Route path="/web-order-GPsingleInfo/:ornamentstype/:id" element={<GPsinglecard/>} />
 <Route path="/GP-Web-place-order/:ornamentstype/:id" element={ <GPfinalorder/>  } />
 
{/* Register */}
        <Route path="/checkemail" element={<CheckUser/>}  />
<Route path="/verifyemail/:useremails" element={< VerfyEmail/>}  />
<Route path="/otpchecking/:useremail" element={<OTPcheck/>}  />
<Route path="/register/:useremail" element={<Register/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/about" element={<Aboutus/>}  />
{/* Register */}
<Route path="/resetcheck1" element={  <Resetcheck1/>   }  />
<Route path="/resetcheck2/:useremails" element={  <Resetcheck2/>   }  />
<Route path="/resetcheck3/:useremails" element={  <Resetcheck3/>   }  />
<Route path="/resetcheck4/:useremails" element={ <ResetFinalAuthProtector><ResetFinal/> </ResetFinalAuthProtector>  }  />

<Route path="/contact" element={<ContactUs/>} />
<Route path="/privacypolicy" element={<YsPolicy/>} />
<Route path="/termandcondition" element={<TermandConditions/> } />

        {/*----------------------- Admin route --------------------------*/}
        
{/* generate bill */}
        <Route path="/fill_billform" element={<BillForm/>} />

        <Route path="/billingcustomer/:huid" element={<CustomerBill />} />
        <Route path="/adminbillshow" element={<BillAllAdmin/>} />
        <Route path="/billedit/:id" element={<BillEditAdmin/>} />
        <Route path="/adminordersearch" element={< SearchOrder />} />
{/* generate bill end */}

{/* carusel admin     */}
 <Route path="/admingoldcarusel" element={<GoldCaruselAdmin/>} />
 <Route path="/adminsilvercarusel" element={<SilvercarauselAdmin/>} />
 <Route path="/admingoldplatingcarusel" element={<GPCarauselAdmin/>} />
 <Route path="/editcaruseladmin/:id/:url/:title" element={< CaruselEditReusable  />} /> 
{/* carusel admin end    */}

<Route path="/adminconsultancydata" element={<ConsultancyData/>} />

<Route path="/admin_consultancyEdit_data/:id" element={<ConsultancyEdit/>} />     
<Route path="/adminearn&refer" element={<EarnwithusAdmin/>} />
<Route path="/adminearn&referedit/:id" element={<EarnwithEdit/>} />


{/* ------------------gold silver Gp design update routes --------------------*/}

{/*------ gold section admin  */}
<Route path="/admin/goldupload_design/uploadgolddesign" element={<GoldAdmin/>} />
<Route path="/admin_goldproductlist" element={<GoldProductList/>} />    
            
            {/* goldproduct show and edit routes */}
<Route path="/admin_goldproduct/:cat/:jewtypes" element={<GoldListshow/>} /> 
<Route path="/admin_goldproductEdit/:id/:cat" element={<GoldListEdit/>} /> 
{/* ---------gold section admin  */}
   
   {/* silver setion  */}
   <Route path="/admin/silverupload_design/uploadsilverdesign" element={<SilverAdmin/>} />   
   <Route path="/admin_silverproductlist" element={<SilverProductList/>} />    
   <Route path="/admin_GP_ProductEdit/:id/:cat" element={<GPlistshowAdmin/>} />
    {/* silver setion  */}  

{/* GP-SECTION  upload*/}
<Route path="/adminGPUpload" element={<GPAdminUplaod/>} />
<Route path="/adminGPlist" element={<GPAdminList/>} />
<Route path="/admin_GP_Product/:cat/:jewtypes" element={<GPlistshowAdmin/>} /> 
<Route path="/admin_GPproductEdit/:id/:cat" element={<GPEditList/>} />
{/* GP-SECTION upload */}
{/* ------------------gold silver Gp update routes end --------------------*/}
{/* -------orderlist show-------  */}
{/* custom order  */}
<Route path="/customer_upload_order" element={<CustomerUploadOrder/>}/>
        <Route path="/admingoldorderEdit/:id" element={<GoldPageEditOrder/>}/>
        <Route path="/sendEmailToUser/:id" element={<GolOrderEmailSend/>}/>
        
{/* custom order end */}

{/* gold and silver order */}
<Route path="/admin/web-GS-orderList" element={<GSOrdershow/>} />
<Route path="/admin/web-GS-orderListEdit/:id" element={< GSEditorder/>} />
<Route path="/admin/web-GS-orderIDsend/:id" element={<GSEmailsend/>} />

{/* gold and silver order */}

{/* gp orders show */}
<Route path="/admin/web-GP-orderList" element={<GPAllorderList/>} />
<Route path="/admin/web-GP-orderListeDIT/:id" element={< GPorderListEdit  />} />
<Route path="/admin/web-GP-orderEmailsend/:id" element={<GPEmailsend/>} />

{/* gp orders show */}

{/* --------orderlist show----------  */}

{/* Earn and about admin update */}

<Route path="/earnAdmin" element={<AdminEarn/>} />
<Route path="/aboutAdmin" element={<AdminAbout/>} />
<Route path="/:id/:path/:mainediturl" element={< AdminEarnEdit />} />

{/* register user routes Login details */}
<Route path="/admin/register/user/protectedroutes" element={<RegisteruserList/>} />
<Route path="/admin/register/user/adminregisterlistedit/:id" element={<RegisteruserListEdit/>} />

{/* admin registeration */}
 <Route path="/adminaccess" element={  <AdminAccess/> } />
<Route path="/adminotpgen" element={ <AdminAccessCheck><AdminEmail/></AdminAccessCheck>  } /> 
<Route path="/adminotpverify/:useremail" element={ <OTPAuthenticate> <AdminEmailverify/> </OTPAuthenticate>  } />
   <Route path="/adminregister/:useremail" element={ <OTPAuthenticate>< AdminRegister/></OTPAuthenticate>  } />
 <Route path="/adminlogin" element={  < Adminlogin /> } /> 

{/* all uploaded design routes */}
 <Route path="/adminallupload_design" element={  < UploaddesignAll /> } />
 <Route path="/adminmetalprice_show" element={  < AdminMetalPrice /> } />
 <Route path="/adminmetalprice_update/:id" element={  < MetalPriceEdit /> } />

        </Routes>
    </div>
  )
}

export default Approuting