const mongoose = require("mongoose");

// this is the schema for the sended data
const scriptSchema = {
    title: String,
    chrome:String,
    url: String,
    search:String,
    text:String
}

const Script = mongoose.model("Script", scriptSchema);

module.exports = Script;