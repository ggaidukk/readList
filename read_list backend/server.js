//const or import
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const db = require("./database/db.js");
const controller = require("./controller/controller.js");
const router = express.Router();


//create node js server
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", controller);

app.listen(port, (err) => {console.log(`Server is running on port ${port}`)});

