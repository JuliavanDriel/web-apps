const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.json());

// Connect to mongodb
mongoose.connect('mongodb+srv://JohnDoe:JohnDoe01@webdb.l1qjh.mongodb.net/notesDB',{
   useNewUrlParser: true,
   useUnifiedTopology:true,
}).then(console.log('connected to mongoDB!'))

// Uses the routes
app.use("/",require("./routes/qestRoutes"))
app.use("/",require("./routes/toolRoutes"))
app.use("/",require("./routes/scriptRoutes"))
app.use("/",require("./routes/saveScriptRoutes"))


const fileRoutes = require('./routes/file-upload-routes');

const port = process.env.PORT || 3001;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));

