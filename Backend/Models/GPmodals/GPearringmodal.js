const mongoose = require("mongoose")


const goldplatingEarRingOrder = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingEarRingmodel = mongoose.model("GoldPLATING_EarRingOrder", goldplatingEarRingOrder)

module.exports={
    goldplatingEarRingmodel
}