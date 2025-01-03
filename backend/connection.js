const mongoose = require("mongoose");

async function connection() {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((er) => {
            console.log(er);
        });
}

module.exports = connection;
