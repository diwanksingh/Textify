import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_STATUS === "devlopment" 
    ? "http://localhost:5001/api" 
    : `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});
