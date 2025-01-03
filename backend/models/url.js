const mongoose = require("mongoose");

const urlPartSchema = new mongoose.Schema(
    {
        shortURL: {
            type: String,
            unique: true,
        },
        originalURL: {
            type: String,
        },
        clicks: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true },
);

const urlSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        urls: [urlPartSchema],
    },
    { timestamps: true },
);

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
