const express= require("express")

const multer = require("multer");
const { goldplatingToeRingmodel } = require("../../Models/GPmodals/GPToeRingmodal");

const  GoldPlatingToeRingRoutes = express.Router()

GoldPlatingToeRingRoutes.get("/goldplatingtoering",async(req,res)=>{
    try {
        const GoldRingData = await goldplatingToeRingmodel.find()
    res.send(GoldRingData)
    } catch (error) {
        res.send("Gold Plating ToeRing data Not able To Fetch")
        res.send(error)
    }
})

GoldPlatingToeRingRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await goldplatingToeRingmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})

// filter by gender
GoldPlatingToeRingRoutes.get("/goldplatingtoering/:gender",async(req,res)=>{
    try {
        const gender = req.params.gender
       const GenderFilter = await goldplatingToeRingmodel.find({Category:gender}) 
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

 GoldPlatingToeRingRoutes.post('/goldplatingtoeringorder', upload.single('GoldImg'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {Title,Category,Model_No,Availability_Type,Quantity}=req.body
try {
    const data = new goldplatingToeRingmodel({GoldImg:img,Title,Category,Model_No,Availability_Type,Quantity})
    await data.save()
    res.send("Gold Plating ToeRing data Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

GoldPlatingToeRingRoutes.patch("/update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await goldplatingToeRingmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("Gold Plating ToeRing data updated Successfully")
    } catch (error) {
        res.send("Gold Plating ToeRing Data Not Updated")
        res.send(error)
    }
})

GoldPlatingToeRingRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await goldplatingToeRingmodel.findByIdAndDelete({_id:ID})
        res.send("Gold Plating ToeRing Data Deleted")
    } catch (error) {
        console.log(error);
        res.send("Gold Plating ToeRing data NOT deleted ")
    }
})



module.exports={
    GoldPlatingToeRingRoutes
}