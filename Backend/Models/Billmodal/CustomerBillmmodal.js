const mongoose = require("mongoose")

const customerBillModals = mongoose.Schema({
   Jew_url:String,
   CustomerName:String,
   Jewellery_Name:String,
   Jew_weight:Number,
   HU_ID:String,
   Ornament_Type:String,
   Rate_Of_Ornaments:Number,
   Payable_Amount:Number,
   Date_Of_Purchase:String,
   Contact:Number,
   Address:String

})

const customerBillmodel = mongoose.model("Customerbill-Info",customerBillModals)

module.exports={
    customerBillmodel
}