
const express = require("express")
const { silverCaruselmodel } = require("../Models/Silvercarausel")



const SilvercarauselRoutes = express.Router()

SilvercarauselRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const carausel = await  silverCaruselmodel.findOne({"_id":id})
res.send(carausel)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})



 SilvercarauselRoutes.get("/",async(req,res)=>{
    try{
const carausel = await silverCaruselmodel.find()
res.send(carausel)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})


 SilvercarauselRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const caruseldata = new silverCaruselmodel(payload)
await caruseldata.save()
res.send("Added  Image to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Image to Db"})
  }
})

 SilvercarauselRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await silverCaruselmodel.findByIdAndUpdate({_id:ID},payload)
res.send("Image Updated successfully")
  }catch(err){
console.log(err)
  }

})

SilvercarauselRoutes.delete("/remove/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await silverCaruselmodel.findByIdAndDelete({_id:ID})
res.send(`DeLeted the Image `)
  }catch(err){
console.log(err)
  }
})

module.exports={
     SilvercarauselRoutes
}