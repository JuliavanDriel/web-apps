const express = require("express");
const router = express.Router();
const Tool = require("../models/toolModel");

// route to post a new tool
router.route("/testtoolToevoegen").post((req, res)=>{
    const title = req.body.title;
    const functioneel = req.body.functioneel;
    const performance = req.body.performance;
    const security = req.body.security;
    const option = req.body.option;
    const optionMac = req.body.optionMac;
    const newTool = new Tool({
                title,
                functioneel,
                performance,
                security,
                option,
                optionMac,
                
            });
            newTool.save();
})

// route to get tools
router.route("/tools").get((req,res)=>{
    Tool.find()
    .then((foundTools) => res.json(foundTools))
    .catch((err) => res.status(400).json("Error: "+err));
})

// route to delete tools
router.route("/delete/:id").delete((req,res) =>{
    const id = req.params.id;
    Tool.findByIdAndDelete({_id :id}, (req,res, err)=>{
        if(!err) {
            console.log("Item deleted");
        }else{
            console.log(err);
        }
    });
});

// route to update tools
router.route("/update").put((req, res)=>{
    const id = req.body.id;
    const updateTitle = req.body.title;
    const updateFunc = req.body.functioneel;
    const updatePref = req.body.performance;
    const updateSec = req.body.security;
    const updateoptionmoney = req.body.option;
    const updateoptionMac = req.body.optionMac;
    
    try{
    Tool.findById(id, (err, UpdateTool)=>{
        UpdateTool.title = updateTitle;
        UpdateTool.functioneel = updateFunc;
        UpdateTool.performance = updatePref;
        UpdateTool.security = updateSec;
        UpdateTool.option = updateoptionmoney;
        UpdateTool.optionMac = updateoptionMac;
        UpdateTool.save();
        res.send("update");
        })
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;