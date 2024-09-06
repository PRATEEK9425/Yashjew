const mongoose = require("mongoose")


const goldplatingchainOrder = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingChainmodel = mongoose.model("GoldPLATING_ChainOrder", goldplatingchainOrder)

module.exports={
    goldplatingChainmodel
}