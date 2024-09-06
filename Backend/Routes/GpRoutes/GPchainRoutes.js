const express= require("express")

const multer = require("multer");
const { goldplatingChainmodel } = require("../../Models/GPmodals/GPchainmodal");

const  GoldPlatingChainRoutes = express.Router()

GoldPlatingChainRoutes.get("/goldplatingchain",async(req,res)=>{
    try {
        const GoldRingData = await goldplatingChainmodel.find()
    res.send(GoldRingData)
    }
     catch (error) {
        res.send("Gold Plating Chain data Not able To Fetch")
        res.send(error)
    }
})

GoldPlatingChainRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldplatingChainmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldPlatingChainRoutes.get("/goldplatingchain/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldplatingChainmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
GoldPlatingChainRoutes.get("/goldplatingchain/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await goldplatingChainmodel.find({Gold_Karat:purity}) 
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

 GoldPlatingChainRoutes.post('/goldplatingchainorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new goldplatingChainmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating Chain data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldPlatingChainRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldplatingChainmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating Chain data updated Successfully")
    } catch (error) {
        res.send("Gold Plating Chain Data Not Updated")
        res.send(error)
    }
})

GoldPlatingChainRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldplatingChainmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating Chain Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating Chain data deleted Successfully")
    }
})



module.exports={
    GoldPlatingChainRoutes
}

