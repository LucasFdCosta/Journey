import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:5152/api",
  baseURL: "https://localhost:7098/api",
})