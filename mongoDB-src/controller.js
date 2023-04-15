
const { response, request } = require('express');
const User = require('./model')
const Account = require('./account')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require("bcrypt")
// const salt = bcrypt.genSaltSync(1)
dotenv.config();    

exports.createUser = async (request, response, next) => {
    // if (
    //     !request.body?.firstName || 
    //     !request.body?.lastName || 
    //     !request.body?.email || 
    //     ) {
    //     response
    //     .status(400)
    //     .json({ message : `Firstname, lastname or email are required.` })
    // } 
    const { id, username } = request.params;

    const userdata = await Account.findOne({ username });

    // if (userdata)

    if (id == User.name) {
        response
            .status(400)
            .json({ message: `${request.params.id} name does not exist` })
    } else {
        const createUser = await User.create({ id: User.lenght + 1 - "", ...request.body });
        response
            .status(201)
            .json({ message: `New user is created`, data: createUser });
    }
}

exports.getUsers = async (request, response, next) => {
    const { limit } = request.body
    try {
        const user = await User.find().skip(0).limit(limit);
        response
            .status(200)
            .json({
                message: true,
                data: user,
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.getUser = async (request, response, next) => {
    const { id } = request.params;
    try {
        const users = await User.findById(id);
        response
            .status(200)
            .json({
                message: true,
                data: users,
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.login = async (request, response, next) => {
    const { username, password } = request.body;
    const user = await Account.findOne({ username: username });
    if (!user) {
      response.status(400).json("password did not match");
      return;
    }
    const result = bcrypt.compareSync(password, user.password);
  
    const token = jwt.sign({ username, password }, "password", { expiresIn: "1d" });
    response.status(200).json(user);
}

exports.updateUser = async (request, response, next) => {
    const { id } = request.params;

    try {
        const post = await User.findByIdAndUpdate(id, { ...request.body });
        response
            .status(200)
            .json({
                message: `User with ${request.params.id} id is updated`,
                data: post,
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.deleteUser = async (request, response, next) => {
    const { id } = request.params;

    try {
        const post = await User.findByIdAndDelete(id);
        response
            .status(200)
            .json({
                message: `User with ${request.params.id} id is deleted`,
                data: post,
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}
exports.signinUser = async (request, response) => {
    const { username, password } = request.body; 

    const hash = bcrypt.hashSync(password, 2)
    const account = await Account.create({ username: username, password: hash});
    response
        .status(200)
        .json({
            message: `New account created`,
            data: account,
        })
    
    const token = jwt.sign(
        { username, password },
        "password",
        { expiresIn: "1d" }
    )
    response.json(request.user)

}
exports.getAccount = async (request, response, next) => {
    try {
        const account = await Account.find();
        response
            .status(200)
            .json({
                message: true,
                data: account,
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}
// exports.Checker = async (request, response, next) => {
//     const { username } = request.body;

//         const checks = await Account.findOne({ username });
//         if (checks === null) {
//         response
//             .status(200)
//             .json("user is created")
//         } else {
//             return response.status(400).json("username is already created")
//         }
//     }
