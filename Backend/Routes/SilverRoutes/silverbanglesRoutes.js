const express= require("express")

const multer = require("multer");
const { silverringmodel } = require("../../Models/Silvermodals/SilverBanglesmodal");


const  SilverRingRoutes = express.Router()

SilverRingRoutes.get("/silverbangles",async(req,res)=>{
    try {
        const SilverRingData = await silverringmodel.find()
    res.send(SilverRingData)
    } catch (error) {
        res.send("Gold Ring data Not able To Fetch")
        res.send(error)
    }
})

SilverRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await silverringmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
SilverRingRoutes.get("/silverbangles/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await silverringmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
SilverRingRoutes.get("/silverbangles/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await silverringmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
SilverRingRoutes.get("/silverbangles/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await silverringmodel.find({Gold_Karat:purity, Category:gender}) 
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

 SilverRingRoutes.post('/silverbanglesorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverringmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold Ring data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

SilverRingRoutes.patch("/silverbangles_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await silverringmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver Ring data updated Successfully")
    } catch (error) {
        res.send("Silver Ring Data Not Updated")
        res.send(error)
    }
})

SilverRingRoutes.delete("/silverbangles_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await silverringmodel.findByIdAndDelete({_id:ID})
        res.send("Silver Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver Ring data deleted Successfully")
    }
})



module.exports={
    SilverRingRoutes
}