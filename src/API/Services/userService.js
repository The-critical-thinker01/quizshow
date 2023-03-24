import axios from "axios";
//const url = "http://localhost:5000/api";

export const CreateUser = async (user) => {
  return await axios.post(`http://localhost:5000/api/users/adduser`, user);
};

export const GetUser = async (id) => {
  return await axios.get(`http://localhost:5000/api/users/${id}`);
};

export const LoginUser = async (user) => {
  return await axios.post(`http://localhost:5000/api/users/login`, user);
};
