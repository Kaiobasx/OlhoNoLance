import { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function CadastroForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aqui é onde você vai integrar com o banco de dados
    // Por enquanto, vamos apenas exibir os valores no console
    console.log('Dados do formulário:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">E-mail</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seuemail@exemplo.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Senha</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Criar Conta
      </Button>
    </form>
  );
}