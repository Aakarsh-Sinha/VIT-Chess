import express from "express";
import axios from "axios";
import pg from "pg";
import cron from "node-cron";

const app = express();
const PORT = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Vitchess",
  password: "Feb8#2004",
  port: "5432",
});

db.connect();

const fetchPlayerDataFromAPI = async (username) => {
  try {
    const response = await axios.get(
      `https://lichess.org/api/user/${username}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return null;
  }
};

const updateDatabase = async (data) => {
  if (!data) return;

  const query = `
      INSERT INTO players (id, username, perfs, created_at, seen_at) 
      VALUES ($1, $2, $3, $4, $5) 
      ON CONFLICT (username) 
      DO UPDATE SET 
        perfs = EXCLUDED.perfs,
        created_at = EXCLUDED.created_at,
        seen_at = EXCLUDED.seen_at`;

  try {
    await db.query(query, [
      data.id,
      data.username,
      data.perfs,
      new Date(data.createdAt),
      new Date(data.seenAt),
    ]);
    console.log("Database updated successfully.");
  } catch (error) {
    console.error("Error updating database:", error);
  }
};

cron.schedule("* * * * *", async () => {
  console.log("Running scheduled task to update user data.");
  await updateAllUsers();
});

// Endpoint to trigger data fetch and update
app.get("/update-data", async (req, res) => {
  const usernames = ["Aakarsh_IND", "The_Avalanche", "FlameCandy"]; // Replace with your 100 player usernames
  for (const username of usernames) {
    const data = await fetchPlayerDataFromAPI(username);
    if (data) {
      await updateDatabase(data);
    }
  }
  res.send("Database updated.");
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
