const mongoose = require("mongoose")


const goldEarRingOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const goldEarRingOrdermodal = mongoose.model("Gold-Earing", goldEarRingOrderschema)

module.exports={
    goldEarRingOrdermodal
}