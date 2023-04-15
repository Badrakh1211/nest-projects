const connect = require("./node");
connect();

const { response } = require("express");
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()
const cors = require("cors")
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config();

const {
    createNews,
    getNews,
    deleteNews
} = require("./controller")
app.use(bodyParser.json())
router

.post("/", createNews)
.get("/", getNews)
.delete("/:id", deleteNews)

app.use(cors())
app.use("/", router);

app.listen(8000, () => {
    console.log("running")
})