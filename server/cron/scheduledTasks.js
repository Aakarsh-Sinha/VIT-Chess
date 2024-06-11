import cron from "node-cron";
import { updateUserRatings } from "../controllers/ratingController.js";
import path from "path";
import { getDirname } from "../utils/pathHelpers.js";
import { updateRatingsFromCSV } from "../services/userPoints.js";

cron.schedule("0 * * * *", async () => {
  console.log("Running scheduled task to update user data.");
  await updateUserRatings();
});

const __dirname = getDirname(import.meta.url);
const csvFilePath = path.join(__dirname, "..", "data/Points.csv");

cron.schedule("0 0 * * *", async () => {
  console.log("Running scheduled task to update points from CSV");
  try {
    await updateRatingsFromCSV(csvFilePath);
    console.log("Points updated successfully from CSV");
  } catch (error) {
    console.error("Error updating ratings from CSV:", error);
  }
});
