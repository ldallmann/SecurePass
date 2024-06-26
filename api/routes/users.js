import express from "express";
import { getUsers, getUsersHome, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/user/", getUsers);

router.get("/userHome/", getUsersHome);

router.post("/user/", addUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;