const mongoose = require("mongoose")


const goldplatingToeOrderschema = mongoose.Schema({
    GoldImg:String,
Title:String,
Category:String,
Model_No:String,
Availability_Type:String,
Quantity:Number,

})

const goldplatingToeRingmodel = mongoose.model("GoldPLATING_ToeRingOrder",goldplatingToeOrderschema)

module.exports={
    goldplatingToeRingmodel
}