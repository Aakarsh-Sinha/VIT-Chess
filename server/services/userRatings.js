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
    VALUES ($1, $2, $3, $4) `;

  try {
    await db.query(query, [
      data.id,
      data.username,
      data.perfs.blitz.rating, // Assuming we are storing the Blitz rating
      data.perfs.bullet.rating,
    ]);
    console.log("Database updated successfully.");
  } catch (error) {
    console.error("Error updating database:", error);
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
