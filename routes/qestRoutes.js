const express = require("express");
const router = express.Router();
const Note = require("../models/qestModel");//Users/jdriel/Documents/web-db-app/models/answerModel.js
const Tool = require("../models/toolModel");


// This is the route where the data is sended
router.route("/create").post((req, res)=>{
    const title = req.body.title;
    const url = req.body.url;
    const functioneel = req.body.functioneel;
    const performance = req.body.performance;
    const security = req.body.security;
    const option = req.body.option;

    const newNote = new Note({
                title,
                url,
                functioneel,
                performance,
                security,
                option,
            }) ;

            newNote.save();
})

router.route("/read").get((req,res)=>{
    Tool.find()
    .then((foundTools) => res.json(foundTools))
    .catch((err) => res.status(400).json("Error: "+err));
})

// router.route('/read/filter?search=${}').get((req,res)=>{
//     Tool.find()
//     .then((foundTools) => res.json(foundTools))
//     .catch((err) => res.status(400).json("Error: "+err));
// })

module.exports = router;