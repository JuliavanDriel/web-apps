const mongoose = require("mongoose");

// this is the schema for the sended data
const noteSchema = {
    title: String,
    url: String,
    functioneel: Boolean,
    performance: Boolean,
    security: Boolean,
    option: String,
    optionMac: String,
}

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;