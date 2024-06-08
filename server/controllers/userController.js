import { updateAllUsers } from "../services/userService";

export const updateUserData = async (req, res) => {
  await updateAllUsers();
  res.send("Database updated.");
};
