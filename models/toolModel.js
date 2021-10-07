const mongoose = require("mongoose");


// this is the schema for the sended data
const toolSchema = {
    title: String,
    functioneel: String,
    performance: String,
    security: String,
    option: String,
    optionMac: String,
}

const Tool = mongoose.model("Tool", toolSchema);


// Tool.find({title:'Postman'}, (error, data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
//     })

module.exports = Tool;
