'use strict';
const SingleFile = require('../models/singlefile');


// File upload in path project
const singleFileUpload = async (req, res, next) => {
try{
    // Create the model of file
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 4)
        });
        // Save the file
        await file.save();
        console.log(file)
        res.status(201).send('file Uploaded Successfully');
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
// Get all files
const getallSingleFiles = async (req, res, next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

// File formatter
const fileSizeFormatter = (bytes, decimal) =>{
    if(bytes=== 0){
        return '0 bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = {
    singleFileUpload,
   getallSingleFiles
}
