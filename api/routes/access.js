import express from "express";
import { getAccess, getAccessTest, getAccessLog, addAccess, updateAccess, deleteAccess } from "../controllers/access.js";

const router = express.Router();

router.get("/access/", getAccess);

router.get("/accessTest/", getAccessTest);

router.get("/accessLog/:id", getAccessLog);

router.post("/access/", addAccess);

router.put("/access/:id", updateAccess);

router.delete("/access/:id", deleteAccess);

export default router;