const express = require("express")
const cors = require("cors")
const { connection } = require("./Utils/Db")
const { bigcaruselRoutes } = require("./Routes/Bigcaralroutes")
const { GoldPageRoutes } = require("./Routes/GoldPageroute")

const {mailroutes} = require("./Routes/mailroutes")

const { consultancyRoutes } = require("./Routes/consultancyRoutes")
const { registerroutes } = require("./Routes/userRegister")
const { aboutpageRoutes } = require("./Routes/aboutpageRoutes")

const { GoldRingRoutes } = require("./Routes/GoldRoutes/GoldRingRoutes")

const { GoldBridalRoutes } = require("./Routes/GoldRoutes/GoldBridalRoutes")
const { goldEarRingRoutes } = require("./Routes/GoldRoutes/GoldEarRingRoutes")
const { goldPandelsetRoutes } = require("./Routes/GoldRoutes/GoldPandelsetRoutes")
const { goldbanglesRoutes } = require("./Routes/GoldRoutes/GoldBanglesRoutes")
const { goldchainRoutes } = require("./Routes/GoldRoutes/GoldChainRoutes")

const { SilvercarauselRoutes } = require("./Routes/SilverCarauselRoutes")
const { silverRingRoutes } = require("./Routes/SilverRoutes/SilverRingRoutes")
const { SilverRingRoutes } = require("./Routes/SilverRoutes/silverbanglesRoutes")
const { SilverKadaRoutes } = require("./Routes/SilverRoutes/SilverMaleKadaRoutes")
const { silverChainRoutes } = require("./Routes/SilverRoutes/silverchainRoutes")
const { silverEarRingRoutes } = require("./Routes/SilverRoutes/silverearringRoutes")
const { SilverAnkaletRoutes } = require("./Routes/SilverRoutes/SilverAnkaletRoutes")
const { silverToeRingRoutes } = require("./Routes/SilverRoutes/SilverToeRingRoutes")
const { silverNecklaceRoutes } = require("./Routes/SilverRoutes/silvernecklacesetRoutes")
const { GoldplatingcarauselRoutes } = require("./Routes/GpRoutes/GoldPlatingCaruselRoutes")
const { GoldPlatingRingRoutes } = require("./Routes/GpRoutes/GPringRoutes")
const { GPbanglesRoutes } = require("./Routes/GpRoutes/GPbanglesRoutes")

const { GoldPlatingChainRoutes } = require("./Routes/GpRoutes/GPchainRoutes")
const { GoldPlatingEarRingRoutes } = require("./Routes/GpRoutes/GPEarringRoutes")
const { GoldPlatingNecklaceRoutes } = require("./Routes/GpRoutes/GPNecklaceRoutes")
const { GoldPlatingKadaRoutes } = require("./Routes/GpRoutes/GPkadaRoutes")
const { GoldPlatingAnkaletRoutes } = require("./Routes/GpRoutes/GPAnkaletRoutes")
const { GoldPlatingToeRingRoutes } = require("./Routes/GpRoutes/GPToeringRoutes")
const { GoldPlatingHamelRoutes } = require("./Routes/GpRoutes/GPHamelRoutes")


const { EarnRoutes } = require("./Routes/EarnRoutes")
const { ReferEarnRoutes } = require("./Routes/ReferEarnRoutes")
const { BillRoutes } = require("./Routes/BillRoutes/BillRoutes")
// ------order Related Routes ------------
const { GsOrderEmailSendRoutes } = require("./Routes/OrderRelatedRoutes/GSOrderEmailSendRoutes")
const { goldOrderRoutes } = require("./Routes/OrderRelatedRoutes/GoldOrderRoutes")
const { weborderPlaceRoutes } = require("./Routes/OrderRelatedRoutes/placeorderRoutes")
const { GoldOrderEnquiryRoutes } = require("./Routes/OrderRelatedRoutes/SendOrderEnquiryRoutes")
const { GPorders } = require("./Routes/OrderRelatedRoutes/GPorders")
// ------order Related Routes ------------
const { GPOrderEmailSendRoutes } = require("./Routes/GPOrderEmail")
const {adminaccessroutes} =require("./Routes/AdminRoutes/Adminaccessroutes")
const { adminroutesotpcheck } = require("./Routes/AdminRoutes/Adminotpmailcheck")
const { adminroutes } = require("./Routes/AdminRoutes/adminroutes")
const { metalPriceRoutes } = require("./Routes/MetalPrice/MetalPriceRoutes")
const { silverTevtaRoutes } = require("./Routes/SilverRoutes/SilverTevtaRoutes")



require('dotenv').config()
const  app = express()

app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("App is WORKING")
})
const path = require("path")


app.use("/images",express.static("images"))

app.use("/bigcarl",bigcaruselRoutes)
app.use("/silvercarausel",SilvercarauselRoutes)
app.use("/goldplatingcarusel",GoldplatingcarauselRoutes)

app.use("/gold",goldOrderRoutes)
app.use("/goldpage", GoldPageRoutes)
app.use("/enquiry",GoldOrderEnquiryRoutes)
app.use("/consultancy",consultancyRoutes)
app.use("/aboutdata",aboutpageRoutes)

app.use("/generatebill",BillRoutes)
// GS ORDER EMAIL SEND
app.use("/GSOrderEmailsend",GsOrderEmailSendRoutes)
app.use("/GPOrderEmailsend",GPOrderEmailSendRoutes)
// GS ORDER EMAIL SEND
app.use("/G-ring", GoldRingRoutes)
app.use("/G-bridalset",GoldBridalRoutes)
app.use("/G-earring",goldEarRingRoutes)
app.use("/G-pandelset",goldPandelsetRoutes)
app.use("/G-bangles",goldbanglesRoutes)
app.use("/G-chain",goldchainRoutes)

app.use("/S-ring",silverRingRoutes)
app.use("/S-bangles", SilverRingRoutes)
app.use("/S-kada", SilverKadaRoutes)
app.use("/S-Chain", silverChainRoutes)
app.use("/S-earring", silverEarRingRoutes)
app.use("/S-ankalet", SilverAnkaletRoutes)
app.use("/S-toering", silverToeRingRoutes)
app.use("/S-necklace", silverNecklaceRoutes)
app.use("/S-tevta",silverTevtaRoutes)

app.use("/GP-ring",GoldPlatingRingRoutes)
app.use("/GP-bangles",GPbanglesRoutes)
app.use("/GP-chain",GoldPlatingChainRoutes)
app.use("/GP-earring",GoldPlatingEarRingRoutes)
app.use("/GP-necklace",GoldPlatingNecklaceRoutes)
app.use("/GP-kada", GoldPlatingKadaRoutes)
app.use("/GP-ankalet", GoldPlatingAnkaletRoutes)
app.use("/GP-Toering",GoldPlatingToeRingRoutes)
app.use("/GP-Hamel", GoldPlatingHamelRoutes)
// ORDER LIST
app.use("/website/orderlist",weborderPlaceRoutes)
app.use("/website/goldplatingorder",GPorders)
// ORDER LIST
app.use("/connect_earn",EarnRoutes)
app.use("/user_referrance_data",ReferEarnRoutes)
// login part
app.use("/user",registerroutes)
app.use("/mailverify",mailroutes)
// login part
// admin access routes
app.use("/adminaccess",adminaccessroutes)
app.use("/adminotp",adminroutesotpcheck)
app.use("/mainadmin", adminroutes)
// metal price 
app.use("/metalprice",metalPriceRoutes)
app.listen(process.env.Port_No,async(req,res)=>{
    try{
        await connection
        console.log("Connected To db");
            }catch(err){
        console.log(err);
            }
            console.log("Connected at port 3500");
})