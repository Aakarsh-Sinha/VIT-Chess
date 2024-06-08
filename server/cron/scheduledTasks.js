import cron from "node-cron";
import { updateAllUsers } from "../services/userService.js";

cron.schedule("0 * * * *", async () => {
  console.log("Running scheduled task to update user data.");
  await updateAllUsers();
});
