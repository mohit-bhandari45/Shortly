const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const User=mongoose.model("user",userSchema);
module.exports=User;