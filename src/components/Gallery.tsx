const galleryImages = [
  'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-black text-center mb-4">
          Nos <span className="text-azuma-gold font-medium">Créations</span>
        </h2>
        <div className="w-24 h-1 bg-azuma-gold mx-auto mb-16"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={image}
                alt={`Plat ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
