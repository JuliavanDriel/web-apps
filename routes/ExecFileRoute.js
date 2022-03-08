
const express = require("express");
const router = express.Router();
const hello = require("../models/ExecFileModel");
const { execFile } = require('child_process');

// route to post a new testscript
router.route("/uitvoerenvanHello").post((req, res)=>{
    // shell command to execute a file
    var child = execFile('node', ['frontend/src/components/testfiles/Testscript.js'], (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        // create and save file
        const TitleHello = stdout;
        const newhello = new hello({
        TitleHello, 
                });
                newhello.save();
        console.log(stdout);
      });
        console.log("Hello world"+ child);
   
})



// route to get testscript
router.route("/hellos").get((req,res)=>{
    // console.log(child)
    hello.find()
    .then((foundTools) => res.json(foundTools))
    .catch((err) => res.status(400).json("Error: "+err));
})

router.route("/hellos/title").get((req,res) =>{
  hello.find({TitleHello :"Result is:Testen. Testen. Testen."}, (req,res, err)=>{
      if(!err) {
          console.log("Item found");
      }else{
          console.log(err);
      }
  });
});


router.route("/runFile").post((req,res) =>{

  var child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
    console.log("Hello world"+ child);
})

module.exports = router;

