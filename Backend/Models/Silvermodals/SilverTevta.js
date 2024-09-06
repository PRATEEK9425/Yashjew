const mongoose = require("mongoose")


const silverTevtaOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const  silverTevtaOrdermodal  = mongoose.model("SilverTevta-order",silverTevtaOrderschema)

module.exports={
    silverTevtaOrdermodal
}