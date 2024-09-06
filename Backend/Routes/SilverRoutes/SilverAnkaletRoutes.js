const express= require("express")

const multer = require("multer");
const { silverAnkaletmodel } = require("../../Models/Silvermodals/silverankaletmodal");


const  SilverAnkaletRoutes = express.Router()

SilverAnkaletRoutes.get("/silverankalet",async(req,res)=>{
    try {
        const SilverRingData = await silverAnkaletmodel.find()
    res.send(SilverRingData)
    } catch (error) {
        res.send("Gold Ring data Not able To Fetch")
        res.send(error)
    }
})

SilverAnkaletRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await silverAnkaletmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
SilverAnkaletRoutes.get("/silverankalet/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await silverAnkaletmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
SilverAnkaletRoutes.get("/silverankalet/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await silverAnkaletmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
SilverAnkaletRoutes.get("/silverankalet/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await silverAnkaletmodel.find({Gold_Karat:purity, Category:gender}) 
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

 SilverAnkaletRoutes.post('/silverankaletsorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverAnkaletmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Silver Ankalet data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

SilverAnkaletRoutes.patch("/silverankalet_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await silverAnkaletmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver Ankalet data updated Successfully")
    } catch (error) {
        res.send("Silver Ankalet Data Not Updated")
        res.send(error)
    }
})

SilverAnkaletRoutes.delete("/silverankalet_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await silverAnkaletmodel.findByIdAndDelete({_id:ID})
        res.send("Silver Ankalet Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver Ankalet data deleted Successfully")
    }
})



module.exports={
    SilverAnkaletRoutes
}