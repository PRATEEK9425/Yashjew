const mongoose = require("mongoose")

const adminschemaverify = mongoose.Schema({
    Admin_email_verify:String,
    Username:String,
    email_OTP :Number,
    isAuth :Boolean
})

const adminverifymailmodel = mongoose.model("Admin_OTP",adminschemaverify )

module.exports={
    adminverifymailmodel
}