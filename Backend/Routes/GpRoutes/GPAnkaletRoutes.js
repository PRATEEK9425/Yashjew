const express= require("express")

const multer = require("multer");
const { goldplatingkAnkaletmodel } = require("../../Models/GPmodals/GPAnkaletmodal");

const  GoldPlatingAnkaletRoutes = express.Router()

GoldPlatingAnkaletRoutes.get("/goldplatingankalet",async(req,res)=>{
    try {
        const GoldRingData = await goldplatingkAnkaletmodel.find()
    res.send(GoldRingData)
    }
     catch (error) {
        res.send("Gold Plating Ankalet data Not able To Fetch")
        res.send(error)
    }
})

GoldPlatingAnkaletRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldplatingkAnkaletmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldPlatingAnkaletRoutes.get("/goldplatingankalet/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldplatingkAnkaletmodel.find({Category:gender}) 
       res.send(GenderFilter)
    } catch (error) {
        res.send(error)
    }
})

// Gold purity
GoldPlatingAnkaletRoutes.get("/goldplatingankalet/checkpurity/:purity",async(req,res)=>{
    try {
        const purity = req.params.purity
       const GenderFilter = await goldplatingkAnkaletmodel.find({Gold_Karat:purity}) 
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

 GoldPlatingAnkaletRoutes.post('/goldplatingankaletorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new goldplatingkAnkaletmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating Ankalet data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldPlatingAnkaletRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldplatingkAnkaletmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating Ankalet data updated Successfully")
    } catch (error) {
        res.send("Gold Plating Ankalet Data Not Updated")
        res.send(error)
    }
})

GoldPlatingAnkaletRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldplatingkAnkaletmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating Ankalet Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating Ankalet data deleted Successfully")
    }
})



module.exports={
    GoldPlatingAnkaletRoutes
}

