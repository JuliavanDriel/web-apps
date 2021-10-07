const express = require("express");
const router = express.Router();
const Tool = require("../models/toolModel");
// const rout = require("../server")


router.route("/createTool").post((req, res)=>{
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
router.route("/tools").get((req,res)=>{
    Tool.find()
    .then(foundTools => res.json(foundTools))
})

module.exports = router;