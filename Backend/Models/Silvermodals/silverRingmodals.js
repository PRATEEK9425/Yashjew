const mongoose = require("mongoose")


const silverRingOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const  silverRingOrdermodal  = mongoose.model("SilverRing-order", silverRingOrderschema)

module.exports={
    silverRingOrdermodal
}