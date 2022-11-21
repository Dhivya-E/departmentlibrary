const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    regId: Number,
    name: String,
    course: String,
    section:{
        type: String,
        default: "A"
    },
    author:String,
    count:Number,
});

const bookModel = mongoose.model("deplibrary", bookSchema);

module.exports = bookModel;

