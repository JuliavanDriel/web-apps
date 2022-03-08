
// Schema for the sended data
const mongoose = require("mongoose");


// Model for the sended data
const helloSchema = {
    TitleHello: String,
}

const hello = mongoose.model("hello", helloSchema);

module.exports = hello;

