import cron from "node-cron";
import { updateUserRatings } from "../controllers/ratingController.js";

cron.schedule("* * * * *", async () => {
  console.log("Running scheduled task to update user data.");
  await updateUserRatings();
});
