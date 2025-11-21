import { useState } from 'react';
import { Pizza, Flame, Sandwich, Salad, UtensilsCrossed, IceCream } from 'lucide-react';
import {
  pizzasSpeciales,
  pizzasBaseTomate,
  pizzasBaseCremeFraiche,
  paninis,
  salades,
  texMex,
  desserts,
  kebabs
} from '../data/menuData';

const categories = [
  { id: 'speciales', name: 'Pizzas Spéciales', icon: Flame },
  { id: 'tomate', name: 'Base Tomate', icon: Pizza },
  { id: 'creme', name: 'Base Crème Fraîche', icon: Pizza },
  { id: 'kebab', name: 'Kebabs Signature', icon: UtensilsCrossed },
  { id: 'paninis', name: 'Paninis', icon: Sandwich },
  { id: 'salades', name: 'Salades', icon: Salad },
  { id: 'tex-mex', name: 'Tex-Mex', icon: Flame },
  { id: 'desserts', name: 'Desserts', icon: IceCream },
];

const menuItems = {
  speciales: pizzasSpeciales,
  tomate: pizzasBaseTomate,
  creme: pizzasBaseCremeFraiche,
  kebab: kebabs,
  paninis: paninis,
  salades: salades,
  'tex-mex': texMex,
  desserts: desserts,
};

export default function PopularMenu() {
  const [activeCategory, setActiveCategory] = useState('speciales');

  return (
    <section id="menu-section" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-medium text-sm mb-2 tracking-wide">
            - NOTRE CARTE -
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Menu
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-red-600'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <category.icon className="w-8 h-8" strokeWidth={1.5} />
                <span className="text-sm font-medium">{category.name}</span>
                {activeCategory === category.id && (
                  <div className="w-full h-0.5 bg-red-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 group cursor-pointer hover:bg-white/5 rounded-lg p-4 transition-all duration-300"
            >
              {/* Image */}
              {item.image && (
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-white/10 shadow-md group-hover:border-red-600 transition-colors duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-red-600 uppercase transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex gap-2 ml-4">
                    {item.priceM && (
                      <div className="text-center">
                        <span className="text-xs text-gray-400 block">M</span>
                        <span className="text-base font-bold text-white">{item.priceM}</span>
                      </div>
                    )}
                    {item.priceG && (
                      <div className="text-center">
                        <span className="text-xs text-gray-400 block">G</span>
                        <span className="text-base font-bold text-white">{item.priceG}</span>
                      </div>
                    )}
                    {item.price && !item.priceM && !item.priceG && (
                      <span className="text-base font-bold text-white">{item.price}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-3">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
              QUOTA
            </span>
            <p className="text-gray-300">
              +5€ pour la livraison | Fraîche Maison{' '}
              <span className="text-red-600 font-semibold">+1.90€</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
