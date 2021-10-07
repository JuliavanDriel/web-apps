const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// //connect to mongodb
mongoose.connect('mongodb+srv://pp@webdb.l1qjh.mongodb.net/notesDB',{
    useUnifiedTopology: true,
    useNewUrlParser : true,
}).then(console.log('connected to mongoDB!'))

app.use("/",require("./routes/qestRoutes"))
app.use("/",require("./routes/toolRoutes"))

// app.get("/", (req,res) =>{
//     res.send('we are home');
// });

// If there is a connection, it will return that it is running
app.listen(3001, function(){
    console.log("server is running on 3001");
})