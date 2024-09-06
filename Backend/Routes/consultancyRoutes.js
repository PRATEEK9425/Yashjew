const express = require("express")
const nodemailer = require("nodemailer");
const { consultancymodal } = require("../Models/Consultancymodal");


require('dotenv').config()

const consultancyRoutes = express.Router()

consultancyRoutes.get("/",async(req,res)=>{
  try{
const carausel = await  consultancymodal.find()
res.send(carausel)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})
consultancyRoutes.get("/:id",async(req,res)=>{
  const IDS = req.params.id
  try {
      const data = await consultancymodal.findOne({_id:IDS})

res.send(data)
  } catch (err) {
      res.send("Err while loading")
  }
    
})

// SENDING MAIL ROUTES
consultancyRoutes.post( "/customer" ,async(req,res)=>{
    const { customer_name,customer_email,customer_Mob_Number,Time_Of_avalability} = req.body
    try {
      
    const OrderEnquiry_send  = new consultancymodal({customer_name,customer_email,customer_Mob_Number,Time_Of_avalability})
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
                to: `${customer_email}`, 
                subject: "Yash Jewellers Consultancy Services ", 
                text: "Thank You For Placing Order At Yash Jewellers Store", 
                html: `<b> Hey ${ customer_name} 💂, 
                <br/>
              Our Team will contact you shortly on Timeslot given by Yous${Time_Of_avalability}
                <br/>
                Your Mobile  is as follows ${customer_Mob_Number} 
                <br/>
                and  Your  email is as follows${customer_email}
                <br/>
                Note : customer can also decrease or Increase some Weight 
            and Jewellery Price will vary on gold price and Weight Of Jewellery .
<br/>
            Regards
            <br/>
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
        res.status(500).json("Mail Not SEND")
    }
})

consultancyRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await consultancymodal.findByIdAndUpdate({_id:ID},payload)
res.send("Consultancy Data Updated successfully")
  }catch(err){
console.log(err)
  }

})

consultancyRoutes.delete("/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await consultancymodal.findByIdAndDelete({_id:ID})
res.send(` Consultancy Data  DeLeted  `)
  }catch(err){
console.log(err)
  }
})


module.exports={
    consultancyRoutes
}