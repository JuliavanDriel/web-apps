// const { response } = require("express");
const express = require("express");
const router = express.Router();
const Note = require("../models/qestModel");//Users/jdriel/Documents/web-db-app/models/answerModel.js


// This is the route where the data is sended
router.route("/create").post((req, res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const url = req.body.url;
    // const type = req.body.type;

    const newNote = new Note({
                title,
                content,
                url,
                // type
            }) ;

            newNote.save();
})

module.exports = router;