const mongoose = require("mongoose")


const pandelsetOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const  pandelsetOrdermodal  = mongoose.model("Gold-Pandelset", pandelsetOrderschema)

module.exports={
    pandelsetOrdermodal 
}