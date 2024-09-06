const express= require("express")

const multer = require("multer");
const { gpordermodel } = require("../../Models/GPmodals/GPorders");


const  GPorders = express.Router()

 GPorders.get("/GPweb-Allorders",async(req,res)=>{
    try {
        const GoldRingData = await  gpordermodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Order data Not able To Fetch")
        res.send(error)
    }
})

 GPorders.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await  gpordermodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading Single Order data")
    }
      
})






  GPorders.post('/GPweb-ordercreate',  async(req, res)=> {
 
   
    
    const {GoldImg,Title,Category,Model_No,Availability_Type, Quantity, Name,Email,Mobile_Nmb,Address,PinCode   }=req.body
try {
    const data = new  gpordermodel({GoldImg,Title,Category,Model_No,Availability_Type, Quantity, Name,Email,Mobile_Nmb,Address,PinCode })
    await data.save()
    res.send("Order data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})



 GPorders.patch("/GPweb/update-weborder/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await  gpordermodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Orders data updated Successfully")
    } catch (error) {
        res.send("Orders Data Not Updated")
        res.send(error)
    }
})

 GPorders.delete("/GPweb/delete-weborder/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await  gpordermodel.findByIdAndDelete({_id:ID})
        res.send("Order Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Not able to Fetch orders")
    }
})



module.exports={
     GPorders
}