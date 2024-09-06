const mongoose = require("mongoose")


const goldchainschema= mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const goldchainmodel = mongoose.model("GoldChainOrder",goldchainschema)

module.exports={
    goldchainmodel
}