//connect to mongodb

const mongoose = require("mongoose");
const db = mongoose.connect(
    "mongodb://localhost:27017/readList",
).then(() => console.log("Connected to MongoDB")).catch((err) => console.error(err));

module.exports = db;