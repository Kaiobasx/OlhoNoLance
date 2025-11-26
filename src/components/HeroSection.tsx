import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://sindilegis.org.br/wp-content/uploads/2021/07/esportes.jpg"
          alt="Arena esportiva"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          className="text-white mb-6"
          style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1.2' }}
        >
          Sua Paixão Esportiva, Seu Lance Vencedor
        </h1>

        {/* Subtitle */}
        <p 
          className="text-white mb-8 max-w-2xl mx-auto"
          style={{ fontSize: '1.25rem', fontWeight: '400' }}
        >
          Encontre itens únicos, dê seu lance e seja o dono de uma peça da história do esporte.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex">
            <Input
              type="text"
              placeholder="Buscar por camisas, autógrafos, bolas..."
              className="flex-1 h-14 bg-white border-0 pr-16 text-lg"
            />
            <Button 
              size="lg" 
              className="absolute right-2 top-2 bg-[#E53935] text-white hover:bg-[#d32f2f] h-10"
            >
              <Search className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Buscar</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}