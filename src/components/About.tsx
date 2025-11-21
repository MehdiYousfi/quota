export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">
          Bienvenue chez <span className="text-azuma-gold font-medium">AZUMA</span>
        </h2>
        <div className="w-24 h-1 bg-azuma-gold mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          AZUMA est une cantine asiatique moderne où l'authenticité de la cuisine thaï rencontre l'élégance contemporaine.
          Nous vous proposons une expérience culinaire unique, élaborée avec des ingrédients frais et de qualité premium.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Chaque plat est préparé avec passion, respectant les traditions tout en apportant une touche de modernité
          qui fait notre signature.
        </p>
      </div>
    </section>
  );
}
