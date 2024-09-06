const mongoose = require("mongoose")

const aboutpageschema = mongoose.Schema({
   Image_url:String,
   Title:String,
   Description :String
})

const aboutpagemodal = mongoose.model("AboutpageData",aboutpageschema)

module.exports={
    aboutpagemodal
}