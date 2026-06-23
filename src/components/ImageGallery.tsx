import React from 'react';

export const ImageGallery: React.FC = () => {
  const images = [
    "https://images.pexels.com/photos/32740383/pexels-photo-32740383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/30052739/pexels-photo-30052739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/6034155/pexels-photo-6034155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/30630894/pexels-photo-30630894.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/37423752/pexels-photo-37423752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  ];

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'; /* Fallback image */
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
          Our Beautiful Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-3xl shadow-xl shadow-emerald-100 group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <img
                src={image}
                alt={`Flower ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                onError={handleError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold">Captivating Bloom {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
