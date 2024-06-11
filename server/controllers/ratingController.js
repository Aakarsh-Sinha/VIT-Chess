import {
  fetchPlayerDataFromAPI,
  savePlayerRating,
  getPlayerRatings,
} from "../services/userRatings.js";

import path from "path";
import { getDirname } from "../utils/pathHelpers.js";

const __dirname = getDirname(import.meta.url);
const csvFilePath = path.join(__dirname, "..", "data/Points.csv");

import fs from "fs";
import csvParser from "csv-parser";

export const updateUserRatings = async (req, res) => {
  try {
    const usernames = await readUsernamesFromCSV();

    for (const username of usernames) {
      const data = await fetchPlayerDataFromAPI(username);
      if (data) {
        await savePlayerRating(data);
      }
    }
    if (res) {
      res.send("Database updated.");
    }
  } catch (error) {
    console.error("Error updating user ratings:", error);
    res.status(500).send("Internal server error");
  }
};

const readUsernamesFromCSV = async () => {
  return new Promise((resolve, reject) => {
    const usernames = [];

    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on("data", (row) => {
        // Assuming the usernames are in a column named 'username'
        usernames.push(row.username);
      })
      .on("end", () => {
        resolve(usernames);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export const fetchUserRatings = async (req, res) => {
  try {
    const ratings = await getPlayerRatings();
    res.json(ratings);
  } catch (error) {
    console.error("Error fetching user ratings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
