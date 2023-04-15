import { Task, User } from "./model.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import  jwt  from "jsonwebtoken"
dotenv.config()

export const getList = async (req, res) => {
    try{
    const list = await Task.find()
    res
    .status(200)
    .json({message: "ok", data: list})
    } catch (error) {
        return res.status(400).json({message: error, data: null})
    }
}

 export const postList = async (req, res) => {
    const { title, detail, isDone } = req.body;
    try {
        const push = await Task.create({ title: title, detail: detail, isDone: isDone })
        res.status(200).json({
            message: "new title created",
            data: title,
        })
    } catch (error) {
        return res.status(400).json({message: "failed"})
    }
}

export const ownerList = async (req, res) => {
    const { id } = req.body.taskid;
    try {
        const assign = Task.findByIdAndUpdate(id, {}).populate("assign")
        res.status(200)
        .json({message: "successful"})
    }catch(error) {

    }
} 

export const putList = async (req, res) => {
    const { id } = req.params;
    try {
        const update = await Task.findByIdAndUpdate(id, {...req.body})
        res.status(200)
        .json({message: `user with ${id} is updated`, data: update})
    } catch(error) {
        res.status(400)
        .json({message: "user update failed" })
    }
}

export const deleteList = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Task.findByIdAndDelete(id, {...req.body})
        res.status(200)
        .json({message: `user with ${id} is deleted`, data: deleted})
    }catch(error){
        res.status(400)
        .json({message: "failed", data: error})
    }
}



export const getUser = async (req, res) => {
    try{
    const list = await User.find({})
    res
    .status(200)
    .json({data: list})
    } catch (error) {
        return res.status(400).json({message: error, data: null})
    }
}

export const postUser = async (req, res) => {
    const { firstname, phonenumber, email, password } = req.body;
        const checker = await User.findOne(firstname)
        if (checker == null) {
            const hash = bcrypt.hashSync(password, 2)
            const push = await User.create({ firstname: firstname, phonenumber: phonenumber, email: email, password: hash})
            res.status(200).json({
                message: "new User created",
                data: push,
            })
        } else {
        res.status(400).json({
            message: "failed",
            data: push,
        })
    }
}

export const putUser = async (req, res) => {
    const { id } = req.params;
    try {
        const update = await User.findByIdAndUpdate(id, {...req.body})
        res.status(200)
        .json({message: `user with ${id} is updated`, data: update})
    } catch(error) {
        res.status(400)
        .json({message: "user update failed" })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await User.findByIdAndDelete(id, {...req.body})
        const info = await User.find({})
        res.status(200)
        .json({message: `user with ${id} is deleted`, data: info})
    }catch(error){
        res.status(400)
        .json({message: "failed", data: error})
    }
}
export const getToken = async (req, res) => {
    const token = jwt.sign(
        {email: "badrakh1211@gmail.com", id: "Student"},
        process.env.JWT_SECRET || "abc",
        {expiresIn: "1d"}
    )
    res.send(token)
}

export const verifyToken = async (req, res, next) => {
    const token = req.headers.token;
    // const all = User.find({})
    if(!token) {res.send("no token")}
    console.log(req.headers)
    jwt.verify(token, "hello", (err, result) => {
        if(err) { 
            res.send(err.message) 
        } else {
        next()
        }
    })
}   