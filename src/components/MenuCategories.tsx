import { Flame, ChefHat, Sandwich, Salad, Fish, Coffee } from 'lucide-react';

const categories = [
  {
    icon: Flame,
    title: 'Starters',
    description: 'Découvrez nos entrées authentiques : nems croustillants, raviolis vapeur et rouleaux de printemps',
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ChefHat,
    title: 'Plats Thaï',
    description: 'Pad Thaï, currys parfumés et woks savoureux préparés selon les recettes traditionnelles',
    image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sandwich,
    title: 'Gua Bao',
    description: 'Petits pains moelleux garnis de viandes marinées et légumes croquants',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Salad,
    title: 'Salade Thaï',
    description: 'Salades fraîches et colorées aux saveurs aigres-douces typiques de la Thaïlande',
    image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Fish,
    title: 'Poke Bowl',
    description: 'Bols équilibrés avec poisson frais, riz, légumes croquants et sauces maison',
    image: 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Coffee,
    title: 'Boissons',
    description: 'Thés asiatiques, jus frais et boissons exotiques pour accompagner votre repas',
    image: 'https://images.pexels.com/photos/1435901/pexels-photo-1435901.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function MenuCategories() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
          Notre <span className="text-azuma-gold font-medium">Carte</span>
        </h2>
        <div className="w-24 h-1 bg-azuma-gold mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                <category.icon className="w-8 h-8 text-azuma-gold mb-3" />
                <h3 className="text-2xl font-medium text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
