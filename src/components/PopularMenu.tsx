import { useState } from 'react';
import { ChefHat, Salad, UtensilsCrossed, Leaf, Fish } from 'lucide-react';

const categories = [
  { id: 'plat-thai', name: 'Plat Thaï', icon: ChefHat },
  { id: 'street-food', name: 'Street Food Jap', icon: UtensilsCrossed },
  { id: 'starters', name: 'Starters', icon: Fish },
  { id: 'salade', name: 'Salade Thaï', icon: Salad },
  { id: 'poke', name: 'Poke Bowl', icon: Leaf },
];

const menuItems = {
  'plat-thai': [
    {
      name: 'Pad Thaï',
      description: 'Nouilles de riz sautées aux crevettes, œuf, cacahuètes et germes de soja',
      price: '€14.50',
      image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Boe Bun',
      description: 'Vermicelles de riz, salade, herbes fraîches et nems',
      price: '€13.50',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Nouilles Curry',
      description: 'Nouilles sautées au curry thaï et légumes croquants',
      price: '€13.00',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Boeuf Curry',
      description: 'Bœuf mijoté au curry rouge, lait de coco et basilic thaï',
      price: '€15.50',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Tom Yam',
      description: 'Soupe aigre-piquante aux crevettes et citronnelle',
      price: '€12.00',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Riz sauté Kao Pad',
      description: 'Riz sauté à la thaïlandaise avec œuf et légumes',
      price: '€11.50',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Riz Pad Thaï',
      description: 'Riz sauté façon Pad Thaï, cacahuètes et citron vert',
      price: '€12.50',
      image: 'https://images.pexels.com/photos/1907247/pexels-photo-1907247.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  'street-food': [
    {
      name: 'Yakisoba',
      description: 'Nouilles sautées japonaises aux légumes et viande',
      price: '€12.50',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Karaage',
      description: 'Poulet frit japonais mariné et croustillant',
      price: '€11.00',
      image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ebi Katsu',
      description: 'Crevettes panées à la japonaise, sauce tonkatsu',
      price: '€13.50',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Katsu Kare',
      description: 'Poulet pané accompagné de curry japonais et riz',
      price: '€14.00',
      image: 'https://images.pexels.com/photos/8629141/pexels-photo-8629141.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  starters: [
    {
      name: 'Prawn Balls',
      description: 'Beignets de crevettes croustillants, sauce aigre-douce',
      price: '€7.50',
      image: 'https://images.pexels.com/photos/6249525/pexels-photo-6249525.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Nems crevettes',
      description: 'Rouleaux frits aux crevettes et vermicelles',
      price: '€6.50',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Crispy Nems',
      description: 'Nems croustillants aux légumes et porc',
      price: '€6.00',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Samoussas Légumes',
      description: 'Triangles croustillants farcis aux légumes épicés',
      price: '€5.50',
      image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Brochettes bœuf fromage',
      description: 'Brochettes de bœuf au fromage grillées',
      price: '€8.00',
      image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Brochettes saté poulet',
      description: 'Brochettes de poulet marinées, sauce cacahuète',
      price: '€7.50',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Nems poulet',
      description: 'Rouleaux frits au poulet et légumes',
      price: '€6.50',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  salade: [
    {
      name: 'Papaya Salad',
      description: 'Salade de papaye verte, tomates, cacahuètes et sauce piquante',
      price: '€10.50',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Salade Thai Bowl',
      description: 'Salade fraîche aux herbes thaï, poulet grillé et vinaigrette citronnée',
      price: '€11.50',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
  poke: [
    {
      name: 'Chicken Bowl',
      description: 'Poulet mariné, riz, avocat, edamame et sauce teriyaki',
      price: '€13.50',
      image: 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Bubble Bowl',
      description: 'Saumon, thon, riz vinaigré, concombre et algues',
      price: '€15.00',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Saumon Bowl',
      description: 'Saumon frais, riz, avocat, mangue et sésame',
      price: '€14.50',
      image: 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Vegan Bowl',
      description: 'Tofu mariné, quinoa, légumes croquants et sauce soja',
      price: '€12.50',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
};

export default function PopularMenu() {
  const [activeCategory, setActiveCategory] = useState('plat-thai');

  return (
    <section id="menu-section" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-azuma-gold font-medium text-sm mb-2 tracking-wide">
            - CHOOSE DELICIOUS -
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {/* POPULAR */}
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-azuma-gold'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <category.icon className="w-8 h-8" strokeWidth={1.5} />
                <span className="text-sm font-medium">{category.name}</span>
                {activeCategory === category.id && (
                  <div className="w-full h-0.5 bg-azuma-gold rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 group cursor-pointer hover:bg-white/5 rounded-lg p-4 transition-all duration-300"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/10 shadow-md group-hover:border-azuma-gold transition-colors duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold text-azuma-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-white ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-3">
            <span className="bg-azuma-gold text-black text-xs font-bold px-3 py-1 rounded">
              Azuma
            </span>
            <p className="text-gray-300">
              Des plats uniques et délicieux préparés par nos{' '}
              <a href="#" className="text-azuma-gold font-semibold underline hover:text-white transition-colors">
                chefs passionnés.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
