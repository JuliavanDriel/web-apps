
const express = require("express");
const router = express.Router();
const FullScript = require("../models/saveScriptModel");
const fs = require('fs');

// route to post a new script
router.route("/SaveScript").post((req, res)=>{
    const selenBasic =  req.body.selenBasic;
    const newSaveScript = new FullScript({
        selenBasic
    })
    newSaveScript.save()
            .then((FullScrip) => console.log(FullScrip))
            .catch((err) => res.status(400).json("Error", err))
})

    // Get a script and write it to ChangeFile.js 
    router.route("/getFile/").get( async function(req, res) {
        // Get the data
        let selenium = req.query.selenBasic;
        // Write to ChangeFile.js
        fs.writeFile('ChangeFile.js', selenium , function(err){
                    console.log("saved data");
                })
        // log the script
        console.log(selenium)
    });



/* The history page which run all the scripts
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
*/

module.exports = router;

