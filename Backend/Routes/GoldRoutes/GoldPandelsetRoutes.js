const express= require("express")

const multer = require("multer");
const { pandelsetOrdermodal } = require("../../Models/Goldmodals/PandelsetModal");



const goldPandelsetRoutes = express.Router()

goldPandelsetRoutes.get("/goldpandelset",async(req,res)=>{
    try {
        const GoldRingData = await  pandelsetOrdermodal.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Pandelset data Not able To Fetch")
        res.send(error)
    }
})

goldPandelsetRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await pandelsetOrdermodal.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
goldPandelsetRoutes.get("/goldpandelset/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await pandelsetOrdermodal.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
goldPandelsetRoutes.get("/goldpandelset/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await pandelsetOrdermodal.find({Gold_Karat:purity}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})



// Gold purity and gender check both 
goldPandelsetRoutes.get("/goldpandelset/:purity/:gender",async(req,res)=>{
    try {
        const {purity ,gender }   = req.params
       const Bothsorting = await pandelsetOrdermodal.find({Gold_Karat:purity, Category:gender}) 
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

goldPandelsetRoutes.post('/goldpandelsetorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat}=req.body
try {
    const data = new pandelsetOrdermodal({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity,Gold_Karat})
    await data.save()
    res.send("Gold Pandelset data Uploaded Successfully")
} catch (error) {
    res.send(error)
    console.log(error);
}
})

goldPandelsetRoutes.patch("/goldpandelset_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await pandelsetOrdermodal.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Pandelset data updated Successfully")
    } catch (error) {
        res.send("Gold Pandelset Data Not Updated")
        res.send(error)
    }
})

goldPandelsetRoutes.delete("/goldpandelset_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await pandelsetOrdermodal.findByIdAndDelete({_id:ID})
        res.send("Gold Pandelset Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Pandelset data deleted Successfully")
    }
})



module.exports={
   goldPandelsetRoutes
}