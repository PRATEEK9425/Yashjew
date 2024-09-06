const express= require("express")

const multer = require("multer");
const { goldplatingBanglesmodel } = require("../../Models/GPmodals/GPbanglesmodals");

const  GPbanglesRoutes = express.Router()

GPbanglesRoutes.get("/gpbangles",async(req,res)=>{
    try {
        const GoldRingData = await   goldplatingBanglesmodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("GP Bangles data Not able To Fetch")
        res.send(error)
    }
})

GPbanglesRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await   goldplatingBanglesmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GPbanglesRoutes.get("/gpbangles/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await   goldplatingBanglesmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})




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

 GPbanglesRoutes.post('/gpbanglesorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new   goldplatingBanglesmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("GP Bangles data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GPbanglesRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await   goldplatingBanglesmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("GP Bangles data updated Successfully")
    } catch (error) {
        res.send("GP Bangles Ring Data Not Updated")
        res.send(error)
    }
})

GPbanglesRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await   goldplatingBanglesmodel.findByIdAndDelete({_id:ID})
        res.send("GP Bangles Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("GP Bangles data deleted Successfully")
    }
})



module.exports={
    GPbanglesRoutes
}