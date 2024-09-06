const express = require("express")


const goldOrderRoutes = express.Router()

const multer  = require('multer');
const { goldOrdermodel } = require("../../Models/Goldorder");



goldOrderRoutes.get("/",async(req,res)=>{
  try{
const goldorderlist = await goldOrdermodel.find()
res.send(goldorderlist)
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting Gold data"})
  }
})

goldOrderRoutes.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
const goldorderlist  = await  goldOrdermodel.findOne({"_id":id})
res.send(goldorderlist )
  }catch(err){
console.log(err)
res.send({"msg":"Err while gettting Gold data"})
  }
})

// -------------post image by user-----
const multerStorage = multer.diskStorage({
 
    destination: (req, file, cb) => {
      // Get the type of file.
      cb(null, "images/");
     
    },
   
  filename: (req, file, cb) => {
      // Combine the Date in milliseconds and original name and pass as filename
      cb(null, `${Date.now()}.${file.originalname}`);
    },
  });
 const upload = multer({storage:multerStorage})



goldOrderRoutes.post('/goldorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const Title= req.body.Title
       const Customer_Name=req.body.Customer_Name
      const Address=req.body.Address
      const Pincode=req.body.Pincode
      const Contact=req.body.Contact
      const Email_Address=req.body.Email_Address
try {
    const data = new goldOrdermodel({GoldImg:img,Title,Customer_Name,Address,Pincode,Contact,Email_Address})
    await data.save()
    res.send("Image Uploaded Successfully")
} catch (error) {
    res.send(error)
    console.log(error)
}
})
// -------------post image by user-----

goldOrderRoutes.patch("/update/:id",async(req,res)=>{
  const ID = req.params.id
  const payload = req.body
  try{
await goldOrdermodel.findByIdAndUpdate({_id:ID},payload)
res.send("Gold Data Updated successfully")
  }catch(err){
console.log(err)
  }

})

goldOrderRoutes.delete("/remove/:id" ,async(req,res)=>{
  const ID = req.params.id
  try{
await goldOrdermodel.findByIdAndDelete({_id:ID})
res.send(` Gold Data deleted Successfully `)
  }catch(err){
console.log(err)
  }
})






module.exports={
  goldOrderRoutes
}
