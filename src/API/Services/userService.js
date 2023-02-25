import axios from "axios";

export const CrateUser = async (user) => {
  return await axios.post("/api/users/adduser", user);
};
