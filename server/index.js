import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import "./cron/scheduledTasks.js"; // Importing the cron tasks

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use user routes
app.use("/api", userRoutes);

// Start the server
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
