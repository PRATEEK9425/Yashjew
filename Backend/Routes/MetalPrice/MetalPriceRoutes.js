const express = require("express")
const { metalPricemodal } = require("../../Models/Metalsprice/Metalspricemodals")

const metalPriceRoutes = express.Router()

metalPriceRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const carausel = await   metalPricemodal.findOne({"_id":id})
res.send(carausel)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})



 metalPriceRoutes.get("/",async(req,res)=>{
    try{
const carausel = await  metalPricemodal.findOne()
res.send(carausel)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})


 metalPriceRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const caruseldata = new  metalPricemodal(payload)
await caruseldata.save()
res.send("Price Updated Successfully")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Image to Db"})
  }
})

 metalPriceRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await  metalPricemodal.findByIdAndUpdate({_id:ID},payload)
res.send("Price Updated successfully")
  }catch(err){
console.log(err)
  }

})

metalPriceRoutes.delete("/remove/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await  metalPricemodal.findByIdAndDelete({_id:ID})
res.send(`Price Deleted `)
  }catch(err){
console.log(err)
  }
})

module.exports={
     metalPriceRoutes
}