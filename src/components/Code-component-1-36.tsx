import { Button } from "./ui/button";
import { ImageWithFallback } from "./herobackground/ImageWithFallback";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const featuredItems = [
  {
    id: "f1",
    title: "Camisa da Final da Copa 1994",
    description: "Camisa oficial usada na final da Copa do Mundo de 1994",
    currentBid: 85000,
    timeRemaining: "5h 30m",
    imageUrl: "https://images.unsplash.com/photo-1757365225211-1515ecc8a109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBqZXJzZXklMjBzcG9ydHMlMjBjb2xsZWN0aWJsZXxlbnwxfHx8fDE3NTc1OTczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Camisa histórica da Copa"
  },
  {
    id: "f2",
    title: "Capacete Super Bowl Vintage",
    description: "Capacete usado no Super Bowl dos anos 80",
    currentBid: 125000,
    timeRemaining: "1d 2h 15m",
    imageUrl: "https://images.unsplash.com/photo-1508354486999-d33bd3cecc4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGhlbG1ldCUyMHNwb3J0cyUyMGdlYXJ8ZW58MXx8fHwxNzU3NTk3MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Capacete histórico do Super Bowl"
  },
  {
    id: "f3",
    title: "Autógrafo Magic Johnson",
    description: "Foto histórica autografada durante as Olimpíadas",
    currentBid: 95000,
    timeRemaining: "3d 8h 45m",
    imageUrl: "https://images.unsplash.com/photo-1660260091479-10f5555ef462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhdXRvZ3JhcGglMjBtZW1vcmFiaWxpYXxlbnwxfHx8fDE3NTc1OTczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Autógrafo histórico"
  }
];

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Destaques do Mês
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Itens exclusivos e de edição limitada com valor histórico inestimável.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl overflow-hidden">
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/2">
                        <ImageWithFallback
                          src={item.imageUrl}
                          alt={item.imageAlt}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6">
                          {item.description}
                        </p>

                        <div className="mb-6">
                          <p className="text-gray-400 mb-2">Lance Atual</p>
                          <p className="text-4xl font-bold text-[#E53935]">
                            R$ {item.currentBid.toLocaleString('pt-BR')}
                          </p>
                        </div>

                        <div className="flex items-center text-gray-300 mb-6">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>{item.timeRemaining}</span>
                        </div>

                        <Button 
                          size="lg"
                          className="bg-[#E53935] text-white hover:bg-[#d32f2f] w-full md:w-auto"
                        >
                          Dar Lance Agora
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#E53935]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}