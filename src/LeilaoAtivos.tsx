import { useState } from "react";
import { AuctionCard } from "./components/cards/AuctionCard";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Search, Filter } from "lucide-react";

export default function LeilaoAtivos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("ending-soon");

  // Mock data para leilões ativos
  const auctions = [
    {
      id: 1,
      title: "Camisa do Pelé - Santos 1970",
      description: "Camisa original usada pelo Rei do Futebol",
      currentBid: 15000,
      timeLeft: "2h 30m",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Chuteira Messi Barcelona",
      description: "Chuteira autografada pelo craque argentino",
      currentBid: 8500,
      timeLeft: "5h 45m",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Bola Copa do Mundo 2018",
      description: "Bola oficial da final da Copa do Mundo",
      currentBid: 12000,
      timeLeft: "1h 15m",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Jersey Michael Jordan",
      description: "Camisa dos Chicago Bulls temporada 1996",
      currentBid: 25000,
      timeLeft: "3h 20m",
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Capacete Ayrton Senna",
      description: "Réplica oficial do capacete do piloto",
      currentBid: 18000,
      timeLeft: "4h 10m",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Raquete Rafael Nadal",
      description: "Raquete usada em Roland Garros 2019",
      currentBid: 9500,
      timeLeft: "6h 30m",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop"
    }
  ];

  const filteredAuctions = auctions.filter(auction =>
    auction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da página */}
        <div className="mb-8">
          <h1 className="text-[#444444] mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>
            Leilões Ativos
          </h1>
          <p className="text-[#666666] mb-6">
            Encontre os melhores itens esportivos em leilão. Faça seu lance e leve para casa peças únicas!
          </p>

          {/* Filtros e busca */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar por item ou categoria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ending-soon">Terminando em breve</SelectItem>
                  <SelectItem value="newest">Mais recentes</SelectItem>
                  <SelectItem value="highest-bid">Maior lance</SelectItem>
                  <SelectItem value="lowest-bid">Menor lance</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-[#E53935]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
              {filteredAuctions.length}
            </div>
            <p className="text-[#666666]">Leilões Ativos</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-[#E53935]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
              1,234
            </div>
            <p className="text-[#666666]">Participantes</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-[#E53935]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
              R$ 150k
            </div>
            <p className="text-[#666666]">Total em Lances</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-[#E53935]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
              98%
            </div>
            <p className="text-[#666666]">Taxa de Sucesso</p>
          </div>
        </div>

        {/* Grid de leilões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAuctions.map((auction) => (
            <AuctionCard
                  key={auction.id}
                  title={auction.title}
                  description={auction.description}
                  currentBid={auction.currentBid}
                  timeLeft={auction.timeLeft}
                  image={auction.image} id={""} timeRemaining={""} imageUrl={""} imageAlt={""}            />
          ))}
        </div>

        {/* Carregamento/Paginação */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
          >
            Carregar Mais Leilões
          </Button>
        </div>
      </div>
    </div>
  );
}