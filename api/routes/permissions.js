import express from "express";
import { getPermissions, getPermissionsUser, addPermission, updatePermission, deletePermission } from "../controllers/permissions.js";

const router = express.Router();

router.get("/permission/", getPermissions);

router.get("/permissionUser/:id", getPermissionsUser);

router.post("/permission/", addPermission);

router.put("/permission/:id", updatePermission);

router.delete("/permission/:id", deletePermission);

export default router;