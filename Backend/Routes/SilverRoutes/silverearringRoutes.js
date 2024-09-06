const express= require("express")

const multer = require("multer");
const { silverearringmodel } = require("../../Models/Silvermodals/silverearringmodal");



const   silverEarRingRoutes = express.Router()

 silverEarRingRoutes.get("/silverearring",async(req,res)=>{
    try {
        const SilverRingData = await   silverearringmodel.find()
    res.send(SilverRingData)
    } catch (error) {
        res.send("Silver EarRing data Not able To Fetch")
        res.send(error)
    }
})

 silverEarRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await   silverearringmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
 silverEarRingRoutes.get("/silverearring/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await   silverearringmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
 silverEarRingRoutes.get("/silverearring/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await   silverearringmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
 silverEarRingRoutes.get("/silverearring/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await   silverearringmodel.find({Gold_Karat:purity, Category:gender}) 
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

  silverEarRingRoutes.post('/silverearringorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverearringmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Silver EarRing data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

 silverEarRingRoutes.patch("/silverearring_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await   silverearringmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver EarRing data updated Successfully")
    } catch (error) {
        res.send("Silver EarRing Data Not Updated")
        res.send(error)
    }
})

 silverEarRingRoutes.delete("/silverearring_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await   silverearringmodel.findByIdAndDelete({_id:ID})
        res.send("Silver EarRing Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver EarRing data deleted Successfully")
    }
})



module.exports={
     silverEarRingRoutes
}