'use strict'
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'uploads');
    },
    filename:(req, file, cb)=>{
        cb(null,  file.originalname) //new Date().toISOString().replace(/:/g, '-') + '-' +
    }
});



const upload = multer({storage: storage}); 

module.exports = {upload}