const express = require("express");
const router = express.Router();
const FullScript = require("../models/saveScriptModel");

// route to post a new script
router.route("/SaveScript").post((req, res)=>{

    const newSaveScript = new FullScript({
        inputHttp:req.body.inputHttp, 
        inputAll: req.body.inputAll,
        ThreathsBasic: req.body.ThreathsBasic,
        selenBasic: req.body.selenBasic,
        CypBasic:req.body.CypBasic,
        CypAssertion:req.body.CypAssertion,
        CypAll:req.body.CypAll,
        scriptWeb: req.body.scriptWeb,
            });
            newSaveScript.save()
            .then((FullScrip) => console.log(FullScrip))
            .catch((err) => res.status(400).json("Error", err))
})
router.route("/readScripts").get((req,res)=>{
    FullScript.find()
    .then((foundTools) => res.json(foundTools))
    .catch((err) => res.status(400).json("Error: "+err));
})

// route to delete tools
router.route("/deleteScript/:id").delete((req,res) =>{
    const id = req.params.id;
    FullScript.findByIdAndDelete({_id :id}, (req,res, err)=>{
        if(!err) {
            console.log("Item deleted");
        }else{
            console.log(err);
        }
    });
});

module.exports = router;