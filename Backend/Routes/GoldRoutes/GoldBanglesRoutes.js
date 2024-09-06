const express= require("express")

const multer = require("multer");
const { banglesOrdermodel } = require("../../Models/Goldmodals/Banglesordermodal");


const goldbanglesRoutes = express.Router()

goldbanglesRoutes.get("/goldbangles",async(req,res)=>{
    try {
        const GoldRingData = await banglesOrdermodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Bangles data Not able To Fetch")
        res.send(error)
    }
})

goldbanglesRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await banglesOrdermodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
goldbanglesRoutes.get("/goldbangles/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await banglesOrdermodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
goldbanglesRoutes.get("/goldbangles/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await banglesOrdermodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
goldbanglesRoutes.get("/goldbangles/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await banglesOrdermodel.find({Gold_Karat:purity, Category:gender}) 
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

goldbanglesRoutes.post('/goldbanglesorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new banglesOrdermodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold EarRing data Uploaded Successfully")
} catch (error) {
    res.send(error)
    console.log(error);
}
})

goldbanglesRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await banglesOrdermodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Bangles data updated Successfully")
    } catch (error) {
        res.send("Gold Bangles Data Not Updated")
        res.send(error)
    }
})

goldbanglesRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await banglesOrdermodel.findByIdAndDelete({_id:ID})
        res.send("Gold Bangles Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Bangles data deleted Successfully")
    }
})



module.exports={
    goldbanglesRoutes
}