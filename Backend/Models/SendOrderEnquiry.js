const mongoose = require("mongoose")

const sendOrderEnquiryschema = mongoose.Schema({
   Title:String,
   Customer_Name:String,
   Address:String,
   Contact:Number,
   Email_Address:String,
   Model_Number:String,
   Estimated_Weight:String,
   Estimated_Price:String,
   GoldPrice_Today:String
}
)

const sendOrderEnquirymodel = mongoose.model("GoldOrder_Enquirysend",sendOrderEnquiryschema)

module.exports={
    sendOrderEnquirymodel
}