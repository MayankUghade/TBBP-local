import axios from "axios";

const productionURL = "https://big-brother-backend.onrender.com/api";
const baseURL = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: productionURL,
  headers: {
    "Content-Type": "application/json",
  },
});
