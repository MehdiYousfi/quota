import { Clock, MapPin, Phone, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
          Nous <span className="text-azuma-gold font-medium">Trouver</span>
        </h2>
        <div className="w-24 h-1 bg-azuma-gold mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-azuma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-azuma-gold/20 transition-colors duration-300">
              <Clock className="w-8 h-8 text-azuma-gold" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Horaires</h3>
            <p className="text-gray-400 leading-relaxed">
              Lun - Ven: 11h30 - 14h30<br />
              18h00 - 22h30<br />
              Sam - Dim: 12h00 - 23h00
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-azuma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-azuma-gold/20 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-azuma-gold" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Adresse</h3>
            <p className="text-gray-400 leading-relaxed">
              123 Rue de la Gastronomie<br />
              75001 Paris<br />
              France
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-azuma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-azuma-gold/20 transition-colors duration-300">
              <Phone className="w-8 h-8 text-azuma-gold" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Téléphone</h3>
            <p className="text-gray-400 leading-relaxed">
              +33 1 23 45 67 89<br />
              <span className="text-sm">Réservations</span>
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-azuma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-azuma-gold/20 transition-colors duration-300">
              <Navigation className="w-8 h-8 text-azuma-gold" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Itinéraire</h3>
            <button className="mt-2 px-6 py-2 bg-azuma-gold text-black font-medium rounded-sm hover:bg-azuma-gold/90 transition-all duration-300">
              Google Maps
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light text-white mb-6">Commander en ligne</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-sm hover:bg-white/20 transition-all duration-300">
              UberEats
            </button>
            <button className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-sm hover:bg-white/20 transition-all duration-300">
              Deliveroo
            </button>
            <button className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-sm hover:bg-white/20 transition-all duration-300">
              Just Eat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
