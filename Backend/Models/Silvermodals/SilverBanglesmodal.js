const mongoose = require("mongoose")


const silverOrderschema  = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const silverringmodel = mongoose.model("SilverRingOrder",silverOrderschema)

module.exports={
    silverringmodel
}