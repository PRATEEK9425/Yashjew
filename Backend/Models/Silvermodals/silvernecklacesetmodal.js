const mongoose = require("mongoose")


const silverNecklaceschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const  silverNecklacemodal  = mongoose.model("silverNecklace-order", silverNecklaceschema)

module.exports={
    silverNecklacemodal 
}