const express = require("express")
const { aboutpagemodal } = require("../Models/Aboutpagemodal")

const aboutpageRoutes = express.Router()

aboutpageRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const carausel = await  aboutpagemodal.findOne({"_id":id})
res.send(carausel)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})



 aboutpageRoutes.get("/",async(req,res)=>{
    try{
const carausel = await aboutpagemodal.find()
res.send(carausel)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})


 aboutpageRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const caruseldata = new aboutpagemodal(payload)
await caruseldata.save()
res.send("Added  Image to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Image to Db"})
  }
})

 aboutpageRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await aboutpagemodal.findByIdAndUpdate({_id:ID},payload)
res.send("Image Updated successfully")
  }catch(err){
console.log(err)
  }

})

aboutpageRoutes.delete("/remove/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await aboutpagemodal.findByIdAndDelete({_id:ID})
res.send(`DeLeted the Image `)
  }catch(err){
console.log(err)
  }
})

module.exports={
     aboutpageRoutes
}