const express= require("express")

const multer = require("multer");
const { goldringmodel } = require("../../Models/Goldmodals/GoldRingordermodel");

const  GoldRingRoutes = express.Router()

GoldRingRoutes.get("/goldringshow",async(req,res)=>{
    try {
        const GoldRingData = await goldringmodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Ring data Not able To Fetch")
        res.send(error)
    }
})

GoldRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldringmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldRingRoutes.get("/goldringshow/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldringmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
GoldRingRoutes.get("/goldringshow/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await goldringmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
GoldRingRoutes.get("/goldringshow/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await goldringmodel.find({Gold_Karat:purity, Category:gender}) 
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

 GoldRingRoutes.post('/goldringorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new goldringmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold Ring data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldRingRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldringmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Ring data updated Successfully")
    } catch (error) {
        res.send("Gold Ring Data Not Updated")
        res.send(error)
    }
})

GoldRingRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldringmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Ring data deleted Successfully")
    }
})



module.exports={
    GoldRingRoutes
}