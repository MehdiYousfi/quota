import { Clock, MapPin, Phone, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
          Nous <span className="text-red-600 font-medium">Contacter</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Horaires</h3>
            <p className="text-gray-400 leading-relaxed">
              Ouvert du mardi au dimanche<br />
              De 11h - 14h30<br />
              Lundi de 16h - 22h45<br />
              Fermé lundi matin
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Adresse</h3>
            <p className="text-gray-400 leading-relaxed">
              36 Bis Av de l'Europe<br />
              92700 Colombes<br />
              France
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Téléphone</h3>
            <p className="text-gray-400 leading-relaxed">
              <a href="tel:0185616263" className="hover:text-red-600 transition-colors">
                01.85.61.62.63
              </a>
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
              <Navigation className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Itinéraire</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=36+Bis+Av+de+l'Europe+92700+Colombes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white font-medium rounded-sm hover:bg-red-700 transition-all duration-300"
            >
              Google Maps
            </a>
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
          </div>
        </div>
      </div>
    </section>
  );
}
