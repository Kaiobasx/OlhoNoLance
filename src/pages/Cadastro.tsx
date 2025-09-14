import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CadastroForm } from '../components/forms/CadastroForms'; // Importe o formulário

export default function Cadastro() {
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h2>
          <CadastroForm /> {/* Use o componente aqui */}
        </div>
      </main>
      <Footer />
    </div>
  );
}