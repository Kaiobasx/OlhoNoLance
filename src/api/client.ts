import axios from "axios";

export const api = axios.create({
  // Tenta ler do .env, se não existir usa o localhost:8080 (padrão do Spring)
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});