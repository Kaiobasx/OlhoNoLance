import { AuctionCard } from "./AuctionCard";

const auctionItems = [
  {
    id: "1",
    title: "Camisa Autografada do Pelé",
    description: "Camisa oficial do Santos autografada pelo Rei do Futebol",
    currentBid: 25000,
    timeRemaining: "2d 5h 30m",
    imageUrl: "https://images.unsplash.com/photo-1757365225211-1515ecc8a109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBqZXJzZXklMjBzcG9ydHMlMjBjb2xsZWN0aWJsZXxlbnwxfHx8fDE3NTc1OTczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Camisa de futebol autografada"
  },
  {
    id: "2",
    title: "Capacete NFL Vintage",
    description: "Capacete original dos anos 80 de time da NFL",
    currentBid: 8500,
    timeRemaining: "1d 12h 45m",
    imageUrl: "https://images.unsplash.com/photo-1508354486999-d33bd3cecc4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGhlbG1ldCUyMHNwb3J0cyUyMGdlYXJ8ZW58MXx8fHwxNzU3NTk3MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Capacete de futebol americano"
  },
  {
    id: "3",
    title: "Tênis Air Jordan Autografado",
    description: "Tênis usado em jogo com autógrafo do Michael Jordan",
    currentBid: 35000,
    timeRemaining: "3h 20m",
    imageUrl: "https://images.unsplash.com/photo-1700854088063-e558c33fe3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc2hvZXMlMjBzcG9ydHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU3NTk3MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Tênis de basquete"
  },
  {
    id: "4",
    title: "Luva de Baseball Vintage",
    description: "Luva histórica dos anos 50 em perfeito estado",
    currentBid: 4200,
    timeRemaining: "4d 8h 15m",
    imageUrl: "https://images.unsplash.com/photo-1517591333073-96680dc97639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGdsb3ZlJTIwdmludGFnZSUyMHNwb3J0c3xlbnwxfHx8fDE3NTc1OTczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Luva de baseball vintage"
  },
  {
    id: "5",
    title: "Foto Autografada Muhammad Ali",
    description: "Fotografia histórica autografada pelo maior boxeador",
    currentBid: 15000,
    timeRemaining: "6h 45m",
    imageUrl: "https://images.unsplash.com/photo-1660260091479-10f5555ef462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhdXRvZ3JhcGglMjBtZW1vcmFiaWxpYXxlbnwxfHx8fDE3NTc1OTczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Autógrafo esportivo"
  },
  {
    id: "6",
    title: "Bola Copa do Mundo 1970",
    description: "Bola oficial da Copa do Mundo do México, item raro",
    currentBid: 12000,
    timeRemaining: "2d 14h 10m",
    imageUrl: "https://images.unsplash.com/photo-1757365225211-1515ecc8a109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBqZXJzZXklMjBzcG9ydHMlMjBjb2xsZWN0aWJsZXxlbnwxfHx8fDE3NTc1OTczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Bola de futebol vintage"
  }
];

export function AuctionGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Leilões da Semana
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra itens únicos e históricos do mundo esportivo. Cada peça conta uma história.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctionItems.map((item) => (
            <AuctionCard image={""} timeLeft={""} key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}