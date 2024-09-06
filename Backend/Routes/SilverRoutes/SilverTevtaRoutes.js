const express= require("express")

const multer = require("multer");
const { silverTevtaOrdermodal } = require("../../Models/Silvermodals/SilverTevta");


const  silverTevtaRoutes = express.Router()

silverTevtaRoutes.get("/silvertevta",async(req,res)=>{
    try {
        const GoldRingData = await  silverTevtaOrdermodal.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Tevta data Not able To Fetch")
        res.send(error)
    }
})

silverTevtaRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await  silverTevtaOrdermodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
silverTevtaRoutes.get("/silvertevta/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await  silverTevtaOrdermodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
silverTevtaRoutes.get("/silvertevta/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await  silverTevtaOrdermodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
silverTevtaRoutes.get("/silvertevta/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await  silverTevtaOrdermodal.find({Gold_Karat:purity, Category:gender}) 
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

 silverTevtaRoutes.post('/silvertevtaorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new  silverTevtaOrdermodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Tevta data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

silverTevtaRoutes.patch("/silvertevta_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await  silverTevtaOrdermodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Tevta Ring data updated Successfully")
    } catch (error) {
        res.send("Tevta  Ring Data Not Updated")
        res.send(error)
    }
})

silverTevtaRoutes.delete("/silvertevta_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await  silverTevtaOrdermodal.findByIdAndDelete({_id:ID})
        res.send("Tevta  Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Tevta Ring data deleted Successfully")
    }
})



module.exports={
    silverTevtaRoutes
}