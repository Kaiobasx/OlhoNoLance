import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useNavigation } from "./hooks/useNavigation";
import { ToasterWrapper } from "./components/ToasterWrapper";

// Pages
import { Home } from "./pages/Home";
import { ActiveAuctions } from "./pages/ActiveAuctions";
import { Collectibles } from "./pages/Collectibles";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AuctionDetails } from "./pages/AuctionDetails";

export default function App() {
  const { currentPage, params, navigateTo } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'active-auctions':
        return <ActiveAuctions />;
      case 'collectibles':
        return <Collectibles />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login onNavigate={navigateTo} />;
      case 'register':
        return <Register onNavigate={navigateTo} />;
      case 'auction-details':
        return (
          <AuctionDetails
            auctionId={params?.auctionId || '1'}
            onNavigate={(page: any) => navigateTo(page)}
          />
        ); default:
        return <Home />;
    }
  };

  // Para login, register e auction-details, não mostrar header e footer
  const showHeaderFooter = currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'auction-details';

  return (
    <div className="min-h-screen bg-white">
      {showHeaderFooter && <Header currentPage={currentPage} onNavigate={navigateTo} />}
      {renderPage()}
      {showHeaderFooter && <Footer />}
      <ToasterWrapper />
    </div>
  );
}