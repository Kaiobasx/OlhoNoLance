import axios from "axios";

const API_URL = "http://localhost:8080/api/usuarios"; // sua rota do backend

export const UserService = {
  register: async (data: any) => {
    return axios.post(`${API_URL}/register`, data);
  },

  login: async (data: any) => {
    return axios.post(`${API_URL}/login`, data);
  },
};
