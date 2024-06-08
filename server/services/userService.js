import axios from "axios";
import db from "../config/db.js";

export const fetchPlayerDataFromAPI = async (username) => {
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

export const updateDatabase = async (data) => {
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

export const updateAllUsers = async () => {
  const usernames = ["Aakarsh_IND", "The_Avalanche", "FlameCandy"]; // Replace with your 100 player usernames
  for (const username of usernames) {
    const data = await fetchPlayerDataFromAPI(username);
    if (data) {
      await updateDatabase(data);
    }
  }
};
