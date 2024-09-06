const mongoose = require("mongoose")


const goldplatingAnkaletOrder = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingkAnkaletmodel = mongoose.model("GoldPLATING_AnkaletOrder",  goldplatingAnkaletOrder)

module.exports={
    goldplatingkAnkaletmodel
}