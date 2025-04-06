import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export const getProducts = async () => {
  try {
    const response = await api.post("/users");
    return response.data;
  } catch (error) {
    console.error("Register failer:", error);
    throw error;
  }
};
