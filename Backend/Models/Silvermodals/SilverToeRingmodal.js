const mongoose = require("mongoose")


const silverToeringOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,
Gold_Karat:String
})

const  silverToeRingOrdermodal  = mongoose.model("SilverToeRing-order", silverToeringOrderschema)

module.exports={
    silverToeRingOrdermodal
}