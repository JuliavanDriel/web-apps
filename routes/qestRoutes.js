// const { response } = require("express");
const express = require("express");
const router = express.Router();
const Note = require("../models/qestModel");//Users/jdriel/Documents/web-db-app/models/answerModel.js


// This is the route where the data is sended
router.route("/create").post((req, res)=>{
    const title = req.body.title;
    const url = req.body.url;
    const functioneel = req.body.functioneel;
    const performance = req.body.performance;
    const security = req.body.security;
    const formData = req.body.formData;
    // const type = req.body.type;

    const newNote = new Note({
                title,
                url,
                functioneel,
                performance,
                security,
                formData,
                // type
            }) ;

            newNote.save();
})

module.exports = router;