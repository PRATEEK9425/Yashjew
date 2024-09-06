const express= require("express")

const multer = require("multer");
const { goldplatingHamelmodel } = require("../../Models/GPmodals/GPHamelmodal");

const  GoldPlatingHamelRoutes = express.Router()

GoldPlatingHamelRoutes.get("/goldplatinghamel",async(req,res)=>{
    try {
        const GoldRingData = await goldplatingHamelmodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Plating  Hamel data Not able To Fetch")
        res.send(error)
    }
})

GoldPlatingHamelRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldplatingHamelmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldPlatingHamelRoutes.get("/goldplatinghamel/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldplatingHamelmodel.find({Category:gender}) 
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

 GoldPlatingHamelRoutes.post('/goldplatinghamelorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new goldplatingHamelmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating  Hamel data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldPlatingHamelRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldplatingHamelmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating Hamel data updated Successfully")
    } catch (error) {
        res.send("Gold Plating Hamel Data Not Updated")
        res.send(error)
    }
})

GoldPlatingHamelRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldplatingHamelmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating Hamel Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating Hamel data NOT deleted ")
    }
})



module.exports={
    GoldPlatingHamelRoutes
}