const mongoose = require("mongoose")

const GSOrder_EmailSend_Schema = mongoose.Schema({
    Title:String,
    Category:String,
    Model_No:String,
    Gold_Karat:String,
    Quantity:Number,
    Name:String,
    Email:String,
    Mobile_Nmb:Number,
    Address:String,
    PinCode:Number,
    Order_No:String,
    Courier_Partner:String
})

const gsOrder_EmailSend_model   =mongoose.model("GS-Order-Emailsenddata",GSOrder_EmailSend_Schema)

module.exports={
    gsOrder_EmailSend_model 
}