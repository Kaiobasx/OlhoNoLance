import { HeroSection } from "../components/HeroSection";
import { AuctionGrid } from "../components/AuctionGrid";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { useNavigation } from "../hooks/useNavigation";

export function Home() {
  const { navigateTo } = useNavigation();

  const handleBidClick = (auctionId: string) => {
    navigateTo('auction-details', { auctionId });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AuctionGrid onBidClick={handleBidClick} />
      <FeaturedCarousel />
    </div>
  );
}