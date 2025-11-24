import { HeroSection } from "./components/HeroSection";
import { AuctionGrid } from "./components/cards/AuctionGrid";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { useNavigation } from "./hooks/useNavigation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export  default function Home() {
  const { navigateTo } = useNavigation();

  const handleBidClick = (auctionId: string) => {
    navigateTo('auction-details', { auctionId });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <HeroSection />
      <AuctionGrid onBidClick={handleBidClick} />
      <FeaturedCarousel />
      <Footer/>
    </div>
  );
}