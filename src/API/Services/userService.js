import axios from "axios";
//const url = "http://localhost:5000/api";

export const CreateUser = async (user) => {
  return await axios.post(`/api/users/adduser`, user);
};

export const LoginUser = async (user) => {
  return await axios.post(`/api/users/login`, user);
};
