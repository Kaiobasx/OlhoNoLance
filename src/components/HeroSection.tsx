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
          src="https://images.unsplash.com/photo-1561917488-91aa9bc0a3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwYXJlbmElMjBjcm93ZHxlbnwxfHx8fDE3NTc1OTczMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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