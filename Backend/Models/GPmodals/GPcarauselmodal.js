const mongoose = require("mongoose")

const goldplatingcarauselschema = mongoose.Schema({
   carauselimg:String,
   Title:String
})

const goldPlatingCaruselmodel = mongoose.model("GoldPlatingCarausel", goldplatingcarauselschema )

module.exports={
    goldPlatingCaruselmodel
}