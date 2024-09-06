const mongoose = require("mongoose")

const placeorderSchema = mongoose.Schema({
    GoldImg:String,
    Title:String,
    Category:String,
    Model_No:String,
    Availability_Type:String,
    Gold_Karat:String,
    Quantity:Number,
    Name:String,
    Email:String,
    Mobile_Nmb:Number,
    Address:String,
    PinCode:Number
})

const placeordermodel=mongoose.model("Website-order",placeorderSchema)

module.exports={
    placeordermodel 
}