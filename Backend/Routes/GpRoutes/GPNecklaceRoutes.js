const express= require("express")

const multer = require("multer");
const { goldplatingNecklacemodel } = require("../../Models/GPmodals/GPNecklacemodal");

const GoldPlatingNecklaceRoutes = express.Router()

GoldPlatingNecklaceRoutes.get("/goldplatingnecklace",async(req,res)=>{
    try {
        const GoldRingData = await  goldplatingNecklacemodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Plating EarRing data Not able To Fetch")
        res.send(error)
    }
})

GoldPlatingNecklaceRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await  goldplatingNecklacemodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldPlatingNecklaceRoutes.get("/goldplatingnecklace/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await  goldplatingNecklacemodel.find({Category:gender}) 
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

 GoldPlatingNecklaceRoutes.post('/goldplatingnecklaceorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new  goldplatingNecklacemodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating Necklace data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldPlatingNecklaceRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await  goldplatingNecklacemodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating  Necklace data updated Successfully")
    } catch (error) {
        res.send("Gold Plating  Necklace Data Not Updated")
        res.send(error)
    }
})

GoldPlatingNecklaceRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await  goldplatingNecklacemodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating  Necklace Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating  Necklace data deleted Successfully")
    }
})



module.exports={
    GoldPlatingNecklaceRoutes
}