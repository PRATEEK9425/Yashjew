const express= require("express")

const multer = require("multer");
const { goldbridalmodel } = require("../../Models/Goldmodals/GoldBridalsetmodal");

const  GoldBridalRoutes = express.Router()

GoldBridalRoutes.get("/goldbridal",async(req,res)=>{
    try {
        const GoldRingData = await goldbridalmodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Ring data Not able To Fetch")
        res.send(error)
    }
})

GoldBridalRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldbridalmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldBridalRoutes.get("/goldbridal/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldbridalmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
GoldBridalRoutes.get("/goldbridal/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await goldbridalmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
GoldBridalRoutes.get("/goldbridal/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await goldbridalmodel.find({Gold_Karat:purity, Category:gender}) 
       res.send(Bothsorting)
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

 GoldBridalRoutes.post('/goldbridalorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new goldbridalmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold bridal data Uploaded Successfully")
} catch (error) {
    res.send(error)
    console.log(error);
}
})

GoldBridalRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldbridalmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Ring data updated Successfully")
    } catch (error) {
        res.send("Gold Ring Data Not Updated")
        res.send(error)
    }
})

GoldBridalRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldbridalmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Ring data deleted Successfully")
    }
})



module.exports={
    GoldBridalRoutes
}