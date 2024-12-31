const mongoose = require("mongoose")
const User = require("./user")

const urlSchema = mongoose.Schema({
    userId: {
        type: String,
        ref: User
    },
    shortURL: {
        type: String,
        unique: true
    },
    originalURL: {
        type: String,
    }
}, { timeStamps: true })

const URL = mongoose.model("url", urlSchema);
module.exports = URL;