const express= require("express")

const multer = require("multer");
const { silverNecklacemodal } = require("../../Models/Silvermodals/silvernecklacesetmodal");


const  silverNecklaceRoutes = express.Router()

silverNecklaceRoutes.get("/silvernecklace",async(req,res)=>{
    try {
        const GoldRingData = await silverNecklacemodal.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Silver Necklace data Not able To Fetch")
        res.send(error)
    }
})

silverNecklaceRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await silverNecklacemodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
silverNecklaceRoutes.get("/silvernecklace/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await silverNecklacemodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
silverNecklaceRoutes.get("/silvernecklace/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await silverNecklacemodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
silverNecklaceRoutes.get("/silvernecklace/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await silverNecklacemodal.find({Gold_Karat:purity, Category:gender}) 
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

 silverNecklaceRoutes.post('/silvernecklaceorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverNecklacemodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Silver Necklace data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

silverNecklaceRoutes.patch("/silvernecklace_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await silverNecklacemodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver Necklace data updated Successfully")
    } catch (error) {
        res.send("Silver Necklace Data Not Updated")
        res.send(error)
    }
})

silverNecklaceRoutes.delete("/silvernecklace_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await silverNecklacemodal.findByIdAndDelete({_id:ID})
        res.send("Silver Necklace Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver Necklace data deleted Successfully")
    }
})



module.exports={
    silverNecklaceRoutes
}