const mongoose = require ("mongoose")

const ReferEarnschema  = mongoose.Schema({
Jew_name:String,
weight:Number,
Budget:Number,
Name:String,
Email:String,
contact:Number,
Address:String
})

const referEarnmodel = mongoose.model("Refer-Earn-data",ReferEarnschema)

module.exports={referEarnmodel}