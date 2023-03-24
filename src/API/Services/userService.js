import axios from "axios";
import { Apiurl } from "..";
//const url = "http://localhost:5000/api";

export const CreateUser = async (user) => {
  return await axios.post(`${Apiurl}/users/adduser`, user);
};

export const GetUser = async (id) => {
  return await axios.get(`${Apiurl}/users/${id}`);
};

export const LoginUser = async (user) => {
  return await axios.post(`${Apiurl}/users/login`, user);
};
