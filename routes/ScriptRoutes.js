const express = require("express");
const router = express.Router();
const Script = require("../models/scriptModel");

// route to post a new script
router.route("/createScript").post((req, res)=>{
    const title = req.body.title;
    const chrome = req.body.chrome;
    const url = req.body.url;
    const search = req.body.search;
    const text = req.body.text;

    const newScript = new Script({
                title,
                chrome,
                url,
                search,
                text,
            });
            newScript.save();
})

// get all the scripts
router.route("/script").get((req,res)=>{
    Script.find()
    .then((foundScript) => res.json(foundScript))
    .catch((err) => res.status(400).json("Error: "+err));
})

// get a scrpt by id
router.route("/script/:id").get((req,res) =>{
    Script.findById({_id :id}, (req,res, err)=>{
        if(!err) {
            console.log("Item found");
        }else{
            console.log(err);
        }
    });
});

module.exports = router;