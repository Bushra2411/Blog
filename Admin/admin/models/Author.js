
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // maybe other fields
});

module.exports = mongoose.model("Author", authorSchema);