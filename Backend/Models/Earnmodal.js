const mongoose = require("mongoose")

const Earnschema = mongoose.Schema({
   Image_url:String,
   Title:String,
   Description :String
})

const earnmodal = mongoose.model("Earn-data",Earnschema)

module.exports={
    earnmodal
}

//