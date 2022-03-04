
// Schema for the sended data
const mongoose = require("mongoose");


// Schema for the sended data
const helloSchema = {
    TitleHello: String,
}

const hello = mongoose.model("hello", helloSchema);
// const hello = console.log("Hello everyone")

module.exports = hello;

