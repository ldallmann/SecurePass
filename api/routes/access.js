import express from "express";
import { getAccess, getAccessTest, getAccessLog, addAccess, updateAccess, deleteAccess } from "../controllers/access.js";

const router = express.Router();

router.get("/access/", getAccess);

router.get("/accessTest/", getAccessTest);

router.get("/accessLog/:userID", getAccessLog);

router.post("/access/", addAccess);

router.put("/access/:userID", updateAccess);

router.delete("/access/:userID", deleteAccess);

export default router;