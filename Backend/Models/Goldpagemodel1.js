const mongoose = require("mongoose")

const goldPageSchema = mongoose.Schema({
Goldimg_banner_img:String,
Title:String,

})

const goldpagemodel = mongoose.model("GoldPage_carusel",goldPageSchema)

module.exports={
    goldpagemodel 
}