const mongoose = require("mongoose")


const silverchainschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const silverchainmodel  = mongoose.model("SilverChain_Order",silverchainschema)

module.exports={
    silverchainmodel
}