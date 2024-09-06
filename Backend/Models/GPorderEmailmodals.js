const mongoose = require("mongoose")

const GPOrder_EmailSend_Schema = mongoose.Schema({
    Title:String,
    Category:String,
    Model_No:String,
    Quantity:Number,
    Name:String,
    Email:String,
    Mobile_Nmb:Number,
    Address:String,
    PinCode:Number,
    Order_No:String,
    Courier_Partner:String
})

const gpOrder_EmailSend_model   =mongoose.model("GP-Order-Emailsenddata",GPOrder_EmailSend_Schema)

module.exports={
    gpOrder_EmailSend_model 
}