const mongoose = require("mongoose")


const metalPriceschema = mongoose.Schema({
    Gold_Price_20k:Number,
    Gold_Price_22k:Number,
    Gold_Price_24k:Number,
    Silver_Price:Number
})

const metalPricemodal  = mongoose.model("Metal-Price",metalPriceschema )

module.exports={
    metalPricemodal
}