const express = require("express")
const nodemailer = require("nodemailer");
const { adminverifymailmodel } = require("../../Models/Adminmodals/AdminVerifyotpmodel");

require('dotenv').config()
const adminroutesotpcheck= express.Router()


// SENDING MAIL ROUTES
adminroutesotpcheck.post("/verify",async(req,res)=>{
    const {Admin_email_verify,email_OTP,isAuth,Username} = req.body
    try {

    const userVerfication  = new adminverifymailmodel({Admin_email_verify,email_OTP,isAuth,Username})
    userVerfication.save()
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.Admin_Email,
                  pass: process.env.Admin_Password,
                },
              });
    
              const message = {
                from: '"Yash Jewellers 👻" <sonin7211@gmail.com>',
                to: `<sonin7211@gmail.com>`, 
                subject: "Yash Jewellers Admin Generated OTP ", 
                text: "Yash JewellersAdmin Otp", 
                html: `<b> Hello Admin😀 
                <br/>
                ${Username}  
                <br/>
                OTP IS ${email_OTP} .
                <br/>
                Please share with Authorised User. </b>`, 
              };
            
    transporter.sendMail(message).then((info)=>{
    return res.status(201).json("Otp send Successfully")
    info:info.messageId
    }).catch((err)=>{
        return res.status(500).json("Otp Not send ")
    })
   

    } catch (error) {
        res.status(500).json("Otp Not send ")
        console.log(error);
    }
})

// verfying otp from user entry and Db check
adminroutesotpcheck.post("/verifyotp",async(req,res)=>{
  const {Admin_email_verify,email_OTP} = req.body 
  try {
    const OTPCHECKING_fROMDB = await  adminverifymailmodel.findOne({Admin_email_verify,email_OTP})
  //  user entering
    const User_ENTERED_OTP = email_OTP
    const User_ENTERED_Email = Admin_email_verify
// user detail in db
    const Otp_IN_DB = OTPCHECKING_fROMDB.email_OTP
    const Email_IN_DB = OTPCHECKING_fROMDB.Admin_email_verify

    if(Otp_IN_DB===User_ENTERED_OTP && User_ENTERED_Email===Email_IN_DB  ){
   
      res.send({"msg":"Admin Email verified", "uSERiD":`${OTPCHECKING_fROMDB._id}`})
     
    }else{
      return res.status(500).json("Incorrect OTP")
    }

  } catch (error) {
    res.send("Incorrect OTP")
    console.log(error);
  }
})

// Deleting Entry of user in Db 

adminroutesotpcheck.delete("/remove_otp/:id",async(req,res)=>{
  const ID = req.params.id
  try{
   await  adminverifymailmodel.findByIdAndDelete(({_id:ID})) 
   res.send({"msg":`Entry Removed`})
  }catch(err){
   console.log(err);
   res.send({"Msg":"Not ABLE TO Delete"})
     }
})


module.exports={adminroutesotpcheck}