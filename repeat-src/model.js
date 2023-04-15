import mongoose, { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    firstname: String,
    phonenumber: Number,
    email: String,
    password: String
})

export const User = model("User", UserSchema)

const TaskSchema = new Schema({
    title: String,
    detail: Array,
    isDone: Boolean,
    assign: { type: String, ref: "User" } 
})

export const Task = model("list", TaskSchema)