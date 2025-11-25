import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../components/ui/alert-dialog';
import { Clock, Heart, Share2, ChevronLeft, Award, Shield, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface AuctionDetailsProps {
  auctionId: string;
  onNavigate: (page: string) => void;
}

// Mock data - em produção viria do backend
const mockAuction = {
  id: '1',
  title: 'Camisa Oficial Pelé - Santos FC 1970',
  description: 'Camisa autografada usada pelo Rei Pelé durante a temporada histórica de 1970. Peça raríssima de colecionador.',
  currentBid: 15000,
  minIncrement: 500,
  timeRemaining: '2 dias, 5 horas',
  category: 'Camisas Históricas',
  condition: 'Excelente',
  authenticity: 'Certificado de autenticidade incluído',
  seller: 'Colecionador Premium',
  totalBids: 23,
  watchers: 156,
  images: [
    'https://images.unsplash.com/photo-1671810458671-759db56dc405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBqZXJzZXklMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MTc3ODk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1698277329466-2f14b1b5cb89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW1vcmFiaWxpYSUyMGRldGFpbHN8ZW58MXx8fHwxNzYxNzc4OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1705593349153-0e21c38c8ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBkZXRhaWx8ZW58MXx8fHwxNzYxNzc4OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  bidHistory: [
    { id: '1', user: 'Usuário ***789', amount: 15000, time: 'há 15 minutos' },
    { id: '2', user: 'Usuário ***456', amount: 14500, time: 'há 1 hora' },
    { id: '3', user: 'Usuário ***123', amount: 14000, time: 'há 2 horas' },
    { id: '4', user: 'Usuário ***789', amount: 13500, time: 'há 3 horas' },
    { id: '5', user: 'Usuário ***234', amount: 13000, time: 'há 5 horas' },
  ],
  specifications: {
    'Ano': '1970',
    'Time': 'Santos FC',
    'Tamanho': 'M',
    'Material': 'Algodão',
    'Estado de Conservação': 'Excelente',
    'Procedência': 'Documentada',
    'Autógrafo': 'Sim, com certificado',
  }
};

export function AuctionDetails({ auctionId, onNavigate }: AuctionDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [bidAmount, setBidAmount] = useState(mockAuction.currentBid + mockAuction.minIncrement);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePlaceBid = () => {
    if (bidAmount < mockAuction.currentBid + mockAuction.minIncrement) {
      toast.error(`O lance mínimo é R$ ${(mockAuction.currentBid + mockAuction.minIncrement).toLocaleString('pt-BR')}`);
      return;
    }
    setShowConfirmDialog(true);
  };

  const confirmBid = () => {
    // Aqui seria feita a chamada ao backend
    toast.success('Lance registrado com sucesso!');
    setShowConfirmDialog(false);
    // Simular atualização do lance atual
    mockAuction.currentBid = bidAmount;
    mockAuction.totalBids += 1;
  };

  const handleQuickBid = (increment: number) => {
    setBidAmount(mockAuction.currentBid + increment);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-[#E53935] transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Voltar aos Leilões
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="aspect-square">
                <ImageWithFallback
                  src={mockAuction.images[selectedImage]}
                  alt={mockAuction.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {mockAuction.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-[#E53935] ring-2 ring-[#E53935] ring-opacity-50' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${mockAuction.title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details & Bidding */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              {/* Title & Category */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">{mockAuction.category}</p>
                <h1 className="text-2xl sm:text-3xl mb-4">{mockAuction.title}</h1>
              </div>

              {/* Current Bid */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-sm text-gray-500 mb-2">Lance Atual</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl text-[#E53935]">
                    R$ {mockAuction.currentBid.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    {mockAuction.totalBids} lances
                  </span>
                  <span>•</span>
                  <span>{mockAuction.watchers} observando</span>
                </div>
              </div>

              {/* Time Remaining */}
              <div className="mb-6 pb-6 border-b">
                <div className="flex items-center text-gray-700 mb-2">
                  <Clock className="h-5 w-5 mr-2 text-[#E53935]" />
                  <span>Tempo Restante</span>
                </div>
                <p className="text-xl ml-7">{mockAuction.timeRemaining}</p>
              </div>

              {/* Bidding Section */}
              <div className="mb-6">
                <label className="block text-sm mb-2">Seu Lance (mínimo: R$ {(mockAuction.currentBid + mockAuction.minIncrement).toLocaleString('pt-BR')})</label>
                <div className="flex gap-2 mb-3">
                  <div className="flex-1">
                    <Input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(Number(e.target.value))}
                      className="w-full"
                      min={mockAuction.currentBid + mockAuction.minIncrement}
                      step={mockAuction.minIncrement}
                    />
                  </div>
                  <Button
                    onClick={handlePlaceBid}
                    className="bg-[#E53935] text-white hover:bg-[#d32f2f] px-8"
                  >
                    Dar Lance
                  </Button>
                </div>

                {/* Quick Bid Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handleQuickBid(500)}
                    className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
                  >
                    +R$ 500
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleQuickBid(1000)}
                    className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
                  >
                    +R$ 1.000
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleQuickBid(2000)}
                    className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
                  >
                    +R$ 2.000
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex-1 ${isFavorite ? 'border-[#E53935] text-[#E53935]' : ''}`}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Favoritado' : 'Favoritar'}
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-[#E53935] mt-0.5" />
                  <div>
                    <p className="text-sm">Compra Segura</p>
                    <p className="text-xs text-gray-500">Proteção ao comprador</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-[#E53935] mt-0.5" />
                  <div>
                    <p className="text-sm">Autenticidade</p>
                    <p className="text-xs text-gray-500">Certificado incluído</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-md">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger 
                value="description" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E53935] data-[state=active]:bg-transparent px-6 py-4"
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger 
                value="specifications" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E53935] data-[state=active]:bg-transparent px-6 py-4"
              >
                Especificações
              </TabsTrigger>
              <TabsTrigger 
                value="bidhistory" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E53935] data-[state=active]:bg-transparent px-6 py-4"
              >
                Histórico de Lances
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{mockAuction.description}</p>
                <h3 className="text-lg mb-3">Detalhes do Item</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Condição:</strong> {mockAuction.condition}</li>
                  <li><strong>Autenticidade:</strong> {mockAuction.authenticity}</li>
                  <li><strong>Vendedor:</strong> {mockAuction.seller}</li>
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Importante:</strong> Este é um item de colecionador autêntico. Certificado de autenticidade será fornecido após a conclusão do leilão.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(mockAuction.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b pb-3">
                    <span className="text-gray-600 w-1/2">{key}:</span>
                    <span className="w-1/2">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bidhistory" className="p-6">
              <div className="space-y-3">
                {mockAuction.bidHistory.map((bid) => (
                  <div key={bid.id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div>
                      <p className="text-sm text-gray-600">{bid.user}</p>
                      <p className="text-xs text-gray-400">{bid.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg text-[#E53935]">
                        R$ {bid.amount.toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Confirm Bid Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Lance</AlertDialogTitle>
            <AlertDialogDescription>
              Você está prestes a dar um lance de <strong className="text-[#E53935]">R$ {bidAmount.toLocaleString('pt-BR')}</strong> no item:
              <br /><br />
              <strong>{mockAuction.title}</strong>
              <br /><br />
              Este lance é vinculativo. Deseja confirmar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmBid}
              className="bg-[#E53935] hover:bg-[#d32f2f]"
            >
              Confirmar Lance
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
