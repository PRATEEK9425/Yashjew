const express= require("express")

const multer = require("multer");
const { silverMaleKadaOrdermodal } = require("../../Models/Silvermodals/silverMalekadaModal");


const  SilverKadaRoutes = express.Router()

SilverKadaRoutes.get("/silverkada",async(req,res)=>{
    try {
        const SilverRingData = await silverMaleKadaOrdermodal.find()
    res.send(SilverRingData)
    } catch (error) {
        res.send("Gold Kada data Not able To Fetch")
        res.send(error)
    }
})

SilverKadaRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await silverMaleKadaOrdermodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
SilverKadaRoutes.get("/silverkada/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await silverMaleKadaOrdermodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
SilverKadaRoutes.get("/silverkada/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await silverMaleKadaOrdermodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
SilverKadaRoutes.get("/silverkada/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await silverMaleKadaOrdermodal.find({Gold_Karat:purity, Category:gender}) 
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

 SilverKadaRoutes.post('/silverkadaorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverMaleKadaOrdermodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold Kada data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

SilverKadaRoutes.patch("/silverkada_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await silverMaleKadaOrdermodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Silver Kada data updated Successfully")
    } catch (error) {
        res.send("Silver Kada Data Not Updated")
        res.send(error)
    }
})

SilverKadaRoutes.delete("/silverkada_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await silverMaleKadaOrdermodal.findByIdAndDelete({_id:ID})
        res.send("Silver Kada Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Silver Kada data deleted Successfully")
    }
})



module.exports={
    SilverKadaRoutes
}