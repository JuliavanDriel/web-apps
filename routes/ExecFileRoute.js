
const express = require("express");
const router = express.Router();
const hello = require("../models/ExecFileModel");
const { exec, execSync, spawn } = require('child_process');

// Function to sleep between the execution of commands
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


// Route to post start the Dockerfile
router.route("/uitvoerenvanTest").post((req, res)=>{
    console.log("begin")
    // Shell command to built a docker container
    var createProces =  execSync('docker build -t execfile .',  (error, stdout, stderr) => { 
    console.log("Docker build")
      // Throws an error if there is an error
      if (error) {
        throw error;
      }
    console.log("Docker build and no error")
      
  })
  
    // Start the Docker image/container
    var child = exec('docker run execfile',  (error, stdout, stderr) => {
        console.log("Run the container")
         // Throws an error if there is an error
        if (error) {
          throw error;
        }
        console.log("Container is running")

        // create and save the output of the test
        const TitleHello = stdout;
        const newhello = new hello({
        TitleHello, 
                });
                newhello.save();
        console.log(stdout);
        console.log("create output")
      });
      sleep(210000 ) 
      // removes the image
      var rmProces = execSync('docker image rm -f image execfile', (error, stdout, stderr) => {
        sleep(210000 ) 
        console.log("remove image")
        if (error) {
          throw error;
        }
      })
      console.log("end")         
})



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
})



module.exports = router;







