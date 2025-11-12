// src//Register.tsx

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CadastroForms } from "./components/forms/CadastroForms";
import { Page } from "./hooks/useNavigation"; // Se você usar o mesmo hook

interface RegisterProps {
  onNavigate: (page: Page) => void;
}

export default function Register({ onNavigate }: RegisterProps) {
  // A página apenas renderiza o layout e o componente do formulário.
  // Toda a lógica do formulário fica dentro de <RegisterForm />.
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <CadastroForms onSuccess={() => onNavigate('home')} />
      </main>
      <Footer />
    </div>
  );
}