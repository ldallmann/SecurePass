import express from "express";
import { getDoors, addDoor, updateDoor, deleteDoor } from "../controllers/door.js";

const router = express.Router();

router.get("/door/", getDoors);

router.post("/door/", addDoor);

router.put("/door/:id", updateDoor);

router.delete("/door/:id", deleteDoor);

export default router;