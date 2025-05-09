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

export const savePlayerRating = async (data) => {
  if (!data) return;

  const query = `
    INSERT INTO ratings (id, username, blitz_rating, bullet_rating) 
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (id) 
    DO UPDATE SET 
    blitz_rating = EXCLUDED.blitz_rating,
    bullet_rating = EXCLUDED.bullet_rating; `;

  try {
    // Check if blitz and bullet ratings are available
    const blitzRating = data.perfs.blitz.rating || null;
    const bulletRating = data.perfs.bullet.rating || null;

    await db.query(query, [data.id, data.username, blitzRating, bulletRating]);
    console.log("Database updated successfully.");
  } catch (error) {
    console.error(
      `Error updating database for username ${data.username}: ${error.message}`
    );
  }
};

export const getPlayerRatings = async () => {
  try {
    const result = await db.query("SELECT * FROM ratings");
    return result.rows;
  } catch (error) {
    console.error("Error fetching data from database:", error);
    return [];
  }
};
