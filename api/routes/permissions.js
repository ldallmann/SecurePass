import express from "express";
import { getPermissions, getPermissionsUser } from "../controllers/permissions.js";

const router = express.Router();

router.get("/permission/", getPermissions);

router.get("/permissionUser/:userID", getPermissionsUser);

export default router;