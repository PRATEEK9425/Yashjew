const mongoose = require("mongoose")

const consultancyschema = mongoose.Schema({
   customer_name:String,
   customer_email:String,
   customer_Mob_Number:Number,
   Time_Of_avalability:String
}
)

const consultancymodal = mongoose.model("ConsultancyUser",consultancyschema)

module.exports={
    consultancymodal 
}