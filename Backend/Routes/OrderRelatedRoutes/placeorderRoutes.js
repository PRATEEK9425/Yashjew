const express= require("express")

const multer = require("multer");
const { placeordermodel } = require("../../Models/Placeordermodal");


const  weborderPlaceRoutes = express.Router()

 weborderPlaceRoutes.get("/webgold-Allorders",async(req,res)=>{
    try {
        const GoldRingData = await placeordermodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Order data Not able To Fetch")
        res.send(error)
    }
})

 weborderPlaceRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await placeordermodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading Single Order data")
    }
      
})

weborderPlaceRoutes.get("/showorderbymob/:number",async(req,res)=>{
    const Mobnmb = req.params.number
    
    try {
        const data = await placeordermodel.find({Mobile_Nmb:Mobnmb})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading Single Order data")
    }
      
})




  weborderPlaceRoutes.post('/create-webgoldorder',  async(req, res)=> {
 
   
    
    const {GoldImg,Title,Category,Model_No,Availability_Type,Gold_Karat, Quantity, Name,Email,Mobile_Nmb,Address,PinCode   }=req.body
try {
    const data = new placeordermodel({GoldImg,Title,Category,Model_No,Availability_Type,Gold_Karat, Quantity, Name,Email,Mobile_Nmb,Address,PinCode })
    await data.save()
    res.send("Order data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})



 weborderPlaceRoutes.patch("/update-weborder/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await placeordermodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Orders data updated Successfully")
    } catch (error) {
        res.send("Orders Data Not Updated")
        res.send(error)
    }
})

 weborderPlaceRoutes.delete("/delete-weborder/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await placeordermodel.findByIdAndDelete({_id:ID})
        res.send("Order Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Not able to Fetch orders")
    }
})



module.exports={
     weborderPlaceRoutes
}