import fs from "fs";
import csv from "csv-parser";
import db from "../config/db.js";

export const updateRatingsFromCSV = async (filePath) => {
  const updates = [];

  const readStream = fs
    .createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      updates.push(updateDatabase(row));
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });

  await Promise.all(updates);
};

const updateDatabase = async (data) => {
  const query = `
    UPDATE ratings 
    SET average_points = $1, total_points = $2, blitz_points = $3, bullet_points = $4
    WHERE username = $5
  `;

  try {
    await db.query(query, [
      data.average_points,
      data.total_points,
      data.blitz_points,
      data.bullet_points,
      data.username,
    ]);
    console.log(`Updated ratings for ${data.username}`);
  } catch (error) {
    console.error(`Error updating database for ${data.username}:`, error);
  }
};
