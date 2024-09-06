const mongoose = require("mongoose")


const goldbridalOrder= mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const goldbridalmodel = mongoose.model("GoldBridalOrder",goldbridalOrder)

module.exports={
    goldbridalmodel
}