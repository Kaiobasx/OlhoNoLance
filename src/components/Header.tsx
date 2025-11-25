import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Page } from "../hooks/useNavigation";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-xl font-bold text-[#E53935] cursor-pointer"
              style={{ fontSize: '1.5rem', fontWeight: '700' }}
              onClick={() => onNavigate('home')}
            >
              Olho no Lance!
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate('active-auctions')}
              className={`px-3 py-2 transition-colors ${
                currentPage === 'active-auctions' 
                  ? 'text-[#E53935]' 
                  : 'text-[#444444] hover:text-[#E53935]'
              }`}
            >
              Leilões Ativos
            </button>
            <button 
              onClick={() => onNavigate('collectibles')}
              className={`px-3 py-2 transition-colors ${
                currentPage === 'collectibles' 
                  ? 'text-[#E53935]' 
                  : 'text-[#444444] hover:text-[#E53935]'
              }`}
            >
              Itens Colecionáveis
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 transition-colors ${
                currentPage === 'about' 
                  ? 'text-[#E53935]' 
                  : 'text-[#444444] hover:text-[#E53935]'
              }`}
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`px-3 py-2 transition-colors ${
                currentPage === 'contact' 
                  ? 'text-[#E53935]' 
                  : 'text-[#444444] hover:text-[#E53935]'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
              onClick={() => onNavigate('login')}
            >
              Entrar
            </Button>
            <Button 
              className="bg-[#E53935] text-white hover:bg-[#d32f2f]"
              onClick={() => onNavigate('register')}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}