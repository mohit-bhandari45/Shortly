const mongoose = require("mongoose")
const User = require("./user")

const urlPartSchema = mongoose.Schema({
    shortURL: {
        type: String,
        unique: true
    },
    originalURL: {
        type: String,
    }
})

const urlSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    urls: [urlPartSchema]
}, { timeStamps: true })

const URL = mongoose.model("url", urlSchema);
module.exports = URL;