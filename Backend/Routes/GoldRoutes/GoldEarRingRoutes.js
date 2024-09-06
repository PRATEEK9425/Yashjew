const express= require("express")

const multer = require("multer");
const { goldEarRingOrdermodal } = require("../../Models/Goldmodals/GoldEarRingsmodals");


const goldEarRingRoutes = express.Router()

goldEarRingRoutes.get("/goldearrings",async(req,res)=>{
    try {
        const GoldRingData = await  goldEarRingOrdermodal.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold EarRing data Not able To Fetch")
        res.send(error)
    }
})

goldEarRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldEarRingOrdermodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
goldEarRingRoutes.get("/goldearrings/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldEarRingOrdermodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
goldEarRingRoutes.get("/goldearrings/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await goldEarRingOrdermodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
goldEarRingRoutes.get("/goldearrings/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await goldEarRingOrdermodal.find({Gold_Karat:purity, Category:gender}) 
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

goldEarRingRoutes.post('/goldearringsorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new goldEarRingOrdermodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold EarRing data Uploaded Successfully")
} catch (error) {
    res.send(error)
    console.log(error);
}
})

goldEarRingRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldEarRingOrdermodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold EarRing data updated Successfully")
    } catch (error) {
        res.send("Gold EarRing Data Not Updated")
        res.send(error)
    }
})

goldEarRingRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldEarRingOrdermodal.findByIdAndDelete({_id:ID})
        res.send("Gold EarRing Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold EarRing data deleted Successfully")
    }
})



module.exports={
   goldEarRingRoutes
}