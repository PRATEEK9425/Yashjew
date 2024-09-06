const mongoose = require("mongoose")


const goldplatingHamelOrderSchema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingHamelmodel = mongoose.model("GoldPLATING_Hamelorder", goldplatingHamelOrderSchema )

module.exports={
    goldplatingHamelmodel
}