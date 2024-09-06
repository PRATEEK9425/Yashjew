const express= require("express")

const multer = require("multer");
const { silverRingOrdermodal } = require("../../Models/Silvermodals/silverRingmodals");


const  silverRingRoutes = express.Router()

silverRingRoutes.get("/silverringshow",async(req,res)=>{
    try {
        const GoldRingData = await silverRingOrdermodal.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Ring data Not able To Fetch")
        res.send(error)
    }
})

silverRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await silverRingOrdermodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
silverRingRoutes.get("/silverringshow/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await silverRingOrdermodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
silverRingRoutes.get("/silverringshow/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await silverRingOrdermodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
silverRingRoutes.get("/silverringshow/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await silverRingOrdermodal.find({Gold_Karat:purity, Category:gender}) 
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

 silverRingRoutes.post('/silverringorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverRingOrdermodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Silver Ring data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

silverRingRoutes.patch("/silverringshow_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await silverRingOrdermodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver Ring data updated Successfully")
    } catch (error) {
        res.send("Silver Ring Data Not Updated")
        res.send(error)
    }
})

silverRingRoutes.delete("/silverringshow_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await silverRingOrdermodal.findByIdAndDelete({_id:ID})
        res.send("Silver Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver Ring data deleted Successfully")
    }
})



module.exports={
    silverRingRoutes
}