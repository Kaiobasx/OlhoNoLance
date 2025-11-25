import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Star, Trophy, Clock, Heart } from "lucide-react";
import { useNavigation } from "../hooks/useNavigation";

export function Collectibles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const { navigateTo } = useNavigation();

  const handleItemClick = (itemId: string) => {
    navigateTo('auction-details', { auctionId: itemId });
  };

  const categories = [
    { id: "all", name: "Todos", count: 45 },
    { id: "football", name: "Futebol", count: 18 },
    { id: "basketball", name: "Basquete", count: 12 },
    { id: "formula1", name: "Fórmula 1", count: 8 },
    { id: "tennis", name: "Tênis", count: 5 },
    { id: "olympics", name: "Olimpíadas", count: 2 }
  ];

  const collectibles = [
    {
      id: 1,
      title: "Camisa Brasil Copa 1970",
      description: "Camisa oficial da seleção brasileira na Copa do Mundo de 1970",
      category: "football",
      rarity: "Lendária",
      startingPrice: 25000,
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
      likes: 156,
      views: 2340,
      isNew: true
    },
    {
      id: 2,
      title: "Bola Adidas Copa 1978",
      description: "Bola oficial da Copa do Mundo Argentina 1978",
      category: "football",
      rarity: "Épica",
      startingPrice: 12000,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
      likes: 89,
      views: 1560,
      isNew: false
    },
    {
      id: 3,
      title: "Tênis Air Jordan 1985",
      description: "Par original dos primeiros tênis Michael Jordan",
      category: "basketball",
      rarity: "Lendária",
      startingPrice: 35000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      likes: 234,
      views: 3420,
      isNew: true
    },
    {
      id: 4,
      title: "Capacete McLaren Senna",
      description: "Réplica oficial do capacete de Ayrton Senna na McLaren",
      category: "formula1",
      rarity: "Épica",
      startingPrice: 18000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      likes: 178,
      views: 2890,
      isNew: false
    },
    {
      id: 5,
      title: "Raquete Wimbledon 2008",
      description: "Raquete usada por Roger Federer na final de Wimbledon 2008",
      category: "tennis",
      rarity: "Lendária",
      startingPrice: 22000,
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop",
      likes: 145,
      views: 2100,
      isNew: false
    },
    {
      id: 6,
      title: "Medalha Olímpica Tokyo 2020",
      description: "Medalha de ouro dos Jogos Olímpicos de Tokyo 2020",
      category: "olympics",
      rarity: "Lendária",
      startingPrice: 45000,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      likes: 312,
      views: 4560,
      isNew: true
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Lendária":
        return "bg-yellow-500 text-white";
      case "Épica":
        return "bg-purple-500 text-white";
      case "Rara":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const filteredCollectibles = collectibles.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da página */}
        <div className="mb-8">
          <h1 className="text-[#444444] mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>
            Itens Colecionáveis
          </h1>
          <p className="text-[#666666] mb-6">
            Descubra peças raras e únicas do mundo esportivo. Cada item tem sua história e raridade especial.
          </p>

          {/* Busca */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar itens colecionáveis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full max-w-md"
            />
          </div>
        </div>

        {/* Categorias */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex flex-col">
                <span>{category.name}</span>
                <span className="text-xs text-gray-500">({category.count})</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Featured item */}
        <div className="mb-8">
          <h2 className="text-[#444444] mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
            🔥 Item em Destaque
          </h2>
          <Card className="border-2 border-[#E53935] bg-gradient-to-r from-red-50 to-white">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop" 
                    alt="Item Destaque"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getRarityColor("Lendária")}>Lendária</Badge>
                    <Badge variant="outline">Novo</Badge>
                  </div>
                  <h3 className="text-[#444444] mb-2" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    Camisa Brasil Copa 1970 - Pelé
                  </h3>
                  <p className="text-[#666666] mb-4">
                    Camisa oficial autografada pelo Rei Pelé, usada na conquista da Copa do Mundo de 1970. 
                    Item único com certificado de autenticidade.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#666666]">Lance inicial:</p>
                      <p className="text-[#E53935]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                        R$ 25.000
                      </p>
                    </div>
                    <Button 
                      className="bg-[#E53935] text-white hover:bg-[#d32f2f]"
                      onClick={() => handleItemClick("1")}
                    >
                      <Trophy className="w-4 h-4 mr-2" />
                      Participar do Leilão
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCollectibles.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.isNew && (
                  <Badge className="absolute top-2 left-2 bg-[#E53935] text-white">
                    Novo
                  </Badge>
                )}
                <Badge 
                  className={`absolute top-2 right-2 ${getRarityColor(item.rarity)}`}
                >
                  {item.rarity}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="absolute bottom-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader>
                <CardTitle className="text-[#444444]">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-[#666666]">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.views} visualizações</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#666666] text-sm">Lance inicial:</p>
                    <p className="text-[#E53935]" style={{ fontWeight: '600' }}>
                      R$ {item.startingPrice.toLocaleString()}
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
                    onClick={() => handleItemClick(item.id.toString())}
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-[#444444] mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
            Tem um item esportivo raro?
          </h3>
          <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
            Transforme seu item em um leilão! Nossa equipe de especialistas irá avaliar 
            e ajudar você a obter o melhor valor pelo seu colecionável.
          </p>
          <Button className="bg-[#E53935] text-white hover:bg-[#d32f2f]">
            Cadastrar Item para Leilão
          </Button>
        </div>
      </div>
    </div>
  );
}