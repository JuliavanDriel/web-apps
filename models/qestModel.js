const mongoose = require("mongoose");

// this is the schema for the sended data
const noteSchema = {
    title: String,
    content: String,
    url: String,
    // type:String
}

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;