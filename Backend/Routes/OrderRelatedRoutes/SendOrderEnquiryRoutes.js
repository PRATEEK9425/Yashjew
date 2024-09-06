const express = require("express")
const nodemailer = require("nodemailer");
const { sendOrderEnquirymodel } = require("../../Models/SendOrderEnquiry");

require('dotenv').config()
const GoldOrderEnquiryRoutes = express.Router()


// SENDING MAIL ROUTES
GoldOrderEnquiryRoutes.post( "/emailenquirysend" ,async(req,res)=>{
    const { Title,Customer_Name,Address,Contact,Email_Address,Model_Number,Estimated_Weight,Estimated_Price,GoldPrice_Today} = req.body
    try {
      
    const OrderEnquiry_send  = new sendOrderEnquirymodel({Title,Customer_Name,Address,Contact,Email_Address,Model_Number,Estimated_Weight,Estimated_Price,GoldPrice_Today})
    OrderEnquiry_send.save()
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.Admin_Email,
                    pass: process.env.Admin_Password,
                },
              });
    
              const message = {
                from: '"Yash Jewellers 👻" <sonin7211@gmail.com>',
                to: `${Email_Address}`, 
                subject: "Yash Jewellers Order Enquiry ", 
                text: "Thank You For Placing Order At Yash Jewellers Store", 
                html: `<b> Hey ${Customer_Name} 💂, Your Order ${Title} is received at our End .
                
                <br/>
                Your Mobile Number is ${Contact} 📲,
                <br/>
                Your Address is ${Address} 🏡 ,
                <br/>
                Your Order Id is ${Model_Number},
                <br/>
                Estimated weight Of Jewellery ⚖️ ${Estimated_Weight} Gram ,
                <br/>
                Estimated Price 💸 ${Estimated_Price} ₹,
                <br/>
                Today's Gold Price 💸  ${GoldPrice_Today} ₹,
                <br/>
                Note : customer can also decrease or Increase some Weight 
            and Jewellery Price will vary on gold price and Weight Of Jewellery .
<br/>
            Regards
             Yash jewellers
         </b>`, 
              };
            
    transporter.sendMail(message).then((info)=>{
    return res.status(201).json("Mail Send Successfully")
    info:info.messageId
    }).catch((err)=>{
        return res.status(500).json("Mail Delivery Failed ")
    })
   

    } catch (error) {
        res.status(500).json("Otp Not send ")
    }
})

module.exports={
    GoldOrderEnquiryRoutes
}