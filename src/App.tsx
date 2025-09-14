import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AuctionGrid } from "./components/AuctionGrid";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AuctionGrid />
      <FeaturedCarousel />
      <Footer />
    </div>
  );
}