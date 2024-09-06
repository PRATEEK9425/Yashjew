
const express = require("express")
const { referEarnmodel } = require("../Models/ReferEarningmodal")



const ReferEarnRoutes = express.Router()

ReferEarnRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const userdata = await referEarnmodel.findOne({"_id":id})
res.send(userdata)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
  }
})



 ReferEarnRoutes.get("/",async(req,res)=>{
    try{
const userdata = await referEarnmodel.find()
res.send(userdata)
    }catch(err){
console.log(err)
res.send({"msg":"Err while gettting data"})
    }
})


ReferEarnRoutes.get("/:id",async(req,res)=>{
  const IDS = req.params.id
  try {
      const data = await referEarnmodel.findOne({_id:IDS})

res.send(data)
  } catch (err) {
      res.send("Err while loading")
  }
    
})

 ReferEarnRoutes.post("/create",async(req,res)=>{
    const payload = req.body
  try{
const userdata = new referEarnmodel(payload)
await userdata.save()
res.send("Added  user data to Db")

  }catch(err){
console.log(err)
res.send({"msg":"Error while adding Image to Db"})
  }
})

 ReferEarnRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await referEarnmodel.findByIdAndUpdate({_id:ID},payload)
res.send(" user data to Db Updated successfully")
  }catch(err){
console.log(err)
  }

})

ReferEarnRoutes.delete("/:id",async(req,res)=>{
  const ID = req.params.id
  try{
await referEarnmodel.findByIdAndDelete({_id:ID})
res.send(`user data deleted the Image `)
  }catch(err){
console.log(err)
  }
})

module.exports={
     ReferEarnRoutes
}