import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Pizza"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 -mt-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.1em' }}>
          QUOTA
        </h1>

        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wider mb-12 animate-slide-up">
          Pizzeria & Restaurant
        </h2>

        <div className="flex justify-center animate-slide-up">
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 bg-red-600 text-white font-medium rounded-sm hover:bg-red-700 transition-all duration-300 hover:scale-105"
          >
            Voir le Menu
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-red-600 w-8 h-8" />
      </div>
    </section>
  );
}
