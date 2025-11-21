import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-600/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.1em' }}>
            QUOTA
          </h2>

          <div className="flex gap-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-6">
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Mentions légales</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">CGV</a>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} QUOTA - Pizzeria & Restaurant. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
