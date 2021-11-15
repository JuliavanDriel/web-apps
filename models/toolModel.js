const mongoose = require("mongoose");


// Schema for the sended data
const toolSchema = {
    title: String,
    functioneel: String,
    performance: String,
    security: String,
    option: String,
    optionMac: String,
}

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
