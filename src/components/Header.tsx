import Cadastro from "../pages/Cadastro";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <h1
                className="text-xl font-bold text-[#E53935]"
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                Olho no Lance!
              </h1>
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-[#444444] hover:text-[#E53935] px-3 py-2 transition-colors"
            >
              Leilões Ativos
            </a>
            <a 
              href="#" 
              className="text-[#444444] hover:text-[#E53935] px-3 py-2 transition-colors"
            >
              Itens Colecionáveis
            </a>
            <a 
              href="#" 
              className="text-[#444444] hover:text-[#E53935] px-3 py-2 transition-colors"
            >
              Sobre Nós
            </a>
            <a 
              href="#" 
              className="text-[#444444] hover:text-[#E53935] px-3 py-2 transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
            >
              Entrar
            </Button>
              <Link to = "/Cadastro">
                <Button
                  className="bg-[#E53935] text-white hover:bg-[#d32f2f]"
                >
                  Cadastrar
                </Button>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}