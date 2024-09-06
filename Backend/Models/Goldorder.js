const mongoose = require("mongoose")

const goldOrderschema = mongoose.Schema({
   GoldImg:String,
   Title:String,
   Customer_Name:String,
   Address:String,
   Pincode:Number,
   Contact:Number,
   Email_Address:String
}
)

const goldOrdermodel = mongoose.model("GoldOrder",goldOrderschema)

module.exports={
    goldOrdermodel
}