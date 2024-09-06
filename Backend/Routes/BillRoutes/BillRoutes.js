const express= require("express")

const multer = require("multer");
const { customerBillmodel } = require("../../Models/Billmodal/CustomerBillmmodal");


const BillRoutes = express.Router()

BillRoutes.get("/customer",async(req,res)=>{
    try {
        const BillData = await   customerBillmodel.find()
    res.send(BillData)
    } catch (error) {
        res.send("BillData Not able To Fetch")
        res.send(error)
    }
})

BillRoutes.get("/:cusnmb",async(req,res)=>{
    const CusNmb= req.params.cusnmb
    try {
        const BillData = await customerBillmodel.find({Contact:CusNmb})
    res.send(BillData)
    } catch (error) {
        res.send("No data Found")
        res.send(error)
    }
})

BillRoutes.get("/:id",async(req,res)=>{
    const IDS = req.params.id
    try {
        const data = await   customerBillmodel.findOne({_id:IDS})
  
  res.send(data)
    } catch (err) {
        res.send("Err while loading")
    }
      
})


BillRoutes.get("/Huidsearch/:huid",async(req,res)=>{
    try {
        const huidbycust = req.params.huid
       const HU_ID_Filter = await customerBillmodel.findOne({HU_ID:huidbycust}) 
       res.send(HU_ID_Filter)
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

BillRoutes.post('/customerbillcreate', upload.single('Jew_url'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const {CustomerName,Jewellery_Name,Jew_weight,HU_ID,Ornament_Type,Rate_Of_Ornaments,Payable_Amount,Date_Of_Purchase,Contact,Address} =req.body
try {
    const data = new   customerBillmodel({Jew_url:img,CustomerName,Jewellery_Name,Jew_weight,HU_ID,Ornament_Type,Rate_Of_Ornaments,Payable_Amount,Date_Of_Purchase,Contact,Address})
    await data.save()
    res.send({msg:"Bill Data Uploaded Successfully",HU_ID_No:HU_ID})
} catch (error) {
    res.send(error)
    console.log(error);
}
})

BillRoutes.patch("/customer_update/:id",async(req,res)=>{
        const IDs = req.params.id
        const payload = req.body
    try {
        await   customerBillmodel.findByIdAndUpdate({_id:IDs},payload)
        res.send("  BillData updated Successfully")
    } catch (error) {
        res.send("  BillData Not Updated")
        res.send(error)
    }
})

BillRoutes.delete("/customer_delete/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await   customerBillmodel.findByIdAndDelete({_id:ID})
        res.send("BillData  Deleted")
    } catch (error) {
        console.log(error);
        res.send("BillData  deleted Successfully")
    }
})



module.exports={
    BillRoutes
}