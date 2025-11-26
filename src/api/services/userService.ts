import { api } from "../client";

// Define a interface igual ao teu Model 'Usuario' no Java
export interface User {
  id?: number;
  nome: string;
  email: string;
  senha?: string; // Cuidado ao enviar senhas, usa HTTPS em produção
  tipoUsuario?: "COMPRADOR" | "VENDEDOR" | "ADMIN"; // Exemplo de Enum
}

export const UserService = {
  // POST /usuarios (ou o endpoint que definiste no Controller)
  register: async (userData: User) => {
    const response = await api.post("/usuarios", userData);
    return response.data;
  },

  // POST /login (se tiveres endpoint de login)
  login: async (credentials: { email: string; senha: string }) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },

  // GET /usuarios/{id}
  getById: async (id: number) => {
    const response = await api.get<User>(`/usuarios/${id}`);
    return response.data;
  }
};