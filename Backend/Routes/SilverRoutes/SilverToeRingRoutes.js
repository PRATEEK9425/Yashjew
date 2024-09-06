const express= require("express")

const multer = require("multer");
const { silverToeRingOrdermodal } = require("../../Models/Silvermodals/SilverToeRingmodal");


const  silverToeRingRoutes = express.Router()

silverToeRingRoutes.get("/silvertoe-ring",async(req,res)=>{
    try {
        const GoldRingData = await silverToeRingOrdermodal.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Toe Ring data Not able To Fetch")
        res.send(error)
    }
})

silverToeRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await silverToeRingOrdermodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
silverToeRingRoutes.get("/silvertoe-ring/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await silverToeRingOrdermodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
silverToeRingRoutes.get("/silvertoe-ring/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await silverToeRingOrdermodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
silverToeRingRoutes.get("/silvertoe-ring/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await silverToeRingOrdermodal.find({Gold_Karat:purity, Category:gender}) 
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

 silverToeRingRoutes.post('/silvertoe-ringorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new silverToeRingOrdermodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Toe Ring data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

silverToeRingRoutes.patch("/silvertoe-ring_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await silverToeRingOrdermodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Toe  Ring data updated Successfully")
    } catch (error) {
        res.send("Toe  Ring Data Not Updated")
        res.send(error)
    }
})

silverToeRingRoutes.delete("/silvertoe-ring_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await silverToeRingOrdermodal.findByIdAndDelete({_id:ID})
        res.send("Toe  Ring Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Toe  Ring data deleted Successfully")
    }
})



module.exports={
    silverToeRingRoutes
}