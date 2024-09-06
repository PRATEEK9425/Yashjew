const mongoose = require("mongoose")


const silverAnkaletschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String

})

const silverAnkaletmodel  = mongoose.model("SilverAnkalet_Order",silverAnkaletschema)

module.exports={
    silverAnkaletmodel
}