import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#E53935] mb-4">
              Olho no Lance!
            </h3>
            <p className="text-gray-300 mb-4">
              O maior site de leilões de itens esportivos do Brasil. 
              Conectamos colecionadores com peças únicas da história do esporte.
            </p>
            <p className="text-gray-400 text-sm">
              Transformando paixão em investimento desde 2024.
            </p>
          </div>

          {/* Column 2 - Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Leilões Futuros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Minha Conta
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Histórico de Lances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Vendedor
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Help & Support */}
          <div>
            <h4 className="font-semibold mb-4">Ajuda e Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Entre em Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E53935] transition-colors">
                  Autenticidade
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <p className="text-gray-300 mb-4">
              Siga-nos para ficar por dentro dos leilões mais exclusivos!
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-[#E53935] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-[#E53935] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-[#E53935] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Olho no Lance!. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}