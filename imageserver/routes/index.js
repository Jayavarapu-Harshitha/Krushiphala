const express=require('express');


const {upload,uploadImage} = require('../controllers/userController');
const router=express.Router();

// locahost:3000/user/upload
router.post('/upload',uploadImage,upload);

module.exports=router;