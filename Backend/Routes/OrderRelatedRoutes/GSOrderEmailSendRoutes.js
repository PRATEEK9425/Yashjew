const express = require("express")
const nodemailer = require("nodemailer");
const {  gsOrder_EmailSend_model  } = require("../../Models/GSEmailSend");

require('dotenv').config()


const GsOrderEmailSendRoutes = express.Router()

GsOrderEmailSendRoutes.get("/",async(req,res)=>{
    const {Title,Category,Model_No,Gold_Karat,Quantity,Name,Email,Mobile_Nmb,Address,PinCode,Order_No,Courier_Partner} = req.body  
try {
   const data = await  gsOrder_EmailSend_model.find() 
   res.send(data)
} catch (error) {
    res.send(error)
    res.send("Not Able to get data")
}


})

// SENDING MAIL ROUTES
GsOrderEmailSendRoutes.post( "/adminGSorderEmailsend" ,async(req,res)=>{
    const {Title,Category,Model_No,Gold_Karat,Quantity,Name,Email,Mobile_Nmb,Address,PinCode,Order_No,Courier_Partner} = req.body
    try {
  

    const UserOrderDetailShare  = new  gsOrder_EmailSend_model ({Title,Category,Model_No,Gold_Karat,Quantity,Name,Email,Mobile_Nmb,Address,PinCode,Order_No,Courier_Partner})
    UserOrderDetailShare.save()
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.Admin_Email,
                    pass: process.env.Admin_Password,
                },
              });
    
              const message = {
                from: '"Yash Jewellers 👻" <sonin7211@gmail.com>',
                to: `${Email}`, 
                subject: "Yash Jewellers Order Details  ", 
                text: " Yash Jewellers", 
                html: `<b> Hey ${Name} 😀,
                <br/>
               We have Received Your Order name ${Title} and category ${Category}
<br/>
with Model No ${Model_No} and Purity ${Gold_Karat} with Quantity ${Quantity}
<br/>
Your contact details are as  follows Email-Id ${Email} and Mob-Nmb  ${Mobile_Nmb}
   <br/>             
Shipping Address - ${Address} ,${PinCode}
<br/>
ORDER NUMBER - ${Order_No}
<br/>
COURIER PARTNER - ${Courier_Partner}
<br/>
You can track your order by visting on ${Courier_Partner} Website .
<br/>
Thanks for shopping with us .
Regards
                <br/>
                Yash Jewellers
                </b>`, 
              };
            
    transporter.sendMail(message).then((info)=>{
    return res.status(201).json("Order details  send Successfully")
    info:info.messageId
    }).catch((err)=>{
        return res.status(500).json("Order details Not send ")
    })
   

    } catch (error) {
        res.status(500).json("Order details Not send ")
    }
})






module.exports={GsOrderEmailSendRoutes}