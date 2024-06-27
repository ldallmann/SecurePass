import express from "express";
import { getPermissions, getPermissionsUser, addPermission, updatePermission, deletePermission } from "../controllers/permissions.js";

const router = express.Router();

router.get("/permission/", getPermissions);

router.get("/permissionUser/:userID", getPermissionsUser);

router.post("/permission/", addPermission);

router.put("/permission/:userID", updatePermission);

router.delete("/permission/:userID", deletePermission);

export default router;