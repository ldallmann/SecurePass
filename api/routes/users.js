import express from "express";
import { getUsers, getUsersHome, getUserInfo, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/user/", getUsers);

router.get("/userHome/", getUsersHome);

router.get("/userInfo/:userID", getUserInfo);

router.post("/user/", addUser);

router.put("/user/:userID", updateUser);

router.delete("/user/:userID", deleteUser);

export default router;