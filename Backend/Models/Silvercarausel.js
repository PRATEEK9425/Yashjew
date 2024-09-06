const mongoose = require("mongoose")

const Silvercarauselschema = mongoose.Schema({
   carauselimg:String,
   Title:String
})

const silverCaruselmodel = mongoose.model("Silvercarausel-Data",Silvercarauselschema )

module.exports={
    silverCaruselmodel
}