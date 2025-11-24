// src//Register.tsx

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CadastroForms } from "./components/forms/CadastroForms";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  // A página apenas renderiza o layout e o componente do formulário.
  // Toda a lógica do formulário fica dentro de <RegisterForm />.
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <CadastroForms onSuccess={() => navigate('/')} />
      </main>
      <Footer />
    </div>
  );
}