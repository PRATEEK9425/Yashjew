const express= require("express")

const multer = require("multer");
const { goldplatingkadamodel } = require("../../Models/GPmodals/GPkadamodal");

const  GoldPlatingKadaRoutes = express.Router()

 GoldPlatingKadaRoutes.get("/goldplatingkada",async(req,res)=>{
    try {
        const GoldRingData = await   goldplatingkadamodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Plating Kada data Not able To Fetch")
        res.send(error)
    }
})

 GoldPlatingKadaRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await   goldplatingkadamodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
 GoldPlatingKadaRoutes.get("/goldplatingkada/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await   goldplatingkadamodel.find({Category:gender}) 
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

  GoldPlatingKadaRoutes.post('/goldplatingkadaorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new   goldplatingkadamodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating Kada data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

 GoldPlatingKadaRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await   goldplatingkadamodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating  Kada data updated Successfully")
    } catch (error) {
        res.send("Gold Plating  Kada Data Not Updated")
        res.send(error)
    }
})

 GoldPlatingKadaRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await   goldplatingkadamodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating  Kada Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating  Kada data deleted Successfully")
    }
})



module.exports={
     GoldPlatingKadaRoutes
}