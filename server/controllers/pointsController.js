import { updateRatingsFromCSV } from "../services/csvService.js";
import path from "path";
import { getDirname } from "../utils/pathHelpers.js";

const __dirname = getDirname(import.meta.url);
const csvFilePath = path.join(__dirname, "..", "data/Points.csv");

export const updateRatings = async (req, res) => {
  try {
    await updateRatingsFromCSV(csvFilePath);
    res.status(200).send("Ratings updated successfully from CSV");
  } catch (error) {
    console.error("Error updating ratings from CSV:", error);
    res.status(500).send("Internal Server Error");
  }
};
