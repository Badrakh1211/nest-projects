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

// const middleware = (req, res, next) => {
//     const { token } = req.headers
//     jwt.verify(token, 'password', (err, result) => {
//         if (err) res.send('hereglegc buruu')
//         else req.user = result, next()
//     })
// }

const {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    signinUser,
    getAccount,
    login,
    // Checker
} = require("./controller")
app.use(bodyParser.json()); 
    router
    // .use(middleware)
    .post("/", createUser)
    .get("/", getUsers)
    .get("/accounts", getAccount)
    .get("/:id", getUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)
    .post("/signin", signinUser)
    .post("/login", login)
// .get("/checker", Checker)

// .post("/login", loginUser) 
app.use(cors());
app.use("/", router);

app.listen(8000, () => {
    console.log("running")
})