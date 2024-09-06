const mongoose = require("mongoose")


const goldringOrder= mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const goldringmodel = mongoose.model("GoldRingOrder",goldringOrder)

module.exports={
    goldringmodel
}