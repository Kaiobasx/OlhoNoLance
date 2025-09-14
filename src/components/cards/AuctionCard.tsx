import { Button } from "../ui/button";
import { ImageWithFallback } from "../herobackground/ImageWithFallback";
import { Clock } from "lucide-react";

interface AuctionCardProps {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  timeRemaining: string;
  imageUrl: string;
  imageAlt: string;
}

export function AuctionCard({ 
  title, 
  description, 
  currentBid, 
  timeRemaining, 
  imageUrl, 
  imageAlt 
}: AuctionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Current Bid */}
        <div className="mb-3">
          <p className="text-sm text-gray-500 mb-1">Lance Atual</p>
          <p className="text-2xl font-bold text-[#E53935]">
            R$ {currentBid.toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Time Remaining */}
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{timeRemaining}</span>
        </div>

        {/* Bid Button */}
        <Button 
          className="w-full bg-[#E53935] text-white hover:bg-[#d32f2f]"
        >
          Dar Lance
        </Button>
      </div>
    </div>
  );
}