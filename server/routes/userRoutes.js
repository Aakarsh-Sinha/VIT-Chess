import express from "express";
import { updateUserData } from "../controllers/userController.js";

const router = express.Router();

router.get("/update-data", updateUserData);

export default router;
