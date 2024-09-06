const mongoose = require("mongoose")


const goldplatingKadaOrder = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingkadamodel = mongoose.model("GoldPLATING_KadaOrder",  goldplatingKadaOrder)

module.exports={
    goldplatingkadamodel
}