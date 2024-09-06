const express = require("express")
const { earnmodal } = require("../Models/Earnmodal")



const EarnRoutes = express.Router()



 EarnRoutes.get("/",async(req,res)=>{
    try{
const carausel = await earnmodal.find()
res.send(carausel)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})

EarnRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const carausel = await  earnmodal.findOne({"_id":id})
res.send(carausel)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})

 EarnRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const caruseldata = new earnmodal(payload)
await caruseldata.save()
res.send("Added  Image to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Image to Db"})
  }
})

 EarnRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await earnmodal.findByIdAndUpdate({_id:ID},payload)
res.send("Image Updated successfully")
  }catch(err){
console.log(err)
  }

})

EarnRoutes.delete("/remove/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await earnmodal.findByIdAndDelete({_id:ID})
res.send(`DeLeted the Image `)
  }catch(err){
console.log(err)
  }
})

module.exports={
     EarnRoutes
}