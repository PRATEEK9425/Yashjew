const mongoose = require("mongoose")


const goldplatingringOrder  = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
})

const goldplatingBanglesmodel = mongoose.model("GP_bangles",goldplatingringOrder)

module.exports={
    goldplatingBanglesmodel
}