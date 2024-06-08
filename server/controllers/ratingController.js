import {
  fetchPlayerDataFromAPI,
  savePlayerRating,
  getPlayerRatings,
} from "../services/userRatings.js";

export const updateUserRatings = async (req, res) => {
  const usernames = ["Aakarsh_IND", "The_Avalanche", "FlameCandy"];
  for (const username of usernames) {
    const data = await fetchPlayerDataFromAPI(username);
    if (data) {
      await savePlayerRating(data);
    }
  }
  res.send("Database updated.");
};

export const fetchUserRatings = async (req, res) => {
  const ratings = await getPlayerRatings();
  res.json(ratings);
};
