
const express = require("express")
const { goldPlatingCaruselmodel } = require("../../Models/GPmodals/GPcarauselmodal")



const GoldplatingcarauselRoutes = express.Router()

GoldplatingcarauselRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const carausel = await goldPlatingCaruselmodel.findOne({"_id":id})
res.send(carausel)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})



GoldplatingcarauselRoutes.get("/",async(req,res)=>{
    try{
const carausel = await goldPlatingCaruselmodel.find()
res.send(carausel)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})


GoldplatingcarauselRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const caruseldata = new goldPlatingCaruselmodel(payload)
await caruseldata.save()
res.send("Added  Image to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Image to Db"})
  }
})

GoldplatingcarauselRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await goldPlatingCaruselmodel.findByIdAndUpdate({_id:ID},payload)
res.send("Image Updated successfully")
  }catch(err){
console.log(err)
  }

})

GoldplatingcarauselRoutes.delete("/remove/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await goldPlatingCaruselmodel.findByIdAndDelete({_id:ID})
res.send(`DeLeted the Image `)
  }catch(err){
console.log(err)
  }
})

module.exports={
    GoldplatingcarauselRoutes
}