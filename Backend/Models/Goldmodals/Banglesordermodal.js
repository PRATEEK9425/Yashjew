const mongoose = require("mongoose")


const banglesOrderschema  = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const banglesOrdermodel = mongoose.model("GoldBangles_Order",banglesOrderschema)

module.exports={
    banglesOrdermodel
}