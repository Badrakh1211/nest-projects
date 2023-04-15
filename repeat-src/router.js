import { Router } from "express";
import { getList, postList, putList, deleteList, getUser, postUser, putUser, deleteUser, ownerList, getToken, verifyToken } from "./controller.js"

export const listRouter = Router();

listRouter.get("/list", getList)
listRouter.post("/list", postList)
listRouter.patch("/:id", putList)
listRouter.delete("/:id", deleteList)

listRouter.get("/user", verifyToken, getUser)
listRouter.post("/user", postUser)
listRouter.put("/user/:id", putUser)
listRouter.delete("/user/:id", deleteUser)
listRouter.patch("/user", ownerList)
listRouter.get("/token", getToken)