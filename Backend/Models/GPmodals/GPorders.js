const mongoose = require("mongoose")

const GPorderListSchema = mongoose.Schema({
    GoldImg:String,
    Title:String,
    Category:String,
    Model_No:String,
    Availability_Type:String,
    Quantity:Number,
    Name:String,
    Email:String,
    Mobile_Nmb:Number,
    Address:String,
    PinCode:Number
})

const gpordermodel   =mongoose.model("GP-Website-order",GPorderListSchema)

module.exports={
    gpordermodel 
}