const mongoose = require("mongoose")


const goldplatingNecklaceOrder = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingNecklacemodel = mongoose.model("GoldPLATING_NecklaceOrder",  goldplatingNecklaceOrder)

module.exports={
    goldplatingNecklacemodel
}