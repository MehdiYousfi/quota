export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">
          Bienvenue chez <span className="text-red-600 font-medium">QUOTA</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          QUOTA est votre pizzeria de quartier où la tradition italienne rencontre la créativité française.
          Nos pizzas artisanales sont préparées avec des ingrédients frais et une pâte faite maison chaque jour.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Du classique Margherita aux créations signature comme notre Americana ou La Biggy,
          chaque pizza est une invitation au voyage culinaire. Découvrez également nos kebabs signature
          et nos délicieux paninis.
        </p>
      </div>
    </section>
  );
}
