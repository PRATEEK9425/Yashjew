const mongoose = require("mongoose")


const silverearringschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const silverearringmodel  = mongoose.model("silverEarring_Order",silverearringschema)

module.exports={
    silverearringmodel
}