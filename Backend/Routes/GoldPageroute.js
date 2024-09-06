const express= require("express")
const GoldPageRoutes = express.Router()
const multer = require("multer");
const { goldpagemodel } = require("../Models/Goldpagemodel1");

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

 GoldPageRoutes.post('/golddesignpost', upload.single('Goldimg_banner_img'), async(req, res, next)=> {
 
    // console.log(req.file,req.body)
    // res.send("hello")
    const img = req.file.path
    const title= req.body.Title
try {
    const data = new goldpagemodel({Goldimg_banner_img:img,Title:title})
    await data.save()
    res.send("Image Uploaded Successfully")
} catch (error) {
    res.send(error)
}
})

module.exports={
    GoldPageRoutes
}
