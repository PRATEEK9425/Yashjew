const express= require("express")

const multer = require("multer");
const { goldplatingringmodel } = require("../../Models/GPmodals/GPringmodal");

const  GoldPlatingRingRoutes = express.Router()

GoldPlatingRingRoutes.get("/goldplatingring",async(req,res)=>{
    try {
        const GoldRingData = await goldplatingringmodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Plating Ring data Not able To Fetch")
        res.send(error)
    }
})

GoldPlatingRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldplatingringmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldPlatingRingRoutes.get("/goldplatingring/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldplatingringmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
GoldPlatingRingRoutes.get("/goldplatingring/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await goldplatingringmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 


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

 GoldPlatingRingRoutes.post('/goldplatingringorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new goldplatingringmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating Ring data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldPlatingRingRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldplatingringmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating Ring data updated Successfully")
    } catch (error) {
        res.send("Gold Plating Ring Data Not Updated")
        res.send(error)
    }
})

GoldPlatingRingRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldplatingringmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating Ring data deleted Successfully")
    }
})



module.exports={
    GoldPlatingRingRoutes
}