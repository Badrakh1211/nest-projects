import express from 'express'
import { Router } from "express";
import { listRouter } from './router.js';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import  cors  from 'cors';
import bodyParser from 'body-parser';



const CONNECTION_STRING =
    "mongodb+srv://badrakh:badrakh20081211@cluster0.nk0hxud.mongodb.net/to-do?retryWrites=true&w=majority";

mongoose
    .connect(CONNECTION_STRING)
    .then(() => {
        console.log("amjilttai holbogdloo")
    })
    .catch((error) => console.log(error))

const PORT = 8000;
const app = express()
const router = Router()
dotenv.config();

app.use(cors())
app.use(express.json())
app.use(listRouter)
app.use(bodyParser.json()); 

app.listen(PORT, () => {
    console.log("server starting at " + PORT)
})
