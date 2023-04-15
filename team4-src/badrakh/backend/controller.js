
const { response, request } = require('express');
const News = require('./news-model.js')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require("bcrypt")
// const salt = bcrypt.genSaltSync(1)
dotenv.config();

exports.createNews = async (request, response, next) => {
    const { post, username, desc, date } = request.body;
    try {
        const newsdata = await News.create({ ...request.body })
        response
            .status(200)
            .json({
                message: true,
                data: newsdata
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.getNews = async (request, response, next) => {
    let { pagination } = request.query;
    try {
        const news = await News.find().limit(pagination)
        response
            .status(200)
            .json({
                message: true,
                data: news
            })
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.deleteNews = async (request, response, next) => {
    const { id } = request.params;
    try {
        const deletenews = await News.findByIdAndDelete(id)
        response
            .status(200)
            .json({
                message: `user with ${id} is deleted`,
                data: deletenews
            })
    } catch (error) {
        return response.status(400).json({ message: "failed to delete user" })
    }
}