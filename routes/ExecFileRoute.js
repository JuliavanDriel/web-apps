
const express = require("express");
const router = express.Router();
const hello = require("../models/ExecFileModel");
const { exec, execSync } = require('child_process');

// Function to sleep between the execution of commands
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var nodeFile = "SayHello.js";

// route to post a new testscript
router.route("/uitvoerenvanHello").post((req, res)=>{
    // shell command to execute a file
  var createProces =  execSync('docker run -d --name web1 -p 4444:4444 --shm-size="2g" selenium/standalone-chrome:4.1.2-20220217',  (error, stdout, stderr) => { 
    console.log("Docker runs")
    // sleep(90000)
 if (error) {
      throw error;
    }
    console.log("Docker runs and no error")
      
  })
  
      sleep(90000)
      //  var child = exec('docker run hellofriends',  (error, stdout, stderr) => { //node SayHello.js
       var child = exec('node SayHello.js',  (error, stdout, stderr) => {
        //  sleep(90000)
         console.log("After sleep call node")
        // var child = exec('node '+ nodeFile,  (error, stdout, stderr) => { 
        if (error) {
          throw error;
        }
        console.log("called node")
        // create and save file
        const TitleHello = stdout;
        const newhello = new hello({
        TitleHello, 
                });
                newhello.save();
        console.log(stdout);
        // sleep(40000)
        console.log("create output en ends")
      });
      // sleep(40000)
      var rmProces = execSync('docker container rm -f web1', (error, stdout, stderr) => { 
        console.log("remove file")
        if (error) {
          throw error;
        }
      })         
})



// route to get testscript results
router.route("/hellos").get((req,res)=>{
    hello.find()
    .then((foundTools) => res.json(foundTools))
    .catch((err) => res.status(400).json("Error: "+err));
})

module.exports = router;

