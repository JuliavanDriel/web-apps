
const express = require("express");
const router = express.Router();
const hello = require("../models/ExecFileModel");
const { exec } = require('child_process');

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// route to post a new testscript
router.route("/uitvoerenvanHello").post((req, res)=>{
    // shell command to execute a file
  //  var child = execFile('node', ['frontend/src/components/testfiles/Testscript.js'], (error, stdout, stderr) => {

  var createProces =  exec('docker run -d --name web1 -p  4444:4444 --shm-size="2g" selenium/standalone-chrome:4.1.2-20220217',  (error, stdout, stderr) => { 
    

    if (error) {
      throw error;
    }
  })
sleep(9000)
      var child = exec('node SayHello.js',  (error, stdout, stderr) => {//docker run -d --name web1 -p  4444:4444 --shm-size="2g" selenium/standalone-chrome:4.1.2-20220217
        // setTimeout(8000) node SayHello.js 
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
      sleep(9000)
      var rmProces = exec('docker container rm -f web1', (error, stdout, stderr) => { 
        if (error) {
          throw error;
        }
      })      
        
        console.log("Hello world"+ child + createProces+ rmProces);
   
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

