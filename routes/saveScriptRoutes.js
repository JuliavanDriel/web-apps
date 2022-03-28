const express = require("express");
const router = express.Router();
const FullScript = require("../models/saveScriptModel");
const fs = require('fs');
const content = 'Some content!';

// route to post a new script
router.route("/SaveScript").post((req, res)=>{
    
    const newSaveScript = new FullScript({
    //     // inputHttp:req.body.inputHttp, 
    //     // inputAll: req.body.inputAll,
    //     // ThreathsBasic: req.body.ThreathsBasic
    inputFileName: req.body.inputFileName,
        selenBasic: req.body.selenBasic,
    //     // CypBasic:req.body.CypBasic,
    //     // CypAssertion:req.body.CypAssertion,
    //     // CypAll:req.body.CypAll,
    //     // scriptWeb: req.body.scriptWeb,
       
            });
            // })
            newSaveScript.save()
            .then((FullScrip) => console.log(FullScrip))
            .catch((err) => res.status(400).json("Error", err))
})


// fs.writeFile('SayHello.js', selenBasic, function(err){
//     console.log("saved data");
   
// //file written successfully
// })

// router.route("/script/:id").get((req,res) =>{
//     Script.findById({_id :id}, (req,res, err)=>{
//         if(!err) {
//             console.log("Item found");
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.route("/readScripts/:inputFileName").get((req,res)=>{
//     const fileName = req.params.inputFileName;
//     // const TestFile = req.params.selenBasic;
//     FullScript.find({fileName}, (req,res,err)=>{
//         if(!err) {
//             //     fs.writeFile('SayHello.js', TestFile, function(err){
//             //     console.log("saved data");
//             // //file written successfully
//             // })
//             console.log(fileName);
//         }else{
//             console.log(err);
//         }
//     })
//     .then((foundTools) => res.json(foundTools))
//     .catch((err) => res.status(400).json("Error: "+err));
// })
const input = 'NaamvanFile'

router.route("/getFile").get((req,res)=>{
    FullScript.find().where('inputFileName').equals(input).select("selenBasic")
    .then((foundTools) => res.json(foundTools))
    .catch((err) => res.status(400).json("Error: "+err));
})

// Tool.findById(id, (err, UpdateTool)=>{
//     UpdateTool.title = updateTitle;
//     UpdateTool.functioneel = updateFunc;
//     UpdateTool.performance = updatePref;
//     UpdateTool.security = updateSec;
//     UpdateTool.option = updateoptionmoney;
//     UpdateTool.optionMac = updateoptionMac;
//     UpdateTool.save();
//     res.send("update");
//     })

/ router.route("/getFile/:inputFileName").get((req,res)=>{
        const fileName = req.params.inputFileName;
    //     // const TestFile = req.params.selenBasic;
    
        FullScript.findById(inputFileName, (err, fileName)=>{
            fileName.inputFileName = inputFileName;
            if(!err) {
                //     fs.writeFile('SayHello.js', TestFile, function(err){
                //     console.log("saved data");
                // //file written successfully
                // })
                console.log(fileName);
            }else{
                console.log(err);
            }
        })
        .then((foundTools) => res.json(foundTools))
        .catch((err) => res.status(400).json("Error: "+err));
        })


// Route for the history page
// router.route("/readScripts").get((req,res)=>{
//     FullScript.find()
//     .then((foundTools) => res.json(foundTools))
//     .catch((err) => res.status(400).json("Error: "+err));
// })

// route to delete tools
// router.route("/deleteScript/:id").delete((req,res) =>{
//     const id = req.params.id;
//     FullScript.findByIdAndDelete({_id :id}, (req,res, err)=>{
//         if(!err) {
//             console.log("Item deleted");
//         }else{
//             console.log(err);
//         }
//     });
// });

module.exports = router;