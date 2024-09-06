const express= require("express")

const multer = require("multer");
const { silverchainmodel } = require("../../Models/Silvermodals/silverchainmodal");


const  silverChainRoutes = express.Router()

silverChainRoutes.get("/silverchain",async(req,res)=>{
    try {
        const SilverRingData = await  silverchainmodel.find()
    res.send(SilverRingData)
    } catch (error) {
        res.send("Gold chain data Not able To Fetch")
        res.send(error)
    }
})

silverChainRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await  silverchainmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
silverChainRoutes.get("/silverchain/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await  silverchainmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
silverChainRoutes.get("/silverchain/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await  silverchainmodel.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
silverChainRoutes.get("/silverchain/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await  silverchainmodel.find({Gold_Karat:purity, Category:gender}) 
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

 silverChainRoutes.post('/silverchainorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new  silverchainmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold chain data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

silverChainRoutes.patch("/silverchain_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await  silverchainmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver chain data updated Successfully")
    } catch (error) {
        res.send("Silver chain Data Not Updated")
        res.send(error)
    }
})

silverChainRoutes.delete("/silverchain_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await  silverchainmodel.findByIdAndDelete({_id:ID})
        res.send("Silver chain Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver chain data deleted Successfully")
    }
})



module.exports={
    silverChainRoutes
}