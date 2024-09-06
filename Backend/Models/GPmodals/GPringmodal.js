const mongoose = require("mongoose")


const goldplatingringOrder= mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingringmodel = mongoose.model("GoldPLATING_RingOrder",goldplatingringOrder)

module.exports={
    goldplatingringmodel
}