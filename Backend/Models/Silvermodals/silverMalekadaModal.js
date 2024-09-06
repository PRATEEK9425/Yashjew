const mongoose = require("mongoose")


const silverMaleKadaOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const  silverMaleKadaOrdermodal  = mongoose.model("SilverMaleKada_Order",silverMaleKadaOrderschema)

module.exports={
    silverMaleKadaOrdermodal
}