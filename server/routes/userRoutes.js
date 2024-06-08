import express from "express";
import { updateUserData } from "../controllers/userController.js";
import {
  updateUserRatings,
  fetchUserRatings,
} from "../controllers/ratingController.js";

const router = express.Router();

router.get("/update-data", updateUserData);
router.get("/update-ratings", updateUserRatings);
router.get("/ratings", fetchUserRatings);

export default router;
