import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await API.post("/api/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};