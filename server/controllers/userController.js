import { updateAllUsers } from "../services/userService.js";

export const updateUserData = async (req, res) => {
  await updateAllUsers();
  res.send("Database updated.");
};
