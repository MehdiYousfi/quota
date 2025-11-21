import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-azuma-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            src="/292566443_425625076248517_2793724324244706787_n.jpg"
            alt="AZUMA Logo"
            className="w-32 md:w-40 mb-6"
          />

          <div className="flex gap-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-azuma-gold transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-black" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-azuma-gold transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-black" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-azuma-gold transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-black" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-6">
            <a href="#" className="hover:text-azuma-gold transition-colors duration-300">Mentions légales</a>
            <a href="#" className="hover:text-azuma-gold transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" className="hover:text-azuma-gold transition-colors duration-300">CGV</a>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} AZUMA - La Cantine Asiatique. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
